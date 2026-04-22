---
title: "CFD Post-Processing Library"
description: "Python library for automated extraction, analysis, and plotting of OpenFOAM simulation results. Cuts post-processing time from hours to minutes."
date: 2024-02-15
category: project
tags: ["Python", "OpenFOAM", "automation", "data analysis"]
github: "https://github.com/christiandreyer/foam-postpro"
featured: true
---

## Overview

A lightweight Python package for OpenFOAM post-processing that handles the repetitive parts: reading field data, computing derived quantities, and generating publication-ready plots.

## Key features

- Reads OpenFOAM `postProcessing/` output directly (no ParaView required for scalar quantities)
- Computes bulk quantities: Nu, Re, pressure drop, effectiveness
- Generates convergence plots, surface averages, and parametric comparison charts
- CLI interface for batch processing of multi-case parametric studies

## Usage

```python
from foam_postpro import Case, PlotStyle

case = Case("./path/to/openfoam/case")
Nu = case.surface_average("T", patch="inlet") 
case.plot_residuals(save="residuals.pdf")
```

## Stack

Python 3.11, NumPy, SciPy, Matplotlib, Click (CLI)
