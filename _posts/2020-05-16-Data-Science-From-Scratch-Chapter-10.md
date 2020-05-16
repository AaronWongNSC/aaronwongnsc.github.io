---
layout: post
title: Data Science from Scratch -- Chapter 10
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

This data exploration is a good overview chapter, but since it's doing the "from scratch" approach, I think it leaves a lot of tools on the table for the future. While I've appreciated seeing some of the other pieces from scratch, in this case it seems that it may hurt more than it helps.

## One-Dimensional Data

There's not a lot to see here. He creates a function to help create histograms and shows that two distributions can have the same mean and standard deviation while not having the same distribution.

## Two-Dimensional Data

There's also not much to see here. He creates a scatter plot of two different correlations and then calculates the correlation coefficient using the statistics functions that were created earlier.

## Higher Dimensional Data

This section gets a bit more interesting. He uses his functions to create a correlation matrix, though he doesn't really talk about it. More interestingly, he also makes a scatterplot matrix from scratch. I'm only loosely familiar with making subplots with matplotlib, and so I mostly have to guess at things and mess around until it works. I'll probably have to work through some examples of this when I get to the Python Data Science Handbook.

## NamedTuples and Dataclasses

I really wasn't sure why he was bothering with NamedTuples instead of just going to pandas, but Dataclasses are apparently a new Python 3.7 thing (which is funny because the book is set up using Python 3.6). I'm expecting to stick with pandas, so I didn't spend a lot of time playing with this.

## Cleaning and Munging

I've not heard of data munging before, but I have heard it called data wrangling. He write a manual checking function, but pandas is a thing and has its own methods for doing that. So I didn't spend much time here, either.

## Manipulating Data

This was actually somewhat interesting. Even though there's nothing fancy here, I've just never approached things using list comprehension in quite this manner. Here's his code for getting the highest ever closing price for Apple stock (after the data was already loaded as a list of NamedTuples).

```Python
max_aapl_price = max(stock_price.closing_price
                     for stock_price in data
                     if stock_price.symbol == "AAPL")
```

I though this was just a clever and compact way of doing things. I would have actually created the list for Apple stock as a separate object, and then found the maximum of that list.

## Rescaling

He spends a brief section talking about rescaling data. He shows how the units can sometimes be deceptive by showing how nearest neighbors can change by changing the units, and then moves on. The rescaling of the data fits in perfectly with calculating the correlation coeffeicient. I think I've called this process "normalizing" but [upon looking it up](https://www.statisticshowto.com/normalized/) it seems that this is not quite the right word and that I should be calling it standardizing the data.
