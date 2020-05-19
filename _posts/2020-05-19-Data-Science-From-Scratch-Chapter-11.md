---
layout: post
title: Data Science from Scratch -- Chapter 11
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

I really got my first introduction to machine learning watching Andrew Ng's [CS229 lecture videos](https://www.youtube.com/watch?v=UzxYlbK2c7E&list=PLA89DCFA6ADACE599) from 2008 or so. I probably watched it 2-3 years ago by this point. So this isn't my first introduction to machine learning. It's hard for me to think about how it would be reading this through for the first time, but I think it feels like it's a nice, gentle introduction that avoids some of the more formal mathematical points.

## Models

The primary concept for machine learning is that your goal is to create a mathematical model that accurate represents the relationships between your variables. Machine learning is the process by which you create that model through a computer using the data. There are many ways this can be done, and the next several chapters go through a few of the methods.

## Overfitting and Underfitting

I know that this is something that I did not intuitively understand the first time. My brain has always wanted to cling to some sort of "exact" model as "the" best way of doing things. But if you fit your model too perfectly to your data, then it becomes useless for handling new data. And so there's a balance to be had. The graph of fitting 10 points with a line and a polynomial highlights just how dangerous it is. I'd like to believe that if I saw that picture, I would have understood the problem the first time.

Underfitting the data just means having something that really doesn't fit the data at all.

He waits for a bit before talking about the bias-variance tradeoff, and I almost wonder if that was an editing error. But it's basically the balance of fitting the data well, but not overfitting it so that you get bad predictions on new data. These are both measures of how the model would look if it were given different training sets (for the same underlying relationships). The bias is a measure of consistency from one model to the next, and variance is a measure of low consistency from one model to the next. An underfit model will have a high bias and low variance, and an overfit model will have low bias and high variance. Finding the right balance of these is the goal. You need your model to be flexible enough that it doesn't just give you the same answers no matter what data you're presented with, but it can't be so tuned that each new data set creates a completely different model.

## Feature Extraction and Selection

The ultimate challenge is to pick the right features to use to help predict outcomes, and to do it in a way that creates good outcomes. If you use all of the features, it's possible that you will end up overfitting the data. With too many variables, you may simply be creating a model that's responding to the noise of the data and not the underlying relationship. If you don't use enough features, then your model will not have enough information to meaningfully distinguish between cases. And the challenge is to pick the "best" ones to feed into your machine learning algorithm.

## Correctness

I like the example he used for explaining why accuracy isn't what we might intuitively think. If you simply measure the ratio of "correct" to "total attempts" you can end up with problems. This is very similar to the probability section with the rare disease example of Bayes' theorem. If there is an extremely rare disease, you can be very accurate by simply guessing that nobody has it. But it would be a terrible test to administer because it wouldn't actually be helpful to anyone. And so he introduces "precision" (accuracy of positive predictions) and "recall" (the fraction of positive cases identified by the model), and then defines the F1 score to be $$\frac{2pr}{p+r}$$. I have seen this before, but I have not actually used it for anything.
