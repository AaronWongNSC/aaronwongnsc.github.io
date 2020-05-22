---
layout: post
title: Upgrading My First d3 Project
tags: JavaScript d3 projects
category: learning
published: True
---

After completing my version of the [voting information interactive bar chart](https://aaronwongnsc.github.io/files/VotingInformation.html), I realized that it was built off d3 version 3, and the current version is version 5. So I decided that I would go through and update the code so that it runs on the modern version. Things are still taking longer than I think they should, but I'm still in the learning phase, so I'm okay with that. Here is the [link to the new version](https://aaronwongnsc.github.io/files/VotingInformation-V5.html)

## The Main Difference

The main difference is that the commands for making the axes are now significantly different. Here is the old version:

```js
var x = d3.scale.ordinal()
  .domain( states )
  .rangeBands([0, disp_width]);

var y = d3.scale.linear()
  .domain( [0, d3.max( get_values( state_values, sel_year, sel_cat ) ) ] )
  .range([disp_height,0]);

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left");
```

And here is the new version
```js
var x = d3.scaleBand()
  .domain( states )
  .range([0, disp_width])

var y = d3.scaleLinear()
  .domain( [0, d3.max( get_values( state_values, sel_year, sel_cat ) ) ] )
  .range([disp_height,0]);

var xAxis = d3.axisBottom()
  .scale(x)

var yAxis = d3.axisLeft()
  .scale(y)
```

The scale commands are now set up differently, and the axis location is part of the function name rather than being a separate paramaeter. It was surprisingly difficult to find good documentation and examples of this, which was somewhat surprising. Perhaps the package is just being updated too quickly for people to really spend a lot of time cleaning it up? I don't know.

Fortunately, that was all that appeared to be different. At least, I don't remember any other changes.
