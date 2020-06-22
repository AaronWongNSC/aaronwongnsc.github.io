---
layout: post
title: Microbiome Discovery - Part 3
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 3 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is a deep dive into 16S variable regions.

## Sequencing Review

He starts off the video by giving a slightly more in-depth presentation of the sequencing methods. He calls shotgun sequencing a comparison of apples to oranges because the bits of DNA sequences are not directly comparable. If you have two different strands, they can be either be from two different microbes or two different genes from the same microbe. This adds to the complexity of the process.

So the idea is instead to look at ribosomes (specifically, ribosomal RNA or rRNA) since all microbes have them. This helps to narrow down the collection of objects being searched. The 16S gene turns out to be the one that is the point of focus. This gene has predictable structures and predictable regions that are both stable and unstable. He uses a graph of sequence position (about 1500 nucleotides in length) to percent similarity (among microbes) to explain the position within this gene that is the "right" region to be looking at (specifically, the V4 region). There is a process of creating a probe that can explore that region, which can then be run through the PCR to amplify the signal and these can be detected.

A typical run may end up with 10 million sequences, which is too many (which also includes errors). To collapse the information, they cluster the sequences together (usually based on 97% similarity) and call those clusters an OTU (Operational Taxonomic Unit). This reduces the number features to around 1000 OTUs and it becomes a manageable problem.

With this framework, the "features" can be OTUs, specific species, or specific genes, depending on the context.
