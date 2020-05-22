---
layout: post
title: Data Science from Scratch -- Chapter 13
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

The Naive Bayes classifier is an interesting construction that uses conditional probabilities in order to attempt to determine the probability that an object is in a particular class. The example that this is used with is spam filtering, and this is apparently one of the methods that was once used for that task.

## Mathematics

The math behind this is just Bayes' theorem. As with all conditional probabilities, intuition is a terrible guide. As I read through the section, my intuition kept saying that if you multiply enough probabilities together, the probability simply goes down to zero. But that's not exactly what's happening here. And it wasn't until I slowed myself down to go through the steps in detail that it started to click. And so I'm going to take the time to write out those extra steps and numbers because I think it was an important part of my own understanding of the topic.

## Spam Example

The author spends a few pages that are mostly just code in order to develop his classifier. I'm just going to focus on the overall prediction process. (A non-spam message is called ham. That's an amusing play on words.)

- There are three messages in the training set: "spam rules" (spam), "ham rules" (ham), and "hello ham" (ham). This leads to a collection of four keywords that will be used to determine whether a message is spam.
- A pseudocount value of 0.5 is used in order to ensure that no value can lead to a 0% probability of spam. This value is added to the numerator and twice this number is added to the denominator of the conditional probability. This is essentially like assuming that there's a 50-50 chance of something being spam or ham without knowing anything about it, and very similar to using $$\beta(1,1)$$ as the prior before any observations.
- We then need to calculate the probability of the word indicating spam or ham.
  - Test
