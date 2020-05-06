---
layout: post
title: Counting the Tags
tags: Jekyll
category: code
published: true
---

It's a small update, but it's worth giving it a mention for the sake of completeness. The tag cloud now also indicates how many times the tag has been used.

Inside of the ```tagcloud.html``` file, I updated the line that output the tag link to the following:
```html
[<a href="/tag/{{ tagname }}">{{ tagname }}--{{ tagitems[2] }}</a>]
```

I was looking at the way that the tag cloud was constructed, and it's not particularly efficient. It creates a variable that looks like ```1001#tagname#1```, where the last number is the number of times the tag appears and the first number is 1000 greater than it. I don't yet see any particular value in that opening tag, but there may be something there that I'm not aware of.

Also, the code creates a variable ```tagname``` when it's not necessary. I can see that there may be some readability issues with that decision, but there is otherwise no obvious reason to do that.
