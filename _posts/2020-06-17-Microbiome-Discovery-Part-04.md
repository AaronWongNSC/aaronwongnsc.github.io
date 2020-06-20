---
layout: post
title: Microbiome Discovery - Part 4
tags: projects bioinformatics microbiome_discovery
category: learning
published: True
---

Part 4 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) is an overview of the QIIME pipeline.

## QIIME

QIIME is a tool that is used to do most of the computational work in this area. (Or at least, it was at the time the video was made. At this point, QIIME2 exists, which does the same type of things but using a slightly different structure.) It includes processes to handle the quality control, calculating different measures of diversity, and creating plots/images to communicate that information.

The pipeline has the following steps:
- Tag 16S genes from different cultures with different barcodes.
- Run the samples through a machine to get sequences.
- Separate the sequences back to their original cultures (demultiplexing).
- Clip off the barcodes.
- Use the sequences to perform your analyses. For example, create a phylogenetic tree from the sample.

He gives a flowchart that is complex because there are lots of steps where there are options for what to do next.

## Key Files

The video lists four files needed for QIIME: sequences, quality, parameters, and metadata. The QIIME2 process seems to only need the list of barcodes, the sequences, and the metadata. I think quality is contained within the fastq files, which may not have been the case for earlier processes.

He goes on to talk about the requirements of QIIME, but this doesn't look like the workflow of QIIME2, so I didn't pay that much attention to this.

He did point out that one of the key output files is an OTU table. I don't remember coming across this as I was exploring program earlier. But I might also have missed it because I didn't know that I would be looking for it. Or maybe it doesn't exist in this form anymore. This table contains the counts of how many times each OTU appeared in each sample. These OTU files are stored in a BIOM format, which is something else I don't recall seeing.

## QIIME Commands

This section does not correspond to QIIME2. It's a list of Python scripts that are part of QIIME. He does hint at future concepts (alpha and beta diversity), but those have their own videos later.

## Video 4.5 -- UNIX

I'm skipping over this completely.
