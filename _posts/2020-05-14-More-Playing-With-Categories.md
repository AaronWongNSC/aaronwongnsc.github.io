---
layout: post
title: Playing With Categories and Minor Updates
tags: Jekyll Liquid LaTeX
category: code
published: True
---

I spent another hour or so wrapping my mind around programming under Jekyll. The good news is that I have a much richer understanding of how it works and the various variables that are floating around the system. The bad news is that I didn't really get any further in how I wanted the category pages to look.

I created a blank page layout, which allows me to create what is basically a straight HTML page:

```
<!DOCTYPE html>
{{ content }}
```

I haven't yet figured out the best way to create new pages through Jekyll. I tried putting just a regular HTML file into the main folder, but it didn't show up on the website. However, if I put it inside of some other folder, it works just fine. So maybe that's just something I'll have to do. I am a little worried that bits of text may fall under the spell of the markdown encoder, but I could be wrong about whether it will do that. For playing with the Jekyll/Liquid stuff, this blank layout lets me try things, but if I wanted to actually build an HTML page directly, I would just have to dump it into a folder, and then it can be directly accessed as a [file](https://aaronwongnsc.github.io/files/webtest.html).

I created a [test markdown page](https://aaronwongnsc.github.io/test/) for me to play with the Liquid code. So far, everything is processing the way I expect it to, but every now and then something behaves differently than I think it should. Some of that is markdown taking over the symbols that are being used in the Liquid code, and sometimes it's because I don't know exactly what a variable is (and sometimes end up with whole webpages as a result).

One other small change I made to the default layout was to add code that [allows the markdown to process LaTeX into math symbols](http://www.iangoodfellow.com/blog/jekyll/markdown/tex/2016/11/07/latex-in-markdown.html). I just shoved that into the header because I wasn't sure where it should go. Intuitively, it makes more sense to me for that to be part of the header than the footer. I don't really intend to make complex LaTeX typesetting for the web, so it's not going to be that big of a deal.
