---
title: "OpenFOAM on a Modern Linux Workstation"
description: "A practical setup guide: installation, case structure, and the workflow that actually sticks."
date: 2024-01-08
tags: ["openfoam", "cfd", "linux", "tooling"]
draft: false
---

OpenFOAM has a reputation for being painful to set up. That reputation is partly deserved — the documentation is fragmented and the case structure has a learning curve. But once it clicks, it's an exceptionally powerful tool.

Here's the setup that's worked well for me.

## Installation

Ubuntu 22.04 or later via the OpenCFD repository (ESI-OpenCFD version, i.e. `openfoam2312`):

```bash
# Add repository
curl -s https://dl.openfoam.com/add-debian-repo.sh | sudo bash

# Install
sudo apt-get install openfoam2312
```

Add to your `~/.bashrc`:

```bash
source /usr/lib/openfoam/openfoam2312/etc/bashrc
```

The Foundation version (`openfoam11`) is also fine, but ESI has better parallel performance and more up-to-date solvers.

## Case structure

Every OpenFOAM case follows the same structure:

```
case/
├── 0/               # Initial and boundary conditions
│   ├── U
│   ├── p
│   └── k, epsilon   # If using k-ε
├── constant/        # Mesh, material properties, turbulence model
│   ├── polyMesh/
│   └── momentumTransport  (or turbulenceProperties in older versions)
└── system/          # Solver settings, time control, numerical schemes
    ├── controlDict
    ├── fvSchemes
    └── fvSolution
```

## A minimal workflow

```bash
# 1. Generate or import mesh
blockMesh  # or use external mesher + gmshToFoam / fluent3DMeshToFoam

# 2. Check mesh quality
checkMesh

# 3. Set initial conditions (edit 0/ files)

# 4. Run
simpleFoam  # for steady RANS
# or
icoFoam     # for transient, incompressible, laminar

# 5. Post-process
paraFoam    # launches ParaView with OpenFOAM reader
```

## The thing nobody tells you

`checkMesh` warnings about maximum non-orthogonality > 70° will cause your simulation to diverge, usually after a few hundred iterations when you least expect it. Fix your mesh before you run.

Set `maxNonOrtho` in `fvSolution/relaxationFactors` to something conservative (0.5–0.7) for initial runs. You can tighten it once the residuals are well-behaved.

## Useful aliases

```bash
# In ~/.bashrc
alias of='source /usr/lib/openfoam/openfoam2312/etc/bashrc'
alias clog='tail -f log.simpleFoam'
alias pmesh='paraFoam -builtin &'
```

The learning curve is front-loaded. Once you've done 5–10 cases, the mental model snaps into place and it becomes fast to work with.
