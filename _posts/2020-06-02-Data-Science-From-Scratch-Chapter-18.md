---
layout: post
title: Data Science from Scratch -- Chapter 18
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

Neural networks are something that I've played with a little bit before coming to this book. The book moves through pretty quickly, which is both good and bad. It's good in that it doesn't really get too bogged down in the details, but it's bad because it feels a little bit skimpy on the explanations.

## Perceptrons

After introducing the idea of neural networks at a very high level, he jumps straight into the perceptron, which is basically a single neuron. It takes in some number of binary inputs, computes a weighted sum, and then produces a binary output depending on the value of that weighted sum. (It creates an output of 1 if the weighted sum is greater than or equal to zero, and 0 otherwise.) He uses logic gates for this, which makes sense in the context of thinking of this like a computerized brain, but it felt a little bit artificial to me because neural networks really aren't just a fancy way to create logic gates, and I'm not sure why you would want to set it up that way. Maybe I'm missing something.

## Feed-Forward

After a few examples of perceptrons, he moves into the feed-forward neural network, which is the basic type of neural network I think everyone starts with. This one has a sequence of discrete layers where data from one level passes to the next. He builds it as a list (layers) of lists (neurons) of vectors (weights). From this, he builds a neural network that calculates the exclusive or. But he does this by manually selecting the weights of each neuron. What isn't made as clear is that switch to the logistic function means that the output of the neurons is no longer binary, but a number between 0 and 1. This does change the perspective slightly because now it is shades of gray instead of black and white.

## Backpropagation

This is where the machine learning part kicks in. He describes the process of feeding an input vector to a neural network and then using gradient descent to update the weights. And then if this is done enough times, your neural network (hopefully) converges to something. I wish he had done an example of backpropagation to bring a little more insight into what's happening at that step. I get it because I've seen it before, but the presentation in the book makes it feel hand-wavy. ("The math... is not terribly difficult... so I'll leave it as an exercise.") I think just working through the calculations one time would have been useful.

## Fizz Buzz

He then goes on to train the neural network to solve "Fizz Buzz" (which is apparently a fairly standard programming problem). The goal is to print the numbers 1 to 100, but multiples of 3 are replaced with "fizz", multiples of 5 are replaced with "buzz", and multiples of 15 are replaced with "fizzbuzz." This was a good conceptual example in terms of thinking about how you would set up a neural network. He created a 4-element vector that represents the four possible outputs, and the input is the number in binary. He then trained the neural network on the numbers 1 through 100, and tested it on 101 through 1024. This is where neural networks always get mysterious because it's just a repeated calculation that magically yields a bunch of numbers that just work. But that's how this stuff goes.
