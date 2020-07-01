---
layout: post
title: Microbiome Discovery - Part 12
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 12 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) discusses how microbiome diversity can be visualized. Specifically, he covers PCA (Principal Component Analysis), PCoA (Principal Coordinate Analysis), and NMDS (Nonmetric Multidimensional Scaling).

## Overview: Beta Analysis and Ordination

You start with a data table X (rows are samples, columns are features). Alpha diversity is run on the rows of this table (looking for diversity within a sample). This table can be converted to a table Y that measures the "distance" between, and this is a symmetric square matrix (rows and columns both represent samples). This is where we go to look at beta diversity. But we can't really visualize this matrix very easily. The process of turning this into a visual representation is called ordination. This converts this into another matrix where the rows are samples but the columns are principal axes of variation. If you only stick to the first two or three axes, this becomes something that can be plotted, where you can begin to look for clustering.

Before running the analyses below, he needed to convert the data into relative abundances instead of absolute abundances. He does this on the Guerro Negro data that was used earlier in the beta diversity example.

PCA is PCoA using Euclidean distances. This is often used outside of ecology because the Euclidean metric is often good for other applications, but Euclidean is not good for microbiome data.

NMDS is run through the vegan package. This creates plots with the horseshoe shape similar to what we saw in the beta diversity plots. However, the implementation of NMDS is iterative and so it may not be as statistically reliable, so PCoA should be preferred.

## Biplots

Once you have an ordination plot, you can see how each feature varies along each axis. PCA automatically gives the "loading" of the features along each axis, which helps with visualization. But there are also methods to get this with PCoA. He shows how to get one of these plots, but I didn't really follow along with his presentation of what he's actually showing.

## 3D PCoA in QIIME

He shows how to get a 3D graph out of QIIME. I think this is something I ran into when I was playing with some of the QIIME2 tutorials earlier. The result here is to look at clustering and the how the data points follow a type of "path" based on the parameter (in this case, depth). I'll probably need to come back to this again at some point because while it was interesting to watch, I don't really know what you do with this information.
