---
layout: post
title: Starting Into JavaScript and d3
tags: JavaScript d3 projects
category: learning
published: True
---

It took several hours (and at least an hour more than it ought to have taken), but I took the [interactive bar chart](http://bl.ocks.org/jonahwilliams/2f16643b999ada7b1909) and modified it take advantage of all of the data that was available. So I now have my own version of the [voting information interactive bar chart](https://aaronwongnsc.github.io/files/VotingInformation.html). I've added the feature that you can select the year (since that data was available in the original data set). In order to get myself to fully understand it, I basically rebuilt the entire thing from scratch, but basing it off the original model.

In the discussion below, the code has been grouped conceptually, rather than put in the order that it appears in the code itself. I don't know what the best practices are for code organization are, but that's something I'm going to have to keep an eye on as things go forward.

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

## Step 2: Getting the Data

This took me a while because I really wanted to dump the data into a variable (as you do with Python) and then work with that variable. Instead, anything that uses the data must be inside of the call that gets the data. My best guess is that this is a memory management and security issue of some sort. So after loading the data, I made the variables inside of the function and worked with them from there. It took me a bit to figure out how to use ```.map()```, ```.filter()```, and ```.keys()``` to get the data sifted out the way I wanted it. I guess it wasn't really hard, but it was just one of those things that I had to think through slowly.

I also tried to be consistent and only use ```d``` to refer to the data instead of swapping back and forth between that and ```data```. It seems that neither one is fully conventional, so until I have reason to do otherwise, I'm going to stick with this.

One other piece I needed was a function that converted the data into a single array based on the specified year and category. I tried for a bit to do this without having to build the auxiliary function, but I just couldn't see how to do it.

```js
d3.tsv("VotingInformation.tsv", function(d) {
  function get_values(state_values, year, cat)
	{
		var values = []
		for ( i = 0; i < state_values.length; i++ )
		{
			values.push( Number(state_values[i].filter( function(d) { return d.Year == year; } )[0][cat]) ) ;
		};
		return values;
	};

  var states = d3.map( d , function (d) { return d.State ; } ).keys();
	var years = d3.map( d, function (d) { return d.Year ; } ).keys();
	var categories = Object.keys( d[0] )
		.filter( function(d) { return (( d != "Year" ) & (d != "State")) } );

	var sel_year = years[0];
	var sel_cat = categories[0];

	var state_values = [];

	for ( i = 0; i < states.length; i++ )
	{
		state_values.push( d.filter( function(d) { return d.State == states[i]; } ) )
	};
});
```

## Step 3: Filling out the Dropdown Menus

A small but important task.

```js
d3.select("#cat").selectAll("option")
  .data(categories)
  .enter()
  .append("option")
  .attr("value", function(d) { return d; } )
  .text( function(d) { return d; } ) ;

d3.select("#year").selectAll("option")
  .data(years)
  .enter()
  .append("option")
  .attr("value", function(d) { return d; } )
  .text( function(d) { return d; } ) ;
```


## Step 4: Setting up SVG

The original file sets up the dimensions of the SVG by defining the size of the graph then putting a buffer around the outside of that to get the total size. That seems backwards to me, so I set myself up with defining the total size and then defining the buffer. In either case, the SVG is the full platform on which things are drawn, but then a group is made specifically for the objects, and that is how the top and left buffers are created. The right and bottom buffers are created by ensuring that the scaling is right in the next step.

```js

var width = 1000;
var height = 500;
var margin = { left: 50, right: 50, top: 50, bottom: 100 };

var disp_height = height - margin.top - margin.bottom;
var disp_width = width - margin.left - margin.right;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")" );

```

## Step 5: Coordinate Axes

This is one of the steps that took me much longer to work through than I think it should have taken me. Some of that time was chewed up because I originally tried to incorporate the CSS style into the JavaScript rather than including it in the HTML side. But after looking around some, it seems that it is more common and better to put it in the HTML.

The most important thing for me was getting the domain and range right. This is where that auxiliary function comes into play. The way that I had the data sorted out wasn't flat, and I needed to flatten it out to be able to get the maximum y-coordinate out of it.

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

  svg.append("g")
		.attr("id", "x_axis")
		.attr("class", "axis")
		.attr("transform", "translate(0," + disp_height + ")")
		.call(xAxis)
		.selectAll("text")
		.style("font-size", "8px")
		.style("text-anchor", "end")
		.attr("dx", "-.8em")
		.attr("dy", "-.55em")
		.attr("transform", "rotate(-90)" );

 	svg.append("g")
		.attr("id", "y_axis")
	    	.attr("class", "axis")
    		.call(yAxis);
```

## Step 6: Creating Rectangles and Joining Data

The original graph only joined data for a single year to the rectangles, but I was trying to join multiple years of data. That made things more complicated. Ultimately, I used the loop in step 1 to accomplish this. There might have been a better way to do that, but this works for now.

```js
var bar = d3.select("g").selectAll("rect")
  .data(state_values)
  .enter()
  .append("rect")
  .attr("class","rectangle")
  .attr("id", function(d, i) { return states[i]; } )
  .attr("width", disp_width / states.length)
  .attr("x", function(d, i) { return ( disp_width / states.length) * i ; } )
```

## Step 7: Creating the Initial Graph

This turned out to be pretty easy once I was able to get the data in the right form. It really is just adjusting the height and y-coordinate of the rectangles. The only tricky thing is that the rectangles need to be aligned at the bottom, but the $$y = 0$$ line is at the top. But this is just a matter of shifting things.

One thing about this is that I don't really like how I had my layers organized. It feels like there's a better way to do this.

```js
svg.selectAll(".rectangle")
  .attr("height", function(d){
    return disp_height - y(+d.filter( function(d) { return d.Year == sel_year } )[0][sel_cat]) ;
  } )
  .attr("y", function(d){
    return y(+d.filter( function(d) { return d.Year == sel_year } )[0][sel_cat]) ;
  } )
  .append("title")
  .text( function (d, i) { return get_values( state_values, sel_year, sel_cat )[i]; } );
```

## Step 8: Update Code

The code for updating the graph is very similar to the code that was used to create it. I had to make it active when the dropdown menus were changed, and something that took a while for me to find was that I had set ```y.domain``` equal to the values instead of using them as a parameter in the function. I don't know why I did that, and I don't know why it took so long for me to find it. But that's just how it goes sometimes.

```js
var selector = d3.selectAll("select")
  .on("change", function(d)
  {
    cat = document.getElementById("cat");
    year = document.getElementById("year");
    var sel_cat = cat.value;
    var sel_year = year.value;

    y.domain( [0, d3.max( get_values( state_values, sel_year, sel_cat ) ) ] );

    d3.selectAll(".rectangle")
      .transition()
      .attr("height", function(d){
        return disp_height - y(+d.filter( function(d) { return d.Year == sel_year } )[0][sel_cat]) ;
      } )
      .attr("y", function(d){
        return y(+d.filter( function(d) { return d.Year == sel_year } )[0][sel_cat]) ;
      } )
      .select("title")
      .text( function (d, i) { return get_values( state_values, sel_year, sel_cat )[i]; } );
      ;

    d3.select("#y_axis")
      .transition()
      .call(yAxis);
  });
```

## Closing Thoughts

Having worked through this example, it doesn't feel as though other applications like this would be that far off. I may take another day or two and do something with the New York Times coronavirus data. We'll see how quickly the other stuff comes along.
