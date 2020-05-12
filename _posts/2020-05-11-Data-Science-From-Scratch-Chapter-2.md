---
layout: post
title: Data Science from Scratch -- Chapter 2
tags: books Python Data_Science_from_Scratch
category: learning
published: True
---

I thought the Python section of this book would be just a quick rehash of things I already knew. And for the most part, it is. But there are a few things that I picked up from this section that I think will be useful.

## Virtual Environments

I've been working with the Anaconda distribution of Python for several years now. I've mostly interacted with it using the Spyder IDE. But in the very first section, the book talks about creating a virual environment and working within it. I can see why this is important for something like following along with a book, because it creates an environment that has been frozen to the time that the book was written, which ensures that everything behaves consistently with the publication. I can also see value to this when running legacy code that hasn't been updated to newer versions, especially for modules that may be changing and updated rapidly.

I've personally never run into problems with this, but I figured it would be a good opportunity to try to create it just to say that I did. And I'm glad I took the time, because it wasn't nearly as straight-forward as the book made it seem. I thought it would be easy to do this since the book uses Anaconda, but the book is written using iPython and not Spyder.

The first part worked as expected:

```
conda create -n dsfs python=3.6
```

It ran through some prompts, installed a bunch of packages, and that was that. The code at the end says to use ```source activate dsfs``` to active the environment. But it doesn't quite work that way. You actually have to type ```conda source activate dsfs``` to use the environment. Then I tried to run Spyder, but it wouldn't work. After fussing around for a bit, I closed the Anaconda prompt and tried running Spyder from the base environment, and it came up with no problem. It turns out that you have to install Spyder into the new environment as well using ```conda install spyder```. I've been used to opening Spyder directly from the Start Menu, but that seems like it will simply not work for this setup. So my process for using this book will be to open the Anaconda prompt, load the virtual environment, then run Spyder from the prompt. As far as I can tell, there's no other way to do this.

## collections.defaultdict

The book has a nice, concise description of this tool, which helped it to make sense to me. With a dictionary, if you try to look up something that's not there, it returns an error. But with the ```defaultdict``` if you try to do that, it will automatically create that entry and then supply it with the default value that has been defined. For example, ```d = defaultdict(int)``` creates a dictionary (well, a dictionary-like object) where looking up something that doesn't exist will create the entry and give it the value 0. This avoids having to write error-catching code if you look for something that happens to not exist.

## Automated Testing and assert

This is something else that was brand new to me. I've never used ```assert``` for code-testing purposes. Usually when I'm testing code, I'll just run the thing and see what it spits out. For example, if I have some sort of function, I'll just give it some test values with known outputs. The command looks like ```assert condition, message``` where ```condition``` is some logical statement and ```message``` is the error message it should spit out if something went wrong. The book encourages "liberal" use of this to catch errors, but it doesn't explain why this is important. I suspect that the value comes form having something where you have a complex code where you run the risk of random things breaking on you when you try to update it. This could probably help with the debugging process because the code will announce the location of the exact problem as opposed to having to guess at it.

## Iterables and Generators

The book gives three loop examples, where two are not good Python code and one is. I have to admit that because my programming background didn't start with Python, I have lots of code pieces that have been written in a non-Pythonic style. Here's the way that I would normally do my loops where I'm trying to track the index:

```Python
for i in range(len(names)):
  print(i, names[i])
```

But this is the Python way of doing that:

```Python
for i, name in enumerate(names):
  print(i, name)
```

The book actually uses a different print command:

```Python
for i, name in enumerate(names):
  print(f"name {i} is {name}")
```

I haven't seen this used in Python, but I have seen ```printf``` in C++ and I bumped into ```sprintf``` in R. I'm more used to seeing the ```.format()``` method used: ```print("name {} is {}".format(i, name))```. As far as I can tell, these [f-strings](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings) are probably more intuitive and natural than using ```.format()```.

## args and kwargs

I've seen args and kwargs in different pieces of documentation, but I've never really understood it. It's much simpler than I thought. These are just a way of allowing functions to handle an arbitrary number of arguments. And as it turns out, using these should be avoided where possible because it really shouldn't be the case (most of the time) that you're writing functions that need to deal with an arbitrary number of arguments. The examples I've seen were in matplotlib, where you can choose to set parameters like color or whatever on your own, or you can leave them out. The way that I've understood that in the past was that there's just a default value there, so that if you do not indicate a keyword, then it just defaults to that value.

## Type Annotations

I've seen this before, but I haven't used it. It's just a way to indicate the types of the parameters or variables that are in the code. This is used in both defining functions and variables. This defines a function that only takes lists of floats and outputs a float.

```Python
from typing import List

def total(xs: List[float]) -> float:
  return sum(xs)
```

(Note: The last line of that code in the book is ```return sum(total)```, which fails.) Apparently, this type annotation doesn't actually do anything as far as the code is concernted. It does not catch errors and it does not force types. This is just for the person reading the code. I can see that it doesn't hurt anything to have that there, but I'm skeptical of just how valuable it is. I've not really seen this very often, but it could be useful in team contexts where you want to help others be able to understand your functions more quickly. Maybe. It also seems that context should be enough of a clue, but that could easily be wrong.
