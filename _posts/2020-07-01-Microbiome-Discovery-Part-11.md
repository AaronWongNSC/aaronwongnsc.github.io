---
layout: post
title: Microbiome Discovery - Part 11
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 11 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) covers more statistical testing methods.

## Controlling for Multiple Tests

One issue that can arise from doing many tests is that you expect "significant" results as a matter of chance. If you have alpha = 0.05, but run 100 tests, you expect to see 5 significant results even if there's no underlying correlation. So there are a couple choices for how to correct for this.

- Bonferroni correction: Divide alpha by the number of tests. This is a very strict approach by controlling for having one or more false positives. (This is used for genetic testing.)
- False Discovery Rate (FDR): This is more lenient and more commonly used. This gives the expected rate of false positives. (This is used in microbiome studies.)

## Negative Binomial Distribution

He brings up the negative binomial again, but this time elaborates on its interpretation: "The number of successes in a sequence of independent and identically distributed Bernoulli trials before a specified (non-random) number of failures (denoted r) occurs." This wording is a bit awkward, but then he gives a better-worded example problem: "How many times will you roll a 1 on a six-sided die before you have gotten 5 rolls that are not a 1?" In this case, the success is rolling a 1, and the failure is not rolling a 1. And this functions gives the probability for each possible number of successes.

## More Analysis

He expands on the analysis from the previous video by running the correlation for all of the genera instead of just the one that he did. This is done by simply making a loop and storing the output into a vector.

When doing multiple tests, the `p.adjust` function converts the p-values into adjusted p-values (q-values). Using FDR, you sometimes use a value of 0.2, so that the expectation is that you're going to get 20% of your hits being false hits. This is good when you have lots of results where the q-value is less than 0.2, but if you only have a couple then it's a weaker conclusion and probably shouldn't be used.

He then repeats the loop but with the Kolmogorov-Smirnov test. This ends up showing that the distributions are highly non-normal, which means that you have to use a more powerful tool. There is a package called edgeR that is capable of doing that.

An important step is that you need to get the absolute abundances and not the relative abundances. This goes back to the `summarize_taxa` Python script. Once that's created, the command `glm.edgeR` is used to run the generalized linear model, and this also has a command that controls for the covariates.

He closes up by talking about non-parametric tests: the Mann-Whitney U test (like t-test), the Kruskal-Wallis rank sum test (like ANOVA), and the spearman rank correlation (like Pearson correlation).
