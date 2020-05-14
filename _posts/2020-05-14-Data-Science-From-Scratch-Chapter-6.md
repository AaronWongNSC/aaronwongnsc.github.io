---
layout: post
title: Data Science from Scratch -- Chapter 6
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

This chapter is a super-brief introduction to probability. It's a lot like the previous one in that if you don't know anything going in, I don't really know how much you'll know coming out. It just seems way too light on detail.

## Dependence and Independence

The main point here is that there is a computational method to know whether events are dependent or independent. Simply check if $$P(E,F) = P(E) P(F)$$.

## Conditional Probability

The next section races through conditional probability using the [boy-or-girl](https://en.wikipedia.org/wiki/Boy_or_Girl_paradox) paradox. (I've known it as the girl-girl paradox, but that seems to be non-standard.) Again, it's far too quick to feel like it would help someone else understand, but it all revolves around $$P(E,F) = P(E|F) P(F)$$.

## Bayes' Theorem

The section on Bayes' Theorem is little more than a quick overview of the classic example of the impact of false positives in rare diseases. [Many](https://blogs.scientificamerican.com/cross-check/bayes-s-theorem-what-s-the-big-deal/) [articles](https://betterexplained.com/articles/an-intuitive-and-short-explanation-of-bayes-theorem/) [have](https://thestatsninja.com/2019/03/03/how-to-decipher-false-positives-and-negatives-with-bayes-theorem/) [been](https://towardsdatascience.com/false-positives-negatives-and-bayes-rule-for-covid-19-testing-750eaba84acd) [written](https://www.statsdirect.com/help/clinical_epidemiology/screening_test.htm) on the subject, so I'm not going to elaborate on it.

## The Normal Distribution

The longest section is on the normal distribution because it's so central to statistics. The book goes through the process of graphing them probability distribution functions and cumulative density functions of several normal curves. He briefly describes how to attain z-scores using a linear transformation, but doesn't elaborate much on the point. The most interesting thing is that he does include code to do a binary search for the inverse of the cumulative density function:

```Python
import math

def normal_cdf(x: float, mu: float = 0, sigma: float = 1) -> float:
    return (1 + math.erf((x - mu) / math.sqrt(2) / sigma)) / 2

def inverse_normal_cdf(p: float,
                       mu: float = 0,
                       sigma: float = 1,
                       tolerance: float = 0.00001) -> float:
    """Find approximate inverse using binary search"""

    # if not standard, compute standard and rescale
    if mu != 0 or sigma != 1:
        return mu + sigma * inverse_normal_cdf(p, tolerance=tolerance)

    low_z = -10.0                      # normal_cdf(-10) is (very close to) 0
    hi_z  =  10.0                      # normal_cdf(10)  is (very close to) 1
    while hi_z - low_z > tolerance:
        mid_z = (low_z + hi_z) / 2     # Consider the midpoint
        mid_p = normal_cdf(mid_z)      # and the cdf's value there
        if mid_p < p:
            low_z = mid_z              # Midpoint too low, search above it
        else:
            hi_z = mid_z               # Midpoint too high, search below it

    return mid_z
```

This can be done using the ```scipy``` package (that I needed to install into the virtual environment).

```Python
from scipy.stats import norm

norm.ppf(0.5) # This gives the value of x for the standard normal so that 50% of the area is below this point
              # ppf stands for percent point function, which is just another term for the quantile function
norm.cdf(0) # This gives the area below the curve to the left of x = 0
```

## The Central Limit Theorem

The last section gives a high level overview of the Central Limit Theorem using the binomial distribution as the example. Again, I can't really say that it's super-helpful unless you're already familiar with it.

## Reference

He gives the Grinstead and Snell textbook as his reference for people wanting to go further into the topic, which also happens to be the book I used to teach the Probability and Statistics course. I liked the book, and would definitely encourage reading that after reading through this section in order to actually understand probability in a real way.
