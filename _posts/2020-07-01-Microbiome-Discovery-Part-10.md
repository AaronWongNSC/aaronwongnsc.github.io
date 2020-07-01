---
layout: post
title: Microbiome Discovery - Part 10
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 10 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) covers some statistical testing methods.

## Warnings

He started off with a warning about how statistical methods can lead to bad results if they're not properly understood. There was a graph of what is essentially a continuous spectrum of data points, but it was misleadingly labeled and presented in a way that made it look like distinct clusters.

He also talked about results from simulated data being potentially problematic. The reason here is that many simulations are built around uniform or normal distributions, but that turns out to be a bad way to simulate microbiome data.

The underlying caution is to worry that you are interpreting and understanding the statistical test being used so that you know what is really happening with it, and that you aren't deceived when you read your results.

## Negative Binomials

Species tend to have a negative binomial distribution, where the x-axis is the relative abundance of the OTU and the y-axis is the frequency that the OTU arises in individuals.  Negative binomial distributions tend to be challenging to use in the common statistical tests, so the data is often transformed.

## Transformations

The arcsine-square root transformation is used in ecology. This transformation has a tendency to spread out the small numbers more than the mid-range numbers, so you are better able to catch changes at the low end than in the middle of the distribution. This also handles zeros since you can take the arcsine of zero. However, this transformation also spreads out the large values, which may not be a good feature.

He suggests that the square root is a better choice so that you do not have that effect.

## Common Parametric tests

There's a quick review of some common tests. All of these assume normal distributions.
- T-test: This is used to compare two groups, usually a treatment group and a control group.
- ANOVA (Analysis of Variance): This is used to compare three or more groups.
- Correlation: This is for comparing to a continuous variable, and is a simple version of linear regression.
- Linear Regression: This allows you to do a correlation but on multiple variables simultaneously, which allows you to control for confounding factors.

## Analysis

From here, he launches into a discussion of how to do the analysis in R. You start from a Python script called `summarize_taxa.py` and the OTUs need to be in the .biom format. Those files then need to be converted into a JSON-biom format to be loaded into R. Inside of R, you need the biom and vegan packages. You will also need the metadata.

A lot of the discussion from here are on the various subtleties of making sure the data is in the right form and loaded correctly. For example, the biom format is transposed from the way that R typically understands things. The biological data tends to have the samples stored in columns and features in the rows, but data scientists will have the samples in rows and features in columns. He also talks about making sure the ordering is correct in the two files.

After everything is set up, he then walks through a sample exploration of a particular microbe (prevotella). He starts by plotting a histogram to see what the frequencies are in the various samples (in this case, different people in the study). He then runs a correlation test between prevotella and age ("Does the amount of prevotella in one's gut correspond to age?"). The result is initially not significant.

When running a linear regression, it's important that the residuals are normally distributed. This should be tested (qqnorm plot and Kolmogorov-Smirnov test) just to make sure.

He then talks about controlling for confounders. He runs the linear model again, but this time includes the country. The test then shows that once you control for country, you do get significant results by country.
