---
title: "Thermal Network Analysis Tool"
description: "Interactive thermal resistance network solver for rapid system-level thermal design. Web-based with real-time visualisation."
date: 2024-06-01
tags: ["Python", "thermal", "web", "tools"]
link: "https://thermal.christiandreyer.no"
featured: false
---

## Overview

A browser-based tool for building and solving thermal resistance networks — the engineering equivalent of circuit simulators but for heat flow. Useful for early-stage system design before committing to full CFD.

## Motivation

Thermal resistance networks are standard practice but the tooling is poor: most engineers do it in Excel or MATLAB scripts that are hard to share and visualise. This tool makes it interactive.

## Features

- Drag-and-drop network builder
- Automatic solving via sparse matrix methods
- Temperature visualisation with colour mapping
- Export to CSV / report PDF

## Stack

Python (FastAPI backend), HTMX, SVG-based visualisation
