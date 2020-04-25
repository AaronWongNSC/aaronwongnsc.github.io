---
layout: post
title: Getting the Blog Running
tags: github jekyll
category: code
published: true
---

Right now, the blog setup is pretty minimal. I simply followed [Barry Clark's instructions](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/) and it seems to have worked. I'll say that it doesn't look very good right now. But that's okay. Over time, I'll learn some more and get it looking a tiny bit better. I can already see that I'm going to want to be able to use categories and tags in some producive manner. But I'm not sure what that looks like just yet. I did find some [instructions for getting tags to work](https://longqian.me/2017/02/09/github-jekyll-tag/) but I'm not going to go through that right now.

I was not able to get any of the themes to work. Github has a list of [supported themes](https://pages.github.com/themes/) but when I tried to apply it I got an email that said *"You are attempting to use a Jekyll theme, 'midnight', which is not supported by GutHub pages."* Maybe I'm doing something wrong. The [instructions](https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll) seems to say that if I put `theme: midnight` into the *_config.yml* file, that this should just work. But it didn't. I'll have to investigate that further.

But everything is a black box. I've never used this before. Things work, but I'm not entirely sure what's happening. I'll probably start by trying to break down the files in the *_layouts* folder.
