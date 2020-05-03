---
layout: post
title: Pages and Pages
tags: Jekyll GitHub
category: code
published: True
---

Now that I have a few pages going on this blog, it's time to work out pagination.

The Jekyll website has [documentation](https://jekyllrb.com/docs/pagination/) for how this can be done. But I actually got my guidance from finding my way to some updates to [Barry Clark's github page](https://github.com/barryclark/jekyll-now/pull/1486/files#diff-aeb42283af8ef8e9da40ededd3ae2ab2). I think the only real difference between the two is that the Github version uses a separate file instead of putting the pagination code directly into the index.html file. Outside of that, it looks basically the same.

Here were the basic steps:

- Update ```_config.yml```: You need to set some variables for the pagination. For testing purposes, I have the number of posts per page all the way down at 3, but a number like 7 or 10 seems much more reasonable in the long run.

```
# Pagination 
paginate: 3
paginate_path: /page:num/
```

I also needed to add the pagination plugin. For some reason, the ```_config.yml``` file sets gems instead of plugins. I decided to leave it as gems, and it seems to work. Maybe that's just a change of language that they implemented between versions.

```
gems:
  - jekyll-sitemap # Create a sitemap using the official Jekyll sitemap gem
  - jekyll-feed # Create an Atom feed using the official Jekyll feed gem
  - jekyll-paginate # Added for pagination
```

- Added ```pagination.html```: This was just a full copy-paste of the code. The code seems pretty easy to follow, but I don't understand the syntax at a level where I would be able to produce the code. The double braces are spaces for text information to be dumped into, and it looks like you start with a variable and the pipes modify it. Here's an example:

```
<a class="ml-1 mr-1" href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
```

The variable ```paginator.previous_page_path``` is one of the variables in the ```paginator``` class(?), then the base URL for the website is prepended, and then (for some reason) the double backslashes need to be replaced with a single backslash. I don't really know how that information is stored, but could probably work it out if I spent the time.

- Update ```index.html```: Not too much to do here. In the main loop, instead of cycling through all of the posts on the site, you only want it to cycle through the posts on the page, which is stored in the variable ```paginator.posts```. Also, the pagination code is put in at the bottom of the page.

```html
<!-- Pagination -->
<div class="bottompagination">
    <div class="navigation" role="navigation">
      {% include pagination.html %}
    </div>
</div>
```

- Update ```style.scss```: This is fairly basic. It's just adding in formatting instructions for the pagination part.

```css
.bottompagination .navigation {
    display: block;
    padding: 35px 0 0 0;
    text-align: center;
    color: #999;
    border-top: 1px solid #ddd;
}
```

And this covers the code for pagination.
