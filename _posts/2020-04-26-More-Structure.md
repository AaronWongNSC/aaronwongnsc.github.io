---
layout: post
title: More Structure
tags: github jekyll
category: code
published: True
---

At this point, I'm working on a lot of the blog infrastructure. There might be a way that all of this can be done automatically, but I'm learning more by building it myself. Or at least, that's what I'm telling myself.

## Two Column Presentation

One of the first things I wanted to do was to create a right side navigation column that can be used to show previous posts, tags, categories, and other things. I mostly followed the [w3schools structure](https://www.w3schools.com/howto/howto_css_blog_layout.asp) to show me how to get the columns side-by-side. The original width of the blog was set to be 760px, which I expanded to 1200px. I also made the two columns 800px and 400px. I may change that to 900/300 later, but I want to just leave that alone for now.

This is the new "container" definition. The only change was to the max-width property:
`
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
}
`
And I added these new containers to handle the left and right columns:

`

.body_container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
}

.body_container:after {
  content: "";
  display: table;
  clear: both;
}

.left_container {
  margin: 0 auto;
  max-width: 800px;
  padding: 0 10px;
  width: 66%;
  float: left
}

.right_container {
  margin: 0 auto;
  max-width: 400px;
  padding: 0 10px;
  width: 33%;
  float: left
}
`

## Showing Categories and Tags

