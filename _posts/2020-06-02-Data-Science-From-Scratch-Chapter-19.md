---
layout: post
title: Data Science from Scratch -- Chapter 19
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

The deep learning chapter felt very dense. I don't think it was the code as much as it is the concept. Unlike with neural networks, I really have no previous exposure to deep learning, and so this was a slow read for me. And I think I would need to go work on some examples (preferably using some standard tools) to really get the pieces to fit together in my head correctly.

## Tensors

Instead of vectors and matrices, the mathematical objects are tensors (basically, n-dimensional arrays). He spends some time building some basic functions: a function to determine the shape of a tensor, a function to determine if the object is a one-dimensional tensor, a function to add all the elements of tensors, functions to create tensors, and functions to apply operations (such as component-wise addition or multiplication) to tensors.

## Layer Abstraction

The next bit of machinery sets up how different layers of the neural network are put together. This was fairly confusing to me. But the essence of it is that these layers describe the mathematical operations that are done to push forward to the next layer, but it also has to know how to communicate information backwards to the previous layer (for backpropagation). He describes the basic neural network of the previous chapter as "linear" followed by "sigmoid" followed by "linear" followed by "sigmoid". What this is saying is that the input is a vector, to which a linear transformation is applied (weighted sum), that information is run through a sigmoid to turn everything into outputs of values between 0 and 1, which are then fed into another linear transformation, which then goes back into a sigmoid to give us the confidence values of the final layer.

He then goes on to build the different layers so that they can do the things he needs them to do. This is where things get pretty dense. He creates three different initialization schemes for the coefficients of a linear layer, then both a forward and backward method to push that information around. He then talks about building neural networks as sequences of these types of layers, and then tools to calculate loss and optimize the network.

## MNIST

After talking about a couple other things, he closes on the MNIST dataset for handwritten digits. This is a common one that I've seen for machine learning, and he goes through and codes it all up from scratch. I have to admit that I glossed over this a bit.

I think I would learn a lot more from this section if I went through and copied the code line by line into the computer instead of trying to analyze it line by line. There's something (for me) that actually typing these things into the computer (complete with errors that need to be debugged) that really helps the ideas to click. For now, I'm going to skip that, but this is something that I might return to using a different set of tools than the "from scratch" toolbox. He says he uses [PyTorch](https://pytorch.org), and so that may be the tool that I end up trying to learn.
