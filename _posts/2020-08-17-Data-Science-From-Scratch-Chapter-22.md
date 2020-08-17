---
layout: post
title: Data Science from Scratch -- Chapter 22
tags: books Python Data_Science_from_Scratch
category: learning books Data_Science_from_Scratch
published: True
---

It's been a couple months, but I really want to just finish this book completely. So I'm picking up where I left off. Network analysis is a way of looking at graphs (nodes, vertices, and edges) and determining information about the overall structure and the relationships inside of it.

## Betweenness Centrality

The book returned to a graph that was created in a much earlier chapter. The concept of betweenness centrality is that if you take a graph and find the shortest paths between every two nodes, then a vertex can be seen as being "central" to the graph if lots of those shortest paths goes through that vertex. The book spends several pages working out the algorithm for this process.

It also talks briefly about closeness centrality which measures the average path length from any vertex to all the other vertices. Someone is in the "center" of the graph if their average distance to everyone else is small.

## Eigenvector Centrality

The book spends a small amount of time developing some of the math here. The idea is to use the adjacency matrix (the i,j element is 1 if i and j are connected by an edge and 0 otherwise), and then find the eigenvector corresponding to the largest eigenvalue. At least, that's what the code looks like it's doing. But the mathematical presentation is rather brief. I would guess that there's some intuition here that is probably similar to something like principal component analysis.

## Directed Graphs and PageRank

PageRank is a method for counting recommendations. But instead of just counting recommendations, it also has a weight being supplied from the recommender. The process is iterative. It starts with a total weight of 1 being distributed evenly across all the nodes. Each node then distributes most of the available weight to the things it recommends, and then returns the rest to the pool. Then the process repeats, and you just see where everything flows to in the long run. The book doesn't explain the dampening step, but I think the upshot of that is to prevent the situation where you've got one large quantity of pagerank flowing in a cycle that prevents things from converging. So by dosing it out over a series of steps, you are better able to get convergence. I'd have to play with it some to see if that's the case.
