---
layout: post
title: ATMI -- MANOVAs All Day
tags: ATMI projects student_data
category: learning
published: True
---

I finally created some time to work with the ATMI data.

I have learned a lot since I started the R stats course, and so coming back to the ATMI data has been kind of fun and interesting. Fortunately, a lot of the data hygiene was already done by the previous me, and so I was able to go straight into coding the analysis.

I have two data frames. The first one is the straight survey data and the second one is the intra-semester data for the students that took the survey both at the beginning and the end of the semester. I have analyzed both of them based on gender, ethnicity, whether the students are first generation, and course, and the full data set is also tested based on survey distribution just to make sure there aren't any underlying differences in the student population for different surveys.

I had to learn how to run robust MANOVAs for this, which wasn't too hard but it did take a little bit of extra thinking time to make sure that I really did understand what I was doing and that the functions were telling me what I think they were telling me. I'm about 95% confident that I've got it figured out.

The main takeaways:
 - There are no gaps based on ethnicity
 - There is a gender gap
 - There is something going on with the self-confidence of remedial students in MATH 95M compared to MATH 96A, our two largest remedial courses. I don't have any plausible explanations for this.
 - There is a small gap in enjoyment of mathematics based on whether students are first generation, and I have no explanation for this, either.
 - Student attitudes appear to not change at all over the course of a semester.
