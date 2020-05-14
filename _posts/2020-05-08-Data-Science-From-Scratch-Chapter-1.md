---
layout: post
title: Data Science from Scratch -- Chapter 1
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

I felt kind of lazy this morning, so instead of getting out of bed right away, I did some reading.

## Extra Materials

Aside from the book itself, the code is all accessible through [Github](https://github.com/joelgrus/data-science-from-scratch). I'm not yet sure how much I'll be using those files, but we'll see.

## Chapter 1: Introduction

The first chapter was a very light read. He's setting up a framework for examples down the line, which helps with some sort of general narrative arc to keep things rolling. The storyline is that we've been hired as the data scientist for a social network of data scientists.

The first example starts with a simple example of what it would take to code information about a graph. The nodes are users and the vertices are connections. From there, it goes through some examples of other things that might be useful, such as identifying friends of friends, matching interests, and doing some quick graphs. Since this is all an introductory section, there's not a lot of detail put forward. But there were still a few new things that I found.

## collections.Counter()

I have not used the collection module before, but it's part of the [standard library](https://docs.python.org/3.7/library/collections.html) (though it's not loaded by default). This module gives some container alternatives to ```dict```, ```set```, and ```tuple``` that are a bit more powerful. ```Counter()``` is a ```dict``` subclass for counting hashable objects. If you give it a list, it will give the count of the number of times each object appears in the list.

The author is fond of [list comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions). Here's the code for the first use of ```Counter()```:

```Python
def friends_of_friends(user):
    user_id = user["id"]
    return Counter(
        foaf_id
        for friend_id in friendships[user_id]     # For each of my friends,
        for foaf_id in friendships[friend_id]     # find their friends
        if foaf_id != user_id                     # who aren't me
        and foaf_id not in friendships[user_id]   # and aren't my friends.
    )
```

Note that foaf stands for "friend of a friend." Some important background information to make this make sense:

- ```user``` is dictionary with two keys: ```id``` and ```name```. ```id``` is a unique integer and ```name``` is a string.
- ```friendships``` is a dictionary that is keyed to the ```id``` of each user. The value of the entry is a list that contains the ```id``` of each of the friends.

I don't like the indentation scheme, but I might be an overidenter. I'd format it more like this:

```Python
def friends_of_friends(user):
    user_id = user["id"]
    return Counter(
        foaf_id
            for friend_id in friendships[user_id]                 # For each of my friends,
                for foaf_id in friendships[friend_id]             # find their friends
                    if foaf_id != user_id                         # who aren't me
                    and foaf_id not in friendships[user_id]       # and aren't my friends.
    )
```

I like being able to see the nesting of the for loops.

## collections.defaultdict

Another tool out of the ```collections``` module is the [```defaultdict```](https://docs.python.org/2/library/collections.html#collections.defaultdict). It seems that this is just a ```dict``` but with slightly different methods. I will need to play with this some more to understand it, as I don't really understand the ```default_factory``` attribute. I've never used the ```setdefault()``` method on a regular dictionary, which is probably why it doesn't make sense. That's something I'll have to read up on later.
