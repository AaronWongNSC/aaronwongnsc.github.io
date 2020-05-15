---
layout: post
title: Data Science from Scratch -- Chapter 8
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

We're starting to finally get towards some of the meatier content. This section on gradient descent is a pretty good high level overview. He tries to straddle the line between being mathematically dense (too much for the average person) but while remaining mathematically accurate.

## Gradient Descent

The idea behind gradient descent is that the gradient of a multivariable function is parallel to the direction of increase. We can estimate the grident by using a finite difference approximation, and then by repeating that approximation it's possible to reach a local minimum or maxmimum. (To get to a local minimum, use the negative gradient for the direction.) This turns out to be a computationally efficient method for optimization. There is some play with the number of iterations and the step size, but this can generally be optimized decently well. The book goes through an explicit example, which I think is helpful for understanding what's happening. But I suspect that this chapter is one that is often quickly breezed over because it's a little bit on the more technical side.

## Minibatch/Stochastic Gradient Descent

The book briefly goes into a method of gradient descent that does not use the gradient of the entire function but instead just does the gradient in small batches. While there wasn't much for me to pick up here on the math side, I did more fully understand the ```yield``` command for exiting a function. Basically, it exits the function like a ```return``` except that the next time the function is called it just picks up where it left off. This means that certain variables will be held in memory instead of being lost, which can make certain computations more efficient. I've never used it, but it was mentioned in an earlier chapter, and I didn't quite get it back then. But now it makes sense.
