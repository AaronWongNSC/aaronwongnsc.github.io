---
layout: post
title: Microbiome Discovery - Part 2
tags: bioinformatics microbiome_discovery
category: learning
published: True
---

Part 2 of ["Microbiome Discovery"](https://www.youtube.com/playlist?list=PLOPiWVjg6aTzsA53N19YqJQeZpSCH9QPc) discusses the process in which the data is generated.

## History Lesson

The video starts with a brief history of [metagenomics](https://en.wikipedia.org/wiki/Metagenomics), which is just the study of genetic material taken from environmental samples. He talks a little bit about [Van Leeuwenhoek's](https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek) [animalcules](https://en.wikipedia.org/wiki/Animalcule) drawings as the first study of microbiomes using primitive glass lenses.

## Challenges and Methods of Metagenomics

The next part talks about some of the practical realities of this area of research. It's framed around the various methods.

- Grind up all the DNA (Shotgun Sequencing)
  + His analogy is to think of having multiple jigsaw puzzles all mixed together. The challenges is that this is expensive and it's hard to compare what's happening because you have a whole lot of different pieces from different things.
- Sequence a single common gene
  + Within his analogy, this is looking at the bottom corner of a puzzle. You could at least have a good chance being able to distinguish that different pieces come from different puzzles with this type of analysis.
  + This only works if you can reliably isolate specific portions of the gene that exist in many of the microbes. There's a balance between stability and instability. Stable parts of the genome do not allow for differentiation, but unstable parts differentiate too much and cannot easily be connected back to the original microbe. The answer is 16S ribosonal DNA (which will be explained in more detail later).
  + This was made more feasible with the creation of Polymerase Chain Reaction (PCR), which allowed for the amplification of specific code.
  + An additional step was a method to barcode sequences so that multiple samples can be run simultaneously, which made the whole process more affordable.
- Shotgun Sequencing, but with a library
  + As more microbes have been identified and their DNA sequenced, it's now possible to go back to shotgun sequencing because the recovered DNA can be tracked back to the original microbe by matching it up to the library of known organisms.

The availability of these methods has created a different type of picture of the microbiome. Because so many types of microbes have been identified and not all microbes are in all people, you end up with lots of possibilities but only a relative few positive hits within any sample. This makes the search space very sparse, making results more difficult to interpret.
