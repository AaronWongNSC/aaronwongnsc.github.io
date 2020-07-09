---
layout: post
title: NevCAN -- Plot Details
tags: NevCAN projects environmental_data
category: learning
published: True
---

I got my hands on a preliminary spreadsheet of data. The goal was for me to get a sense of what the data would look like so I can start playing with making graphs. It's a CSV file, but it's not straight data. The metadata is stored at the top of the file. So I had to first write a short script to strip off the metadata and move it to a different file, and then also move the pure data into its own file. I hope that the different files will all have the same format.

Once that was done, plotting things was relatively straight-forward. I had to fight with the datetime objects for a bit to get things to look the way I needed them to. One of the challenges is that I don't really understand the POSIX* format, and I had to fight with it several times to get something I could use. Eventually, I ended up just having one column that stored the actual datetime data, and then another column that was simply the string representation of the datetime data. That just made things easier for me to use and manipulate.

I provided a sample plot last week for my colleague, and she wanted to customize some of the details (axis thickness, plot thickness, etc.). So I did some more tweaking to try to get those things how she wanted them. This was a good exercise for me because I really had to dig into the details of how R's plot function works, and make sure I understood all of the various parameters that could be set.

Once this gets approved, I can then go on to the specific modules she's trying to create and attempt to generate those graphs. This will be a bit more complex because there will likely be some calculations that need to be made instead of just plotting straight data.
