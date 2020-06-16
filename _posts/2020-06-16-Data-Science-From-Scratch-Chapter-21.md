---
layout: post
title: Data Science from Scratch -- Chapter 21
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

Natural language processing is not particularly interesting to me, and so I didn't hit this chapter that hard. I think the ideas are kind of fun in the abstract, but I just have no interest in the methods of this section.

## Word Clouds

It starts off with a discussion of word clouds, but simultaneously admitting that they aren't viewed as being particularly functional from a data science perspective. But I do think it's interesting from a data visualization perspective in terms of creating interesting presentations of information. But it does go on to talk about using word placement more like you would use markers on a graph, because then the physical location would carry meaning.

## n-Gram Language Models

The concept of an n-Gram language model is that you can take a document of existing text and create a probabilistic language generator out of it by considering strings of consecutive words as models for sentences. Basically, you take an existing (long) document and look at sequences of words. Then you also identify the possible choices for the beginning and end of a sentence. To create a sentence, you pick a random starting word, and then randomly pick words that followed that word in the original document, and continue doing this. You can extend the model to look backwards more than one word, and this will increase the probability that the sentence will be meaningful (since sentences contain structure that extends beyond just the previous word).

## Grammar

The book also discusses the use of grammar rules to create sentences. Basically, it's an algorithmic process of filling in words into sentences based on the creation of phrases. For example, a sentence could be of the form "subject verb" and then it randomly picks a subject and a verb from a list. But then it could also probabilistically decide to insert an adjective in front of the subject, and so you get "adjective subject verb" that can be filled in with words on a list. In theory, with enough rules, you could generate grammatically proper sentences consistently, but that doesn't mean that the sentences will be meaningful.

## Topic Modeling

Topic modeling is the use of words inside of a document to try to identify the topic of the document. It's similar to the Naive Bayes Classifier in that it's running a basic probabilistic model. I got bored reading this section, so I don't know what else to say about it.

## Word Vectors and Recurrent Neural Networks

This is a section that I may come back to in the future to try to understand better. The idea is that you start with a text and try to create a neural network that can predict a word based on the words that are nearby (or predict words that will appear near a particular word). This is accomplished by creating vectors and using a measure of similarity between words. This is used in recurrent neural networks, which was a section that I also didn't read very carefully. I guess I'm just not interested in natural language processing right now.
