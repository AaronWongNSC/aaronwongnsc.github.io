---
layout: post
title: First Run with COVID Data
tags: JavaScript d3 projects COVID-19
category: learning
published: True
---

Late last night, I was able to get the basic code to display the [New York Times COVID-19 Dataset](https://github.com/nytimes/covid-19-data) by county. The [current code](https://aaronwongnsc.github.io/files/CovidInformation-NYT.html) does nothing more than that. I would like to get it to display the new cases and new deaths rather than the totals, and I would also like to apply some smoothing over different numbers of days (adjustable). I would also like it to display other information, such as the first infection, total cases, and total deaths. There's also a part of me that wants to be able to display a map of the state and county, but I'm not sure that I really want to do that.

Using the dataset directly from Github means that it automatically updates when they update their repository. I don't know if it's an acceptable use, but until I find information that says otherwise, I'm going to trust that this little script isn't causing any harm.

## Important Things I Learned

The previous project had a bar graph, and I was able to bind the data to each rectangle and read the information that way. In this case, the line graphs require some steps. You need to create a line generator to push the data into the path.

```js
svg.append("path")
		.datum(county_data)
		.attr("id", "deaths")
		.attr("fill", "none")
		.attr("stroke", "steelblue")
		.attr("stroke-width", 1)
		.attr("d", d3.line()
			.x( function(d) { return x( new Date(d.date)) ; })
			.y( function(d) { return y( +d.deaths ); })) ;

```

The other big thing was ```.datum``` instead of ```.data```. Initially, I thought these two were different and didn't give it much thought. But when nothing was being displayed, despite all of the debugging I was attempting to do through the console, I discovered that thee commands are not the same. When the data is being bound to a single element (such as a single path, as in this situaton), then ```datum``` tells d3 to do it that way. Apparently, you can also use ```.data([data])``` to force it into the list structure. I don't know that I prefer one way or the other right now.

Other than that, it was mostly an exercise in the same types of ideas that I used on the first project. It was just learning to manipulate the data into the right form.
