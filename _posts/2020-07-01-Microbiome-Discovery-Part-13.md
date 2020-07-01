---
layout: post
title: Microbiome Discovery - Part 13
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 13 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) continues his discussion of visualizations. This video talks about horseshoes and detrending.

## Detrending

In the beta diversity examples, there was a horseshoe shape that appeared in visualizations. This is sometimes viewed as an artifact of the ordination technique, and some see it as undesirable. The process of trying to remove that is known as detrending. However, it can be shown that detrended scores can be less accurate than the original PCoA visualization, so it's not always the case that the arch effect is truly an artifact of the calculation, and so it can represent something real. But there is still a desire to separate those endpoints because they really are far apart from each other.

## Iterative Quadratic Projection

This is one method of detrending:
- Step 1: Fit a quadratic
- Step 2: Project the points to the curve
- Step 3: Repeat until stable

The projection step is matching the points to the nearest point on the quadratic. The process basically "unfolds" the image in a step-wise manner. This is not a statistically validated method. It's just a visualization technique used to eliminate the arch effect. But it is helpful for visualizing the primary gradient in the data.

## QIIME

He then runs this process in QIIME. The commands here are probably not what you would do in QIIME2.
