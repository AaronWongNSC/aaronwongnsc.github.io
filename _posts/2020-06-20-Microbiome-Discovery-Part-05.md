---
layout: post
title: Microbiome Discovery - Part 5
tags: projects bioinformatics microbiome_discovery
category: learning
published: True
---

Part 5 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is a discussion of operational taxonomic units.

## Why OTUs?

An OTU is a cluster of sequences that are sufficiently similar to each other to be treated as a single object. The value of this is that it reduces hundreds of millions of sequences into thousands of clusters, making the problem computationally more feasible. This also helps to control errors that arise from the sequencing steps.

He also mentions controlling for recent evolutionary divergence...

## OTU Methods

There are a few methods to creating OTUs:
- De Novo (This is Latin for "new" and used in legal contexts to do something as if from scratch): This is just clustering each new sequencing run from scratch based on internal similarity.
- Closed Reference: This matches the input sequences to a reference database. If sequences don't match, they are discarded.
- Open Reference: A hybrid approach that starts by matching to a reference database, but then applying de novo clustering to the remaining pieces.

## Clustering Methods

There are also multiple methods for creating clusters:
- Centroid-based: This is a two-rule system. Pick a sequence and cluster with it all other sequences that are 97% similar to it. Then make sure that the next centroid is at least 3% away and create another cluster.
- Single-linkage: This creates clusters based on individual elements being close to each other. He doesn't describe how this happens, but it's probably something like a bottoms-up method of ordering the pairwise distances and linking points together in order of closeness. The clusters here tend to be spread out.
- Complete-linkage: This creates clusters based on the collection of elements being close to each other. This would seem to say (for example) that if you pick any two elements from the cluster, they're guaranteed to be within 3% of each other. Because of that condition, these clusters tend to be more spherical in shape.
- Average-linkage: This is a clustering method that's in between single-linkage and complete-linkage. He says that it requires the average distance between elements to be close to each other, but doesn't discuss how that is averaging step is accomplished.

Clusters are better when there's more distance between them. It makes for much clearer separation of objects and makes them less ambiguous.

## De Novo Clustering

De Novo clustering is good because it uses all the data and allows for unknown species. But it's also bad because it's not parallelizable (which can make it slower) and not generalizable.

Here are some of the available methods:
- UCLUST: This uses a greedy clustering algorithm. The first element is treated as a centroid, then the next sequence is measured against it (using a probabilistic comparison method), and if it's too far away it becomes a new centroid. And this repeats all the way to the end. Apparently, it's a closed source process, which means that you've got to pay for it.
- CD-HIT: Similar to UCLUST, but takes more time in the comparison step.
- SUMACLUST: This is another approach like UCLUST, but does a full alignment at each step instead of a probabilistic one, which slows down the process but may create fewer false clusters. There are also no publishable references.
- Mothur: This approach uses all pairwise distances, which means that it can do single-linkage, average-linkage, or complete-linkage calculations. This is likely better than greedy methods because it takes a high level perspective. But this is problematic because it cannot be done with big data sets due to the volume of computations.
- SWARM: This creates a graph of all the sequences based on pairwise distance, but it doesn't require computing all pairwise distances. It starts with a single sequence, then finds all sequences that are within a specific distance to it, and then finds all the sequences within a specific distance to the new sequences, and continues until nothing else can be found. This assumes that there are large gaps between clusters, which may or may not be true.

## Reference Clustering

He spent much less time on these.

- Closed-Reference: This approach is the easiest and most sensible approach for most studies of known microbiomes. It is great for human gut microbiomes because they have been studied deeply, but not as good for other environmental microbiomes.
- Open-Reference OTU: This should be the approach for partially known environments.

He closes off with a summary. The important thing for me is that the data I think I'm gong to be working with is a soil microbiome, which falls into the de novo clustering category in his summary (since not as much is known about them). I don't know whether there have been vast improvements in the reference libraries in the last 4 years, but I'm doubtful that it would have made the jump.
