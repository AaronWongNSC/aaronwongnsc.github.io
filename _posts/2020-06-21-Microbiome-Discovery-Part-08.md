---
layout: post
title: Microbiome Discovery - Part 8
tags: projects bioinformatics microbiome_discovery
category: learning
published: True
---

Part 8 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is a discussion of beta diversity. Beta diversity is a measure of the diversity of the biome between samples.

## Graphs of Beta Diversity

There are a couple different pictures of what beta diversity can look like under graphs. He gave a couple scatterplots based on axes that are probably derived from Principal Coordinate Analysis (PCoA -- which is discussed more later). Then colors were used to indicate certain sub-populations (either plotted by location in the body or repeated measures of an individual). There are both two-dimensional and three-dimensional versions of this plot, and there is some version of this in QIIME (so presumably also in QIIME2).

## Distance Measures

In order for this to work, there needs to be a measure of "distance" on the space of microbiome populations. The Euclidean distance is familiar, but it doesn't work well with ecological differences in ecological communities.

## Visualization

Once a distance measure is established, you can get a matrix of distances between every pair of sequences. This needs to collapsed into two (or three?) dimensions so that it could be visualized. The method of Principal Coordinate Analysis (which is similar to Principal Component Analysis) is used for this.

## Guerro Negro Data

He has a repository with code that he refers to for this section: [Beta Diversity - Guerroro Negro](http://metagenome.cs.umn.edu/microbiomecodebrowser/doc/index.html). This has chunks of code that show how to actually perform the calculations. He runs it using three different metrics (Euclidean, Bray-Curtis, and chi-squared). He does discuss those metrics and their usefulness briefly, but this will be something that is addressed later in the series. His analysis of the examples show that chi-squared is often the best choice for gradients.

(I do wish he had said a bit more about what the graph is really showing. That's something I'm probably going to have to work through a bit more to understand.)

In his summary, he points out that Bray-Curtis and Unifrac are good for microbiomes.
