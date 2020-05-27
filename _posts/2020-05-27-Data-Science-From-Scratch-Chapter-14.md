---
layout: post
title: Data Science from Scratch -- Chapter 14
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

A simple linear regression is a best fit line that shows the underlying relationship between two variables. For most datasets, this relationship will be imperfect, so the relationship will also include an error term. The idea is to find a relationship between the variables $$x_i$$ and $$y_i$$ of the form $$y_i = \beta x_i + \alpha + \varepsilon_i$$, where $$\alpha$$ and $$\beta$$ are constants, and $$\varepsilon$$ is the error term, which is hopefully relatively small.

## Best Fit

We can pick any values of $$\alpha$$ and $$\beta$$, and this can be made to work. We would just need to adjust the values of $$\varepsilon_i$$ to make the two sides of the equation equal to each other. The measure of how well the parameters $$\alpha$$ and $$\beta$$ are chosen is relative to the error terms. Specifically, we want to pick them so that $$\sum \varepsilon_i^2$$ is minimized. We need to make sure that we pick something where the error is always positive (otherwise large positive and negative errors may cancel each other out). Squaring makes everything positive, plus it has the advantage of being differentiable (unlike the absolute value).

## Coefficient of Determination

I don't remember seeing this term, but it's apparently another name for $$r^2$$, where $$r$$ is the correlation coefficient. This value measures the fraction of the total variation in the dependent variable that is captured by the model. It's been a long time since I've thought about that stuff, so I don't actually remember the details of how this is defined and derived. I'll try to remember to do some background reading on that later. In any event, this value is a measure of how well the model fits the data.

## Gradient Descent

But rather than deriving a general formula, it's possible to just apply gradient descent to search for the minimum error. This was again done using the built-from-scratch functions that he created. There's nothing too fancy going on there.

## Maximum Likelihood Estimation

The section closes with a brief discussion of maximum likelihood estimation. Given a dataset, what is the distribution that data is most likely to have come from? The underlying assumption that is used for a linear regression is that the errors are normally distributed with mean of 0 and some (known) standard deviation. That gives us a formula that can be used to calculate the likelihood that a particular data point will be measured depending on the parameters $$\alpha$$ and $$\beta$$. With that, this whole section can be reframed as minmizing the product of mutiple likelihood functions and attempting to minimize that result.
