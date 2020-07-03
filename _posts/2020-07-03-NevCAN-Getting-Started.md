---
layout: post
title: QIIME2 -- Getting Started
tags: QIIME2 projects bioinformatics
category: learning
published: True
---

I spoke with a colleague about an opportunity to do some bioinformatics with her, and so I'm starting down the path of seeing how much I can learn and do in that area with what I know. The program used for this is [QIIME2](https://qiime2.org/). At this point, I only vaguely know that it's software that's used for sequencing DNA and then performing various types of statistical analyses on it. What does that mean exactly? I have no idea.

## Installation

The first thing I had to do was get the software installed. It runs on a Linux-based system, and so I had to install a virtual box to run it. Fortunately, they have a [tutorial](https://docs.qiime2.org/2020.2/install/virtual/virtualbox/) for how to do this, and everything ran exactly as described. I installed it onto one of my workstations on campus that I have remote access to, which means that I can keep my home computer free while things run somewhere else. I don't know how fast/slow the computations are, but I have a general sense that things may take hours to run.

## Moving Pictures Tutorial

After getting everything installed, I worked my way through the [Moving Pictures Tutorial](https://docs.qiime2.org/2020.2/tutorials/moving-pictures/). This tutorial is an analysis of human microbiome samples. They were taken from two different people from four different body sites at five different times. The first of those times was immediately after using an antibiotic, and so presumably we would be watching the decay and return of the microbiome in response to the medication.

The good news is that I was able to get the program to generate the outputs. The bad news is that I have little idea about what I actually accomplished. And so this puts me into an interesting conundrum. My colleague has her own data that she needs to have analyzed, and so my lack of knowledge about what I actually did is probably going to be problematic. I've contacted her to see what she thinks is the best way forward. But in the meantime, I'm going to start doing some reading and see how much I can start to piece together on my own.

## Metadata

The first object we run into in the tutorial is the metadata. This is just information about the data that is collected, but not the data itself. The metadata of the sample gives a sample ID and a barcode sequence, followed by information about who, when, and where the data was gathered from.

## Barcodes

The barcode is the important piece from the metadata, at least from a learning perspective. These are related to the process of reading the genes. I understand that their intention is to flag different chunks of genetic code so that you can run multiple types at the same time. For example, instead of having to run the sequencing process 40 times (2 people and 4 body sites at 5 different times), you can gather all the cells and put these barcodes on them, and then after it runs you can then identify which sequences came from which sample.

The metadata file contains the barcodes that were used, but in the output files they're paired up with their complement (word choice?). So the barcode "AGCTGACTAGTC" would actually be read as "TCGACTGATCAG." At least in theory.

## Fastq files

[Fastq files](https://en.wikipedia.org/wiki/FASTQ_format) are the output files from the sequencing process. It's a text document that contains 4-line clusters. The first row is an identifier, the second row is a sequence, the third row starts with a "+" and then sometimes has a copy of the sequence again (not entirely sure the function of this row), and the fourth row is a measure of the quality of the read. There are actually two files that come with tutorial. One is a fastq of barcodes and one is a fastq of sequences. I thought that the barcodes would be the first 10 letters off of the sequences (the barcodes have length 10), but that doesn't seem correct. Then I thought it was the complement of the barcode, which was only correct sometimes. So there's something about misreads that's happening and I'm not entirely sure how it is resolved.

I believe the theory is that if the barcode reads are just one letter off of a barcode (and the barcodes were chosen well), then you could guess what that the barcode should have been. And I think that's how parts of the rest of this process is supposed to go.

## QIIME2 Artifact

The first command that you run converts the fastq files into a QIIME2 artifact. These artifacts are basically just folders that contain information so that the process can be tracked. The first step (```qiime tools import ... ```) appears to do no real processing and just adds some tracking files.

## Demultiplexing

Demultiplexing is the process of taking the mixed batch of genes and sorting them out. The tutorial uses the emp-single protocol ([Earth Microbiome Project](https://earthmicrobiome.org/), single-end reading). Unfortuately, I don't really know what that protocol really is or what's happening at this step.

The ```demux``` command is used to do the demultiplexing, and it has a bunch of parameters:
- ```i-seqs```: These are the input sequences created at the previous step.
- ```m-barcodes-file```: This is the metadata file that has the information about the barcodes. This does not live inside of the QIIME2 artifact.
- ```m-barcodes-column```: This is the column name that contains the barcode sequences within the metadata file.
- ```o-per-sample-sequences```: The ```-o``` is an output signifier. This describes the name of the primary output artifact.
- ```o-error-correction-details```: This creates a file that does a complete list of the barcode reads and the labeling.

## Error Correction Details

I looked at the details file to see if I can better understand what's happening. Here's what I can see:
- There are 302581 records, which means that there were that many different sequences that were analyzed.
- Not all the barcodes were valid. In fact, 38650 out of the 302581 records (12%) did not correspond to a barcode.
- The remaining records are all successfully tied to one of the labels, allowing them to be tracked back to their original source.
- The error correction output keeps track of both the sequence that was read as well as the sequence that was used as the barcode, which means that it includes an error-correcting function if the sequence does not match any of the information in the metadata. It looks like it counts the number of changes required to get the match.

In theory, this is something that could be programmed up from scratch relatively easily, but it would probably lack both credibility and efficiency.

## Per Sample Sequences

The second output file can be viewed using ```qiime tools view``` with the .qzv file name. This opens up a web browser that gives an interactive interface to explore the data further.

This data has two tabs. The first tab is an overview tab, and the bottom half of this gives the counts of the number of records that matched during the demultiplexing process. In theory, I should be able to match these sequences one-for-one with the records from the error correction details.

The top part of this page is a summary of results. For example, it shows that there are 263931 total (valid) sequences. which matches up with 302581 total records minus the 38650 that did not match any labels. It gives some basic statistics about the reads (minimum, maximum, mean, median) and then a graph. The graph is a fairly blocky histogram of the number of samples that have a number of sequences. I think this is supposed to just give an overview of the quantity of usable data that there is at the end.

And I'm still trying to figure out what the other tab represents.
