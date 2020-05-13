---
layout: post
title: Data Science from Scratch -- Chapter 5
tags: books Python Data_Science_from_Scratch
category: learning
published: True
---

This chapter is a super-brief introduction to statistics. If you haven't already seen statistics before reading this chapter, I'm not entirely sure you would follow along.

## Central Tendency

This is just mean, median, and mode, but then quantiles got thrown in with median even though it's not exactly a measure of central tendency. As before, he writes up functions for things that already exist. In addition to NumPy, we will also need the statistics package. Here are the easy ones:

```Python
import numpy as np

v = np.array([1, 2, 3])

v.mean() # Calculates the mean
np.median(v) # Calculates the median
np.quantile(v, 0.5) # Calculates the median using the quantile function
```

It's worth noting that the book does not interpolate the quantiles, but the NumPy function does.

The mode is more interesting to try to calculate. There is a mode feature found in the ```statistics``` package and also one in ```scipy.stats``` package. I don't think there's a ton of value in this, so I'm not going to bother with it.

## Dispersion

The dispersion of the data can be calculated in several ways, depending on what you're trying to communicate. The range is the just distance between the highest and lowest data points. This is found in NumPy as ```np.ptp()``` (peak-to-peak). The variance is calculated using ```np.var()``` but that one defauts to the population variance. This can be changed by using ```np.var(list, ddof=1)```, where the parameter ```ddof=1``` sets the default degrees of freedom to 1, which adjusts the denominator. We have to do the same thing with ```np.std()```. If you use the ```statistics``` package, this should all work out automatically.

## Correlation

The book calculates covariance and Pearson correlation coefficient. In NumPy, it takes a little extra work. The covariance is the off-diagonal entry of the covariance matrix, which is ```np.cov()```. To get the covariance itself, use ```np.cov()[0,1]```. Similarly, the corrleation coefficient is ```np.corrcoef()[0,1]```. Admittedly, I haven't done enough statistics to know exactly what these matrices are and how they're calculated, though I have done that for just lists of numbers. I'm going to assume I'll bump into that information later and not get bogged down right now.

## Simpson's Paradox and Other Warnings

The only reason I can imagine that Simpson's paradox is mentioned in this book is to alert people to some nonintuitive possibilities that can come up when working with data. Having a positive correlation over a large data set does not mean that there would be a positive correlation if you only look at a subset of the data.

The book also points out that the correlation coefficient does not indicate the importance of the relationship between the variables, so that you can have a perfect correlation with a small slope and a perfect correlation with a large slope, and you won't be able to tell the difference without looking at the data more closely.

And, of course, correlation vs. causation.
