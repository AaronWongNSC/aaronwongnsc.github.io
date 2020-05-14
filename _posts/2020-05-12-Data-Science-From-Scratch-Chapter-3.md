---
layout: post
title: Data Science from Scratch -- Chapter 3
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

I didn't take a deep dive into this chapter because it coers matplotlib, and I know that the Python Data Science Handbook is going to hit this one pretty hard. Most of the information contained in this section is stuff that I've seen, and the minimalist cookbook approach he takes is probably not a good first introduction to it.

## Visualization

The chapter starts by declaring two specific purposes for data visualization:

- To explore data
- To communicate data

I think this is a good, succinct framework to think about data visualization.

## Virtual Environment

I ran the code through the virtual environment, which required me to load matplotlib into it. Fortunately, it's just ```conda install matplotlib``` (after going into the environment).

## Charts

The book contains basic examples of a few types of charts: line charts, bar chart, histograms, and scatter plots. The only one that I found interesting was the technique he used for creating a manual histogram. It uses ```Counter()``` and that seems like a good way to do it that explains what's happening.

```Python
from matplotlib import pyplot as plt
from collections import Counter
grades = [83, 95, 91, 87, 70, 0, 85, 82, 100, 67, 73, 77, 0]

# Bucket grades by decile, but put 100 in with the 90s
histogram = Counter(min(grade // 10 * 10, 90) for grade in grades)

plt.bar([x + 5 for x in histogram.keys()],  # Shift bars right by 5
        histogram.values(),                 # Give each bar its correct height
        10,                                 # Give each bar a width of 8
        edgecolor=(0, 0, 0))                # Black edges for each bar

plt.axis([-5, 105, 0, 5])                  # x-axis from -5 to 105,
                                           # y-axis from 0 to 5

plt.xticks([10 * i for i in range(11)])    # x-axis labels at 0, 10, ..., 100
plt.xlabel("Decile")
plt.ylabel("# of Students")
plt.title("Distribution of Exam 1 Grades")
plt.show()
```

The same thing can be accomplished using ```plt.hist```:

```Python
from matplotlib import pyplot as plt
from collections import Counter
grades = [83, 95, 91, 87, 70, 0, 85, 82, 100, 67, 73, 77, 0]

plt.hist(grades, bins=10, range=(0,100), edgecolor=(0,0,0))

plt.axis([-5, 105, 0, 5])                  # x-axis from -5 to 105,
                                           # y-axis from 0 to 5

plt.xticks([10 * i for i in range(11)])    # x-axis labels at 0, 10, ..., 100
plt.xlabel("Decile")
plt.ylabel("# of Students")
plt.title("Distribution of Exam 1 Grades")
plt.show()
```

I like the first approach for demonstrative purposes, but I don't see the value of it in practice, except in the case that you have to make manual bins for some reason.

## Other Tools

The book lists a few other tools for data visualization that I'll need to investigate at some point.

- [seaborn](https://seaborn.pydata.org/): I've actually seen this in some of the online courses I've taken. It looks pretty powerful.
- [Altair](https://altair-viz.github.io/): I haven't seen this one, but at a glance I'm not sure what this does that seaborn doesn't.
- [Bokeh](https://bokeh.org/): This seems like an interactive visualization package that is supposed to mimic the [D3.js](https://d3js.org/) style. I don't know anything about D3, but I suspect I've seen it at some point when I was looking at visualizations of stuff on the web.
