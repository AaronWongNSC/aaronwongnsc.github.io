---
layout: post
title: Microbiome Discovery - Part 6
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 6 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is a presentation of assigning taxonomy to sequences. This usually happens after OTU clustering.

## Primers

A primer appears to be something that's used to mark the starting and ending point of the sequence reads. There is a bunch of information about this at the [NIH Human Microbiome Project](https://www.hmpdacc.org/), which I visited but can't make any sense of. I guess the point of this section is a warning that methods of sequencing leads to bias in the results, which creates problems when combining data sets.

There's a particular primer set that is used by the [Earth Microbiome Project (EMP)](https://www.earthmicrobiome.org/protocols-and-standards/16s/). This looks like it's defining a specific protocol to use to get results to meet their standards.

It does not appear that this is something I would need to learn about since this is on the front end of getting the data, and not working with the data itself.

## Taxonomy Assignment

The basic process of this is viewed as a machine learning problem. The training data is a pre-existing collection of known bacteria, then the query data is the given sequence, and the goal is to output a taxonomic label and a confidence level. There are many approaches to this, though there are two general methods.
- Alignment: This takes the sequence and tries to align it directly with the database. This runs slower because it's trying to match full sequences to each other.
- k-mers: A k-mer is a sequence of length k (usually 8) that is taken from the longer sequence, and this is used to create a probabilistic assessment.

## RDP Classifier

The theory behind the RDP classifier is a naive Bayes classification model. There is a bit of interesting hand-waving math that goes on. The example he uses is simplified but demonstrative:

$$ P( genus | TTCAG) = \frac{ P(TT | genus) \cdot P(TC | genus) \cdot P(CA | genus) \cdot P(AG | genus) \cdot P(genus)}{P(TTCAG)}$$

The $$P(genus)$$ and $$P(TTCAG)$$ terms are ignored because those are assumed (as a prior probability) to be equally likely. This reduces the problem to a direct calculation of the frequencies of each of the individual sequences with each genus. Ultimately, the decision is the most likely one as you check over all the genera in the library.

The classifier will also give a confidence level of the assignment, which is calculated by a random sampling method. It takes a subset of the k-mers and applies the classification, and determines the frequency that it gets assigned the same way.

He proposes a research project to try to also incorporate the class hierarchy into the process, as that is a well-defined part of the search space that is not used in the RDP classification process. There was some work done ([Chaudhary et al. PLoS ONE 2015](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0116106)) that uses a random forest classifier.
