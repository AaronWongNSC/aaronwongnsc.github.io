---
layout: post
title: QIIME2 -- Still Figuring It Out
tags: QIIME2 projects bioinformatics
category: learning
published: True
---

I'm continuing forward with trying to learn how to read and interpret the data that QIIME2 gives me.

## Quality Plot

I searched around a bit and found a [QIIME2 Forum Post](https://forum.qiime2.org/t/interactive-quality-plot-interpretation-and-colors/1843/6) that explained what the quality plot is all about. Basically, it seems that this is measuring the quality of the reads as they got further along the sequence. The basic interpretation here is that the read gets worse as you go further along it. And so this graph is a picture where your data starts to go wrong.

The graph is actually a collection of a bunch of boxplots. The "Sequence Base" is the position number from whatever the "front" end of the read is. And the quality score is some value that is calculated when these things are read.

I don't know any of the norms about the quality of the data, but as an example, you may only want to keep the sequences up to the point where the quality drops below 30 (either the 25th percentile or the lower whisker). And then the reads beyond that point are just considered to be noise.

## Denoising

The next step has one of two "denoising" options. (Actually, there's a third one that's mentioned, but not used in this tutorial.) Denoising is the process of taking the noise out of the reads and cleaning up the data. The [DADA2 model](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4927377/) is one of the options that can be used. I don't intend to work through the details of the paper to understand the method, at least not right now. It's more just understanding the overall process at this point.

Here are the parameters:
- ```p-trim-left```: This cuts off the first number of reads from the sequences.
- ```p-trunc-len```: This cuts off the ends of the reads. The tutorial case set this to 120, which shows me that I really don't understand the norms of this area. 120 reads is already where the quality has fallen off completely. It's early in that part, but my instinct would have been to cut that off much sooner.
- ```o-representative-sequences```: This creates an artifact that contains what I think are the completed sequences. There's a "featureID" associated with them, but I do not know what data is actually contained in that.
- ```o-table```: This creates some sort of table that I really don't know what it is. I tried to find information about what a "feature" is in this context, and I didn't come up with anything useful.
- ```o-denoising-stats```: This is clearly some file that's telling me about the statistics from the denoising process. This is basically just a spreadsheet that gives some numerical values by sample-id, but I don't really know what this is trying to tell me.

## Phylogenetic Diversity Analysis

Here's where the biology becomes really thick. [Phylogenetic diversity](https://en.wikipedia.org/wiki/Phylogenetic_diversity) is a measure of how diverse the biology is while taking phylogenetic differences into account. [Phylogenetics](https://en.wikipedia.org/wiki/Phylogenetics) is something having to do with the evolutionary history of organisms. So this is some sort of measure of how diverse the organisms were from each sample based on the sequencing data. Or something like that.

At this point, there are a whole bunch of files that are created, and I really don't understand what's going on. I'm going to have to read more about this topic and also alpha/beta diversity. I did a quick internet search, and there does seem to be a good number of resources I can turn to for this.
