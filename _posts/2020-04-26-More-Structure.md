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

```css
.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
}
```

(Note: I don't know why the code blocks are done this way. If I fix this in the future, then this will go away and I will probably not remove this comment. But the code blocks look silly with the current format.)

And I added these new containers to handle the left and right columns:

```css
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
```

I also changed the `default.html` page to incoporate this structure. (Note: The right_container will be filled in later. See below.)

{% raw %}
```html
<div id="body-wrapper" class="body_container">
  <div id="main" role="main" class="left_container">
    {{ content }}
  </div>
  <div id="sidebar" role="sidebar" class="right_container">
    <h3>Previous Posts</h3>
  </div>
</div>
```
{% endraw %}

## Showing Previous Posts

It turned out to be pretty straightforward to get the posts listed. It was pretty much nothing to create a loop that just listed the post titles because I just stole the code from the `index.html` page and put it into the `default.html` layout (since I wanted the right column to be stable across all the pages).

{% raw %}
```html
{% for post in site.posts %}
  <article class="post">
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    <div class="date">
      {{ post.date | date: "%B %e, %Y" }}
    </div>
    <br>
  </article>
{% endfor %}
```
{% endraw %}

## Tags

The next project was to create tags following [these instructions](https://longqian.me/2017/02/09/github-jekyll-tag/). Since I'm not trying to run jekyll on my computer and just letting github do all of that, I'm going to have to manually create pages for each tag. But since I'm doing this right from the start, it shouldn't be too bad.

I made a minor modification to the part of the code that includes the tag so that it would look the way I wanted it to. Inside of the loop of the `index.html` page that shows the post titles, just above the code that shows the post date, I added this code:

{% raw %}
```html
<div class="tag">
  Tags:
  {% for tag in post.tags %}
    {% capture tag_name %}{{ tag }}{% endcapture %}
    <a href="/tag/{{ tag_name }}">{{ tag_name }}&nbsp;</a>
  {% endfor %}
</div>
```
{% endraw %}

I also had to add the tag class into the stylesheet:

```css
.tag {
  font-size: 12px;
  color: $darkGray;
}
```

It as at this point, that I found out that the color codes are part of the `_variables.scss` file in the `/_sass/` folder. They didn't have a lot of color options there. If I needed colors, I could either add to that file or create my own color file. That's not something I'm going to worry about right now.
I don't really know what the canonical indentation scheme is for this sort of thing. Maybe there isn't one.

## Categories

I don't really know how I'll use categories just yet. I don't really have a distinction between categories and tags in my mind. I guess that categories are supposed to be more like folders and tags are supposed to be a flat organizational scheme. But while I know what that means, I don't know what it means for me in terms of my own organizational scheme. So for now, they're just going to be listed and I hopefully won't regret it later.

I just put this in above the loop for the post tags:

```html
<div class="category">
  Category: {{ post.category }} <br>
</div>
```

And there's a category class that I put into the style sheet that is identical to the tag class. I understand this to be a best practice, because if I ever decide to change the formatting, I can do it all at once through the style sheet instead of having to go back and change all the HTML tags.
