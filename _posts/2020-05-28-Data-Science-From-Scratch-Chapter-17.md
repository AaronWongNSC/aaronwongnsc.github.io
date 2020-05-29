---
layout: post
title: Data Science from Scratch -- Chapter 17
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

Decision trees are just a set of instructions (basically a flowchart) that take you down different paths depending on your answers. In context, these are used for more complex categorization schemes. (This can also be done as a regression tree to create numerical outputs instead of categorical outputs, but that is not discussed in the book.) The book is more interested in conveying the ideas about decision trees rather than creating an algorithm to optimize one.

## Entropy

The concept of entropy is the idea that certain questions are good at separating information and others aren't. If a question is more likely to have one answer than another, it is a low entropy question because it's not good at separating the information into groups. In some sense, you can "predict" the outcome because one is more likely than the other. There is a formula for this: $$H(S) = -p_1 \log_2 p_1 - \cdots - p_n \log_2 p_n$$, where $$S$$ is a set of data that has been placed into one of $$n$$ categories, and $$p_i$$ represents the proportion of data belonging to each of those classes.

The challenge is to move from this concept of entropy to something that helps us perform these classifications. The idea here is that the classes can be placed into partitions and we can then try to maximize the entropy of those partitions rather than simply looking at the entropy of the classes. The underlying goal here is to maximize the information that can be obtained from each decision, and this can be done my maximizing the entropy of the partition. If the partition consists of $$m$$ classes with proportions $$q_m$$, then the entropy of the partition is $$H = q_1 H(S_1) + \cdots + q_m H(S_m)$$. This is a greedy algorithm, and it is not always optimal.

The book then goes on to implement some code that performs this, but the code is not particularly informative and is simply executing the core idea.

## Random Forests

The book then goes on to talk about random forests, which is basically the act of making decision trees with subsets of the information, and then using all of those decision trees (an ensemble of trees) like votes to make a determination. The practical effect of this is that any particular decision tree is likely to skew towards overfitting the data, and so by randomizing the subsets and taking a poll, you're more able to correctly identify the features that are more common in the dataset and the overfitting features will tend to have muted weights in the overall scheme of things.
