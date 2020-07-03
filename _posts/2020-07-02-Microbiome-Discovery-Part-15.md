---
layout: post
title: Microbiome Discovery - Part 15
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 15 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is a presentation on clustering.

## Problems with Clustering

He shows a graph of supervised clustering, which creates a visualization that can create the illusion of clustering (by the nature of the algorithm) even though that clustering is not really there.

Calinski-Harabasz is a measure that is used to determine the number of clusters. However, this does not demonstrate the existence of these clusters. It merely determines which number of clusters is "more likely" but without giving an absolute measure of how likely those clusters really are.

To get that absolute measure, you can use the silhouette index. This quantity basically measures how much distance there is between elements of clusters. The result is always between -1 and 1, and values closer to 1 indicate better clustering. But there is a bit of controversy to these approaches.

## Prediction Strength

This is an alternative to the silhouette index. The method is to split the data in half, and perform the clustering on each half. Then you assign the points of the first half using the clustering of the second half. Then you count the number of co-memberships that are preserved, and this gives you a measure of how well stable the clusters are. If there are good clusters, then things should be well-preserved under this method. The reported value is the worst fraction of all of the second-half clusters.

## Challenges of Continuous Gradients

The clustering process can create artificial boundaries that are used for making discrete bins, but it's possible for those discrete bins to mask information if the information is more continuous. In particular, for data points near a boundary are treated the same as data points that are far from the boundary in the binning process. For clinical applications, this can mean that two people with very similar measurements may be categorized very differently because of the artificially discrete boundaries that were generated.

## Summary

Supervised ordination is dangerous. It can lead to the illusion of clusters where they don't exist. The values he uses are either a prediction strength of 0.9 or larger, or a silhouette index of 0.5 or larger.

Clusters are useful for high dimensional data, but a direct analysis is usually better if there are known gradients or groups.
