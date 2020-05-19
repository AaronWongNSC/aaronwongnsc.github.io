---
layout: post
title: Data Science from Scratch -- Chapter 12
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

The KNN classifier is the one that I explained to my CS course a few semesters ago because it's the most intuitive classification algorithm. It's so intuitively simple that this always seems to be the first machine learning algorithm that's presented.

## KNN Classifier

The only requirement for the KNN classifier is a metric on the space of features. Usually, this is just Euclidean distance, but it could theoretically be other things. The book also points out the assumption that points that are close to another are similar, but I don't even know what anyone would do if that assumption were not valid. Basically, the setup is that any point is determined by a "vote" of the $$k$$ nearest data points. So all you need is a function to count votes and a function to determine distances, and you're set to go.

## The Iris Dataset

In addition to being the first machine learning algorithm presented, it seems obligatory to apply the method to the Iris dataset. He does a quick graph of all six scatter plots and then trains his algorithm on that. It's worth noting that he also writes his own function to split the data into a training set and testing set. My memory is that scikitlearn has something that does that, but I'd have to go back and play with it again to remember exactly how that works.

## The Curse of Dimensionality

He spends several pages talking about the curse of dimensionality, which is that high dimensional spaces create large distances between points, and so having too many features in your data set means that points just end up being quite far from each other (unless you have a HUGE amount of data). This reduces the viability of KNN because now you don't have enough "closeness" in the data points to have the voting make sense.
