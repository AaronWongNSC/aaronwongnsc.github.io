---
layout: post
title: Starting Into JavaScript and d3
tags: JavaScript d3 projects
category: learning
published: True
---

It took several hours (and at least an hour more than it ought to have taken), but I took the [interactive bar chart](http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909) and modified it take advantage of all of the data that was available. So I now have my own version of the [voting information interactive bar chart](https://aaronwongnsc.github.io/files/VotingInformation.html). I've added the feature that you can select the year (since that data was available in the original data set). In order to get myself to fully understand it, I basically rebuilt the entire thing from scratch, but basing it off the original model.

## Step 1: Setting the Scene

I do not know whether this is common (it seems to be from what I've seen so far), but the way the webpage was built was to start with a nearly empty HTML page and then fill in the parts using d3. So the basic HTML page looked like this:

```
<html>
<head>
<style>
  <!-- Some style stuff -->
</style>

<script src="https://d3js.org/d3.v3.min.js"></script>

</head>
<body>

<div align="center">
<select id="cat" class="dropdown"></select>
<select id="year" class="dropdown""></select>
</div>

<script>
  <!-- All the code -->
</script>
</body>
</html>
```

This is slightly different from the original. The original simply had an empty  ```<div>``` that was filled in later. I don't know what the right balance is here between creating static objects and letting d3 do the work. But this is what made sense to me, so this is how I did it.

For this project, I wasn't particularly interested in the CSS styling, so I just copied it directly from the original to save myself the hassle.

## Step 2:
