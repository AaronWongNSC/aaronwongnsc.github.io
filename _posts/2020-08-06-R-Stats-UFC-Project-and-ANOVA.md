---
layout: post
title: R Stats - UFC Project and ANOVA
tags: blog overview courses
category: general
published: True
---

After I finished off the book, there have been a couple things I've been working on for the class.

The first one was just running different models on the UFC data set for the group project. I'm purposefully staying a little bit backed off from the analysis part because I don't want to spoil that part of it, but I don't feel quite as bad about doing the coding side. It's not really that much work, but there are things that would definitely slow down and frustrate the students, and I'd rather them work through understanding things instead of just doing the project myself. (I kind of wish I was able to do a solo project because I'd be pushing myself a bit harder here. But I'm going to have to do this stuff anyway with the data I have, and so I'll eventually do it.)

So far, we've found that the red/blue color is a sizable advantage (red has a 2:1 edge on blue), but that's also due to the way that colors are chosen. The red corner belongs to the favorite (or higher ranked individual). So it makes sense that red would have more wins than blue. And this makes it acceptable to try to mask the color in other analyses.

For example, in our analysis of reach, we have simply measured which person has the greater reach (and by how much), and then used that absolute difference as the measure instead of thinking about it in terms of red/blue.

For the ANOVA stuff, I needed to work out some things by hand because there were a couple concepts that weren't really clicking with me. I was having some difficulty figuring out how the sum of squares for Type 1, Type 2, and Type 3 ANOVAs were calculated. I found a lot of the presentations of it online to be confusing, and so I had to just work through it on my own. (Maybe I'll make a video about it at some point?)

Type 1 was easy because it's just done by calculating the sum of squares at each step in order. But for Type 2, I was having a hard time figuring out where the sum of squares values were coming from. What didn't click for me was that it was using multiple models at the same time, and not just the final model. For example, if you have two predictor variables X1 and X2, then the sum of squares measured the differences between the X1-only model and the X1+X2 model or the differences between the X2-only model and the X1+X2 model. I kept trying to find combinations working only with the X1+X2 model (which, in retrospect, doesn't make sense, but that's also where learning happens).
