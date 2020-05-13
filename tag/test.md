---
layout: testpage
---

<div class="post">

{{ site.time }} <br><br>

{{ site.tags | join:'|'}} <br><br>


<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{ post.title }} <br>
  Tags: {{ post.tags | join:'|' }} <br>
  Size of Tags: {{ post.tags.size }}
  Category: {{ post.category }}
  <br><br>
{% endfor %}

</div>
