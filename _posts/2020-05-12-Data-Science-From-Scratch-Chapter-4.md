---
layout: post
title: Data Science from Scratch -- Chapter 4
tags: books Python Data_Science_from_Scratch
category: learning
published: True
---

This is a short chapter on linear algebra. It's relatively light on details and information, but maybe that's because you don't need that much linear algebra at this level.

## NumPy

At the end of the section, the author acknowledges that you can do everything he has done except using NumPy instead of the built-from-scratch functions he created. I think this is a pedagogical decision, as he probably wanted to be able to highlight the underlying logic of the vector operations. I'm going to go through and just do everything he did with NumPy because it's good practice.

Under the conda distribution, NumPy is already installed even for the new virtual environment, so it didn't need to have anything installed.

```Python
import numpy as np
```

## Vectors

The book uses a ```List``` of floats for vectors. With NumPy, it's just an array. Arrays can be added and subtracted directly, and scalar multiplication works in the intuitive way.

```Python
v = np.array([1, 2, 3])
w = np.array([4, 5, 6])

v + w # Sum of vectors
v - w # Difference of vectors
3*v # Scalar product
```

## Operations on Vectors

NumPy comes with methods and functions that match the vector operations in the book.

```Python
v.mean() # Returns the mean of the entries in the array (any dimensions)
np.dot(v, w) # Calculates the dot product of v and w. This works for any two arrays of the same dimension

np.linalg.norm(v) # Calculates the magnitude of a vector.
```

## Operations on Matrices

Matrices are the same type of object as vectors in NumPy. The only difference is in the dimensions.

```Python
A = np.array([ [1, 2, 3], [4, 5, 6] ])
A.shape # This returns the shape of the matrix. It goes by number of rows then number of columns.
        # In this case, it's (2,3)
v.shape # For comparison, this is (3,). The reason this isn't (3,1) is that this would imply that each row is another list
        # np.array( [ [1], [2], [3] ]) would have shape (3,1).
```

The author creates code to get specific rows and columns out of a two dimensional matrix, but this can be done through slicing.

```Python
A[0]   # This gives the top row of the matrix.
A[:,0] # This gives the first column of the matrix.
       # Note that both of these give a vector, so that their shapes are (3,) and (2,), respectively.
```

## Applications

The book then uses a matrix to encode relationship information. The nodes in the friend network graph from earlier is turned into a matrix where a 1 in the i, j position means that i and j are connected, and it's a 0 otherwise.
