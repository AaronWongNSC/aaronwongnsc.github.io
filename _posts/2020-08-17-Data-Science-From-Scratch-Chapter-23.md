---
layout: post
title: Data Science from Scratch -- Chapter 23
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

A recommender system is a program that takes a user's selection and tries to find selections that are related to it. The relationship is based on the behaviors of other users.

## Not-So-Good Methods

The book briefly talks about manual curation and curation by raw popularity. Manual curation is time consuming and prone to all sorts of biases, whereas raw popularity doesn't take into account the individual user's information. And these shortcomings point to the need of something else.

## User-Based Collaborative Filtering

This is a process of identifying users that are similar to the given user. The possible interests is turned into a list, and then each user is identified with a vector of 0s and 1s, where 1 in a particular position represents that they have interest in the corresponding topic in the list. The book introduces a function called cosine_similarity, but I think that's just a repackaging of the dot product. By finding people whose interests are similar, you can then recommend topics that are on the other users' interest list.

## Item-Based Collaborative Filtering

This is the same idea, except instead of linking users together, it links interests together. In this setup, the vectors now represent the users who have an interest in the topic.

## Matrix Factorization

I read through this chapter, but I don't see how what he's done here has anything to do with matrix factorizations. The model he creates is to use moving rating data and try to predict the rating that a user would give a particular movie. The underlying concept is that you would want to recommend movies that a person would rate highly.
