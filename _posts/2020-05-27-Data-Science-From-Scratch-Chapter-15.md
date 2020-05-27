---
layout: post
title: Data Science from Scratch -- Chapter 15
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

Multiple regression is linear regression with extra variables. From a conceptual point of view, there's not much else to say about it.

## Mathematics

For a multiple linear regression, the relationship is now $$y_i = \alpha + \beta_1 x_{i1} + \beta_2 x_{i2} + \cdots + \beta_k x_ik} + \epsilon_i$$. We are still trying to identify the parameters that will minimize the sum of squared errors, but we do need to be careful that the data point vectors are linearly independent so that we are guaranteed a unique solution. We also need to assume that the errors are not correlated with the variables, otherwise we would introduce systemic errors through systemic biases.

## Fitting the Model

Once again, this is a gradient descent problem. I don't know how much more there needs to be said about it.

## Understanding the Model

The model that we get gives us a way to think about how changes in the parameters change the outcome under the assumption that everything else is equal. So if you know nothing except for one difference between two data points, this attempts to capture how much that difference matters. However, we cannot directly know anything about relationships between variables from this. And there are an infinite number of different types of formulas we can try to fit the data, and every time we add a new term we know that the optimal sum of squares error will not increase (and will usually decrease). The reason is that each new term we add can be thought of as already existing in the model except with a coefficient of zero.

Another way to say this is that the $$r^2$$ will usually go up if we increase the number of terms in the model. But that does not always mean that the model is getting "better" because we run the risk of overfitting the data. So it is important to also look at the standard errors of the coefficients, which help us to know the degree of certainty of the coefficients. If the standard error is large, then that particular coefficient isn't particuarly relevant. The book leaves this math on the table because it's too much for the intended audience.

Rather than approaching this directly, the author uses bootstrapping to address this indirectly. Bootstrapping is the process of creating multiple datasets out the original dataset by treating the data points as independent random choices with replacement. From this, it is possible to get an empirical estimate of the range of values that any parameter might take, and use this as the proxy for directly calculating the standard error of the coefficient. If different bootstrap samples lead to wildly different values of the coefficient, then the coefficient is probably not giving us a lot of useful information. But if the coefficient is stable under this type of sampling, then its probably meaningful.

The book hints at the student's t-distribution, but it doesn't really go into any detail about it (other than to say that it's hard to build this from scratch). However, he does note that if the number of degrees of freedom is large, then you can use the normal distribution and get pretty close. He also points out that in real life, you're probably using a statistics program that will take care of all of this for you.

He lastly points to the F-distribution, which is a way of handling more complex scenarios involving multiple variables. But then he says that this is also beyond the scope of the book and moves on.

## Regularization

A general goal of multiple linear regressions is to have a model that can be understood and interpreted. It is easier to interpret an equation with only three non-zero coefficients than it is to interpret a slightly better equation with lots more variables. Regularization is a process by which you can penalize large coefficients, and therefore encourage more coefficients to be smaller and producing a simpler model. There are a few different ways to go about this, and while the examples make sense I have no intuition right now as to how they would be applied in practice. Presumably, you don't apply this penalty until after you start seeing undersirable behaviors in your model. (The book also mentions that you should probably also rescale your data before doing this.)
