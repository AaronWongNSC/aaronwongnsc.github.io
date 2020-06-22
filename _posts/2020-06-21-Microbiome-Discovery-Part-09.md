---
layout: post
title: Microbiome Discovery - Part 9
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 9 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) covers UniFrac, which is a metric used as part of the beta diversity measure.

## UniFrac

The Euclidean, Chi-Squared, and Bray-Curtis metrics do not take phylogenetics into account. This leaves biological information on the table. The method is similar to the phylogenetic alpha diversity metric. UniFrac is a measure of what fraction of the phylogenetic tree is unique to one sample when comparing it to the other. Another version of this is "weighted UniFrac" which also takes the relative abundances into account.

The weighted UniFrac approach tends to put more emphasis on the common microbes, whereas the unweighted UniFrac approach puts more emphasis on the rare microbes. Neither approach is better or worse than the other, so it really depends on what you are trying to measure.

## More Code

He uses a Python script run from inside of R to calculate the UniFrac metric on the Guerror Negro dataset. One of the files necessary for this is the phylogenetic tree, which he makes available. Presumably, this is something where you've got to pick the right tree for the type of work you're doing to avoid having an excessively large file.

He also includes code to turn diagrams in R into PDF files. In R Studio, this can just be saved as a PNG directly.

## Comparisons

He uses the pairs command in R to compare the different metrics and computes the Pearson correlation for them. This just shows which metrics get similar results and which ones are more aberrant. This is the foundation of his statement that the Euclidean distance tends to not work that well for phylogenetic diversity.

## Physical Depths

The Guerro Negro dataset is drawn at different physical depths, but in the analyses performed that depth was treated simply as levels and not a continuous function. So he looked at which metric was best able to capture that physical depth even though it's not strictly part of the dataset. In order to do that, he needs to create manual loops to do this analysis.

## Using Baseline Samples

The last part of the video talks about a "neat trick" that can help visualize the beta diversity. If you have a base set of data that can be used as a reference set, you can convert each sample into a single number by calculating the average distance to each of the samples in the reference set.
