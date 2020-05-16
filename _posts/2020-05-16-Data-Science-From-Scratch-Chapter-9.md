---
layout: post
title: Data Science from Scratch -- Chapter 9
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

This is the first section that contained information that's genuinely new to me. This is probably where my real work begins.

## stdin and stdout

I'm familiar with pipes from using Linux previously in my life, but I haven't actually done too much with it. I played around with the code from the book (searching regular expressions in a text file, counting lines, and counting words), and I don't know if I'm going to be doing this a lot. But there have definitely been times when I've written Python scripts where I needed to manually change the file name inside the script when I could have theoretically been doing it from the command line. So I'm not saying that I'll never need this stuff. I did learn that ```type``` was the Windows equivalent of ```cat```, so that's something else.

The book didn't really explain regular expressions, so I'm guessing that he's assuming people are already familiar with them. Familiar is probably the right word for me. I've come across regular expressions, but I'd have to look up all of the symbols again if I were to need to use them.

## Reading Files

There are two quick sections on reading files. The first is just for plain text files, and he gives a quick read/write overview. Nothing special there. He then goes on to using the ```csv``` module to read delimited files. He used ```csv.DictReader()``` in addition to ```csv.reader()```, but I've more or less always used ```pandas.read_csv()```. I don't know if he's going to get into ```pandas``` in this book, but it's the entire third chapter of the Python Data Science Handbook.

## Scraping the Web

This is something that I've been interested in learning about for a while. I had to start off by installing some new packages to the virtual environment: ```beautifulsoup4```, ```requests```, and ```html5lib```. The program that is used to read HTML is much simpler than I thought it would be.


```Python
from bs4 import BeautifulSoup
import requests

url = ("https://raw.githubusercontent.com/"
       "joelgrus/data/master/getting-data.html")
html = requests.get(url).text
soup = BeautifulSoup(html, 'html5lib')
```

The URL for this is just a very basic HTML page, but I would guess that I could use this to grab some of the New York Times or 538 data from github just as easily. He doesn't go too deep into the different calls within BeautifulSoup, but I suspect that it's a rabbit hole of possibilities. I should probably wait until I've decided on a project before doing that.

I went through the steps of scraping the House of Representatives webpage, and I noticed that he doesn't have that code in his Github. That amused me. But all of this works much more simply than I thought, which is a good thing.

## APIs

I conceptually like this section, but I have to admit that I didn't try any of the examples. It may hurt me later when I have to come back to this section, but at this moment I don't see myself doing much with APIs. I primarily envision myself just grabbing data from public sources and using that as opposed to trying to get onto Twitter or Facebook and scrape data. But I do think this stuff is interesting.
