---
layout: post
title: NevCAN -- Pretty Graphs
tags: NevCAN projects environmental_data
category: learning
published: True
---

I've spent a bit of time over the last week coding up different types of graphs.

This hasn't been too difficult, and it's interesting to see the different ways that data can be corrupted. Some of the initial sensor data is simply missing, but then there were also errors converting the data from 10 minute intervals to daily and weekly numbers, and also a change in one of the sites where the data changed from being reported as a percent (as in 15 for 15%) into being reported as a number (as in 0.15 for 15%). This made some of the graphs show sharp drops at certain values. These are not easy to spot in the raw data, but as soon as you visualize it, it's completely clear.

I'm also learning to finesse the graphs a bit more. One of the things that I'm doing is creating yearly graphs. I initially started off graphing them with respect to the datetime object, which worked fine when I graphing individual years, but then trying to graph multiple years on the same graph (to create comparisons), this no longer worked. But I was able to convert the dates to "day of year" so that January 1 is labeled as 1 and December 31 is labeled as 365 (or 366). This also made locating the starts of months a bit easier compared to what I was doing previously.

The data itself is kind of nice to look at, as you can see differences in the patterns over the last decade and you can also see the precipitation events match up well with the soil water content, which helps everything feel coherent and consistent.

So even if nothing happens as a result of working with the NevCAN folks, I've definitely already picked up quite a bit in terms of using R's base graphing system to make things look exactly how I want them to look.
