---
layout: post
title: Microbiome Discovery - Part 7
tags: projects bioinformatics microbiome_discovery
category: learning
published: True
---

Part 7 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is a discussion of alpha diversity. Alpha diversity is a measure of the diversity of the biome within a specific sample. This is done after picking OTUs and assigning taxonomies.

## Methods

One approach to measuring diversity is simply to count the number of species in the sample. But there are some challenges to this. This is usually done with 97% OTUs to help "define" the species. But this does not accurately take into account how close the species are to each other.

To overcome that challenge, a second method uses phylogenetic diversity (PD). This uses measures that can be applied to a tree diagram. He doesn't directly discuss this calculation, but it looks like there's a weighted graph and he's adding up the weights on the smallest connected subgraph that reaches all of the detected species. (There's no information on how the weightings here are chosen.)

Neither of these two approaches take into account the distribution of species. For example, if 90% of the sample is from a single species and the other 10% is split among 9 species, that would be "as diverse as" a sample that had all ten species accounting for 10% each.

A third method is known as the Chao1 estimator. This is a formula that attempts to estimate the total number of species based on observations. It includes a measure that attempts to account for the number of unobserved species by adding in a correction factor. However, it's noted that while this does have a known variance, the variance is never used, and this has not been empirically tested in microbiome data. This could be another area of potential research given that there exist data sets out there (Yatsunenko et al).

## Rarefaction

This is a method for estimating whether the diversity has been accounted for. The diversity metrics are applied to randomized subsamples of the data. As the subsamples approach the overall sample size, this measure should theoretically flatten out as it approaches the final value. But if the subsample measures appear to be increasing, then it suggests that the sample did not capture the full diversity.
