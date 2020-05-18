---
layout: post
title: Starting Into JavaScript and d3
tags: JavaScript d3
category: learning
published: True
---

I spent some time thinking last night, and I've decided that it's probably good for me to start spending some time to shore up my web skills and dive into JavaScript and d3. It's not that I've never done any web programming, but what I have is very basic. And I've never touched d3 (nor had I heard of it before seeing it in the Data Science from Scratch book). So I started by doing some reading and brute force copying just to get things going.

## Running a Local Web Server

I'm posting this out of order compared to the order I learned things in because it just makes more sense that way. One thing that I discovered as I was playing with things is that while the basic JavaScript code seems to run just fine opening it directly in a web browser, using d3 to get information from another file is blocked (probably) for security reasons. So in order for me to test some of the code, I had to first figure out how to run a local web server.

It turned out to be easier to do than I thought, but it took a bit of clicking around to find the right approach. It turns out that Python already has a simple web server protocol, and so I just had to open the Anaconda prompt, go to the folder with the html page in it, and run ```python -m http.server``` and then access the local server using ```http://localhost:8000/file.html``` from the web browser (the 8000 is the default port number, and this value is confirmed after running the python script).

## Introduction to d3

I spent an hour or so looking through a number of different tutorials for d3. One of them ran the scripts through the web browser using the console in the inspection tool, and the rest simply wrote the script into the web page itself. At this point, my best understanding of this is that it's just the difference between building scripts in an IDE compared to running things in iPython.

I didn't get deep into d3, but I did get far enough to understand the chaining of the commands and general idea for how binding data to objects works, as well as using functions to access that data. But having made it that far, my next goal was to find some functioning code and see if I can get it to run, then modify it so that it suits what I'm trying to do.

## Interactive Bar Chart

The first thing that came to mind was to have a basic interactive bar chart. And after doing only a small amount of searching, I found [this page](http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909) that has just the sort of thing I was looking for. And this is where that local web server thing came into play, because I wasn't able to actually get it to run for a while, even though I had the code copied over and the tsv file in the appropriate folder. But once that was all worked out, I would be able to start picking apart the code to understand how it all comes together.

What's interesting about this data is that the original file only uses the data from 2012, but the dataset includes other years. I spent a while playing around with it to see whether I could get a second dropdown to let me select the year, but this proved to be rather challenging. The main struggle was that I don't understand how to manipulate data right now. I was able to get a seconddrop to appear, but I couldn't populate it with what I wanted to unless I manually entered the values. So there's something here for me to play with tomorrow.
