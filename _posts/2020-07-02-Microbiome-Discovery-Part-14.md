---
layout: post
title: Microbiome Discovery - Part 14
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 14 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) discusses the concept of constrained ordination.

## Correspondence Analysis

The idea of correspondence analysis is the same as doing chi-squared distances on the feature table then applying PCoA to it. But there's an additional layer to it.

Unimodal response simply means that the graph of the data has a single peak. For example, if you're looking at the frequency of a particular microbe as a function of depth, it has a unimodal response if the frequency graph only has a single peak. If this is true, then correspondence analysis can recover the gradient and put the species "in order." This results in a biplot that generates another horseshoe curve.

When looking at the graph, it is important to know what fraction of the curve is explained by the axes from the PCoA. This is obtained by dividing the eigenvalue for the particular axis by the total chi-squared value. (He writes this as `my.ca$CA$eig/my.ca$tot.chi`, where this is using the vegan package).

## Canonical Correspondence Analysis

This is also called "Direct Gradient Analysis." This is done by mixing correspondence analysis and multiple regression. Both CA and CCA maximize the correlation between species scores and sample scores, but with CCA the sample scores are linear combinations of the environmental variables. (I'm not entirely sure what the species scores and sample scores are.)

Here's the process:
- Convert OTU table to chi-square distances.
- Perform CA (to get sample scores on each axis).
- Do a regression of the CA coordinates on the environmental variables.
- Use the fitted coordinates as the CCA coordinates.

He shows an example analysis. There's a graph with three different vectors from the origin, corresponding to "end depth", "chemotaxis", and "flagella" from the Guerrero Negro data set. The important thing about this graph is the end depth and chemotaxis are pointing in roughly opposite directions, so that chemotaxis has a negative correspondence with end depth, but the flagella vector points roughly orthogonal to end depth, which means that it's measuring something else. This is called a triplot.

## Monte Carlo Simulation

He then talks about how you can generate a p-value for the outcome by doing a Monte Carlo simulation on the data. By shuffling the order of the metadata (I'm not sure what that really means), you can generate a distribution of the percent-explained value, which can then be used to generate the p-value.
