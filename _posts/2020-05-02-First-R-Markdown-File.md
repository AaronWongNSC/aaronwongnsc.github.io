---
layout: post
title: First R Markdown File
tags: R RMarkdown LaTeX
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

## R Markdown Graphs

At the start of each code chunk, you can give it some variables. I used this to control the size of the graphs that were produced. I'm still not particularly proficient with this aspect of making graphs in R, so it's possible that my graphs are bigger than they need to be.

## R Markdown and General LaTeX

I was able to use most of my general LaTeX code inside of the R Markdown file. The basic environments (itemize, inline equations, display equations, tables, arrays) all behaved as expected most of the time. The display of variables was through short R evaluations, so if I wanted to get the sum of $x$ and $y$ (two variables that were defined elsewhere), I would typeset that as \`\`\`$ \`r x\` + \`r y\` = \`r x + y\` $ \`\`\` and the corresponding values would be plugged in. It looks visually clumsy, but I don't think there's any getting around that.

## R Markdown and LaTeX Tables

When it came to making tables, I wanted to be able to update the values in the table automatically if I were to change some of the values, which meant I had to figure out how to make R and LaTeX dance together. What this ultimately came down to was making R spit out the LaTeX code directly into the processed file. I found an example that showed how to use the following commands:

- **```cat```**: The ```cat()``` command will echo back the contents without any other formatting. This can be used to make R code (with ```echo = FALSE``` and ```results = 'asis'```) that will spit out raw code that will be processed by LaTeX. One slightly annoying thing is that you need to use a double backslash to get a single backslash because otherwise it will try to find a special character that probably doesn't exist.
- **```sprintf```**: This is a C command that R can use. It uses the %i and %f commands to insert values into a string that is to be printed. The first argument is the text with the appropriate placeholders and the rest of the arguments are the variables that will be placed into those placeholders.

The example that I copied creates a data frame that holds the variables as lists, and then cycles through those lists when it's creating the text. It also used a template to simplify the presentation of the code, which I decided to stick with. I also put all of the table code inside of the R chunk, but I don't think that's the best approach. While it's kind of nice to have everything in one language for that particular component, there's a lot of extra typing involved, and it's much more difficult to read.

## R Markdown and Itemized Lists

An interesting quirk of the processing is that information that was wrapped inside of a ```\\begin{}``` and ```\\end{}``` was not processed. This led to some basic text formatting troubles when I wanted to have ```code-like text``` as part of an itemized list. It turns out that there's a backdoor route to fixing this, which is to define new variables in the front matter that basically play the role of these environment delimiters.

```
header-includes:
- \newcommand{\bitem}{\begin{itemize}}
- \newcommand{\eitem}{\end{itemize}}
```
