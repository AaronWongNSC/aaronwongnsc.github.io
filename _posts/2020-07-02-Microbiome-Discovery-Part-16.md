---
layout: post
title: Microbiome Discovery - Part 16
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 16 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) provides background in supervised learning algorithms.

## Why Machine Learning?

He starts off the presentation with a slide that shows that a lot of the microbiome data sets are sparse (mostly zero). This means that you have a high dimensional data set with relatively few data points in them, which makes them harder to analyze. Machine learning can be used in this situation.

The goal that he is going to have is to attempt to classify new, unlabeled communities based on a set of labeled training communities.

## Estimating the Accuracy

He shows a graph of high bias/low variance to low bias/high variance, which he describes as a graph of prediction error vs. model complexity. This leads into a discussion of how to assess models.

The idea is cross validation, which is used when there isn't enough data to create a separate validation set. The data is cut (for example) into 5 bins, and the model is trained on four of the bins, and then that model is tested on the fifth bin. This is done with each bin having a turn as the validation bin.

## Information Leak

Information leak is what happens when you use the training data as part of the testing data. In essence, it's the machine learning algorithm cheating because it already saw some of the answers. The underlying idea is that you should always have some data that the model has never seen when you're testing the quality of the model. He gives a couple examples of how this happens in practice, and the errors are "easy" errors to make. So he outlines a scheme to avoid those errors.

## Nested Cross Validation

The idea of nested cross validation is to break the initial data set into 5 pieces, set one of those aside as testing data, and then take the four other bins and break them into 5 pieces to do the training and validation. Then from the four bins, you then break that into pieces to do your cross validation (pick the best of these), and then use that to then test on your remaining data. It's important that you "lock in" the model before you test it. This helps to make the test data a "true" test and avoids information leak.
