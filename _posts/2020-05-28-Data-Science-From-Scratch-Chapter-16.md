---
layout: post
title: Data Science from Scratch -- Chapter 16
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

The idea behind logistic regression is similar to linear and multiple regressions in that the goal is to predict a feature of a data point. The difference is that logistic regression is for classification, and specifically determining whether something is in or out of a particular category.

## The Example Problem

The example problem for this section seems to me to be a rather common type of scenario (or one that generalizes well). We are given a collection of users (anonymized, of course) with their salary, their number of years of experience, and whether they have are premium members. The goal is to try to come up with a scheme that predicts whether other users are paid users given only their salary and the number of years of experience that they have.

The goal is to have the prediction either be a 0 or 1. But to get to that prediction, we will be working with a value that runs between 0 and 1 which will be interpreted as the probability that the user is on a paid account. If this number is 50% or above, the prediction will round up to 1 (the user is more likely a paid user), otherwise we would let it round down to zero.

A function that gives this type of behavior is the logistic function, $$f(x) = \frac{1}{1 + e^{-x}}$$. This is an increasing function whose range is $$(0,1)$$ and has the property that $$f(0) = \frac{1}{2}$$. This means if $$x \geq 0$$ then the prediction would be 1, otherwise the prediction would be 0. So this just turns out to be a useful function.

The process of fitting the model is identical to before. Our equation is of the form $$y_i = f(x \cdot \beta) + \epsilon_i$$, where that dot product is taken between the vectors of input features (with a leading 1) and the constant vector of coefficients. Just as before, we will use gradient descent, but this time we aren't minimizing the squared error. We have to look at finding the distribution that gives us the maximum of the likelihood of obtaining our data set. For various reasons, this reduces down to the finding the minimum of the negative log likelihood: $$\log L (\beta | x_i, y_i)  = y_i \log( f(x \cdot \beta) ) + (1 - y_i) \log( 1 - f(x \cdot \beta) )$$.

But once that is set up, everything is basically the same thing all over again.

## Support Vector Machines

Every machine learning course or tutorial that I've seen talks about support vector machines. I find the concept intuitive, but I find the actual practice of working with it less so. I was somewhat hoping that the book would do this from scratch to help me think through the details a bit more, but (quoting the book) "it's hard (and probably not a good idea) to use support vector machines without relying on specialized optimization software written by people with the appropriate expertise." So I didn't actually get the SVM discussion I was hoping for.
