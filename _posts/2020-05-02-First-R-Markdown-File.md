---
layout: post
title: First R Markdown File
tags: R RMarkdown knitr LaTeX
category: code
published: True
---

I've known LaTeX since my undergrdaduate days. I've been learning a lot of R in the last year, but I haven't really worked with R Markdown seriously until now. I put together an [R Markdown](https://aaronwongnsc.github.io/files/20200502-LinearRegression.Rmd) file that summarizes some information from a basic linear model. I've also posted the output as a [PDF file](https://aaronwongnsc.github.io/files/20200502-LinearRegression.pdf).

## R Markdown Basics

A lot of R Markdown is like regular markdown. But There are a few things other things that help to empower the R side of things:

- **Front Matter**: There is some automatic processing of the front matter. The title, author, and date are all processed into the top of the document. In order to get the date to update automatically, I used the following code: ```date: "\`r format(Sys.time(), '%B %e, %Y')\`"```. This is both good and bad. I like it because I know that I'll have the date that I've processed the file, but it also means that if I rerun an older version of the file, it won't have the date when I actually worked on it. Maybe I'll use two dates in the block in the future.
- **R code chunks**: Chunks of R are coded like this: \`\`\`{r} R_Code \`\`\`. When you open a new R notebook, it puts up an example like this, but what I learned was that there are different parameters you can put inside of the curly brackets to get different results. The two big ones I used were ```include = FALSE``` and ```echo = FALSE```. The [Official R Markdown Tutorial](https://rmarkdown.rstudio.com/lesson-3.html) gives an explanation of these and a couple others.  The ```include = FALSE``` line completely eliminates the code chunk from appearing in the final document, whereas the ```echo = FALSE``` command simply suppresses the code, but not the results.
- **Short R evaluations**: The notation is \`r R_Expression\` where R_Expression is just some expression that leads to a value. The code is run from top to bottom, and variables that were used earlier can be referenced later.
- **Code-like text**: To get text to be formatted as though it were code, use \`\`\`text\`\`\`. I don't know whether there's a preferred practice for when to do this. I only used this a few times. The earlier uses was to convey actual code, but then I used it later to try to indicate that text was being read directly from the R output.

## R Markdown and General LaTeX

I was able to use most of my general LaTeX code inside of the R Markdown file. The basic environments (itemize, inline equations, display equations, tables, arrays) all behaved as expected most of the time. The display of variables was through short R evaluations, so if I wanted to get the sum of $x$ and $y$ (two variables that were defined elsewhere), I would typeset that as \`\`\`$ \`r x\` + \`r y\` = \`r x + y \`$ `\`\`\ and the corresponding values would be plugged in.

## R Markdown and LaTeX Tables

## R Markdown and Itemized Lists


