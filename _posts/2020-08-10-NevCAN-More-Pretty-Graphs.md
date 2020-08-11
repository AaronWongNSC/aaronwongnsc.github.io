---
layout: post
title: NevCAN -- More Pretty Graphs
tags: NevCAN projects environmental_data
category: learning
published: True
---

Not too much to say here other than I've developed another skill.

I produced a set of graphs with both weekly rainfall presented as a bar graph with a line graph of daily soil water content overlaid, and I also managed to get the y-axis scale on the left and right sides to align with the scales of the two different measurements. And all of this runs in a loop so that once it's set up for one graph (one year, one location), I get all others for free.

I downloaded the original raw data because I needed to be able to do something with 3-hour blocks of time. I don't think this will be difficult to set up. I do need to do a bit of work because the data files are all broken down into 10 minute intervals, and each file only contains data for one month. So I'll need to build a systematic looping process to put them all together in a way that I can work with them. There is a file that's available from the data repository, but the problem is that it's saved as an 800 megabyte Excel file and my computer doesn't want to open it. So when I pull my data, I'm only going to pull the columns of interest to make sure I don't blow out my memory usage.
