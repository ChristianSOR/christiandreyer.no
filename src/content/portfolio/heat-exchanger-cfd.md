---
title: "Shell-and-Tube Heat Exchanger CFD"
description: "High-fidelity CFD analysis of a shell-and-tube heat exchanger using OpenFOAM. Validated against experimental data from a lab test rig."
date: 2023-09-01
category: project
tags: ["CFD", "OpenFOAM", "heat transfer", "validation"]
image: "/images/portfolio/heat-exchanger.jpg"
github: "https://github.com/christiandreyer/heatex-cfd"
featured: true
---

## Overview

Full 3D CFD model of a single-pass shell-and-tube heat exchanger, built and validated as part of MSc research. The primary goal was to identify the flow distribution through the tube bundle and quantify maldistribution effects on thermal performance.

## Methodology

- Geometry modelled in FreeCAD, meshed with snappyHexMesh
- RANS k-ω SST turbulence model (better separation prediction than k-ε)
- Conjugate heat transfer between fluid domains and solid tube walls
- Parametric study: 5 flow rates × 3 baffle configurations = 15 cases

## Results

- Identified a recirculation zone behind the inlet nozzle reducing effective heat transfer area by ~12%
- Optimised baffle spacing reduced pressure drop by 18% at equal thermal duty
- Simulation results within 8% of experimental Nusselt number correlation

## Stack

OpenFOAM 2206, Python (post-processing), ParaView
