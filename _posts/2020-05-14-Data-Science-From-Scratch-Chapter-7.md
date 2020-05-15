---
layout: post
title: Data Science from Scratch -- Chapter 7
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

Hypothesis testing is one of those subjects that I feel like I didn't understand until the third or fourth time I went through it. Unlike the previous couple chapters, which felt like flyovers, this section actually feels like it goes into a fair amount of depth for an introduction to the topic. Rather than touching on a bunch of different ideas, it leans into two specific examples that drive the entire chapter.

## Coin Flipping

The example the book uses is the simple question of trying to decide whether a coin is fair. The idea is simply that you're going to flip a coin some large number of times, and then see whether the results seem likely based on the assumption that the coin is fair (the null hypothesis in this case). If not, then it's more reasonable to conclude that the coin is unfair.

The author takes the time to create four functions to measure the area under the normal distribution. There's a function for the area to the left of a value, the area to the right of a value, the area between two values, and the area outside of two values. I like this approach because it makes the reasoning and intuition far more explicit than trying to do everything with a single function. He also goes the other way around and creates upper/lower bound functions for the normal curve. (What is the value of x such that the area to the right/left of $$x$$ is equal to a certain value?) He doesn't talk about $$z$$-tables at all, but this is all just a forward/backwards look-up on the $$z$$-table.

Using 1000 coin flips, he determines that the 95% confidence interval is (469, 531) and uses this to talk about type 1 errors (rejecting the null hypothesis when it's true). For my class, I always emphasize that sometimes the result you observe is simply randomness being random. So finding a value outside of this interval does not mean that the coin is unfair, but rather that from the data it seems unlikely from the coin is fair. He then goes on to talk about type 2 errors (failing to reject the null hypothesis when it is false) and the power of a test. This value is dependent upon the alternative hypothesis, and it is complement of the probability (given the alternative hypothesis) that the result is in the 95% confidence interval from before.

He then goes on to talk about $$p$$-values, which are just the probability of the result being at least as extreme as what was observed. He does give a good warning about the assumption that the values are normally distributed in this section, but overall that section is a little bit short. Confidence intervals and $$p$$-hacking both get about a page, and while they're important ideas, that amount of space just really isn't sufficient.

## A/B testing

The next example is A/B testing, which is something that's I've seen in all sorts of data science contexts, so I'm not at all surprised that it makes an appearance in this section. It's pretty light on the details and he just gives you the formulas to use, but for the purposes of this book that's probably fine. I don't think this book is supposed to used as a statistical reference, and so he just wants to show that there are these formulas you can use and then trusts you to learn it on your own.

## Bayesian Inference

The last part of the book is about Bayesian priors and the beta distribution. He admits that it's useful to understand and that it's not something he talks about in his book, so this feels appropriately light and fast.
