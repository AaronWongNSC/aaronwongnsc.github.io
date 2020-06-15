---
layout: post
title: Data Science from Scratch -- Chapter 20
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

Clustering in the process of taking unlabeled data points and applying them with labels so that you create collections of points that are all "close" to each other with the same label. This is a way of creating categories for data points when there are no initial categories to begin with.

## k-means Clustering

The k-means clustering method is an iterative process of creating clusters. In this case, you define the number of clusters up front and then computer searches to create the "best" clusters it can with that number of labels (which we'll call colors because it's easier for me to think about it that way). You begin by labeling all of the points with a random color. Then you take the average coordinate of all the points of each color. These points are known as the k-means. After obtaining the k-means, you then re-color all of the data points based on which mean it is closest to. After the recoloring is complete, new means are calculated and points are labeled again. This process repeats until the relabeling process doesn't change any colors. At that point, the algorithm is complete.

## Selecting the Number of Colors

The book suggests a computational approach for determining the "best" number of clusters. For each clustering, it's possible to calculate the sum of squared errors (the distance between a point and the mean of the points of that color). By plotting this as a function of k (the number of clusters), there is a point at which the graph of the curve bends, and that can be considered to be a good choice of k.

## Bottom-Up Clustering

The book then discusses a deterministic method of creating clusters. It begins by considering every individual point as its own cluster, then proceeds through a process of merging clusters together based on a distance measure. Sometimes the points are added to a cluster based on the shortest distance (which creates chains), sometimes the points are added to a cluster based on the furthest distance (which creates spheres), or you can also use the average distance to get something in between. The book notes that this is computationally heavy and inefficient, at least as a "from scratch" version.
