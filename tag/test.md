---
layout: testpage
---

<div class="post">

{{ site.time }} <br><br>

{% for tag in site.tags %}
  Tag: {{ tag[1] }} <br><br>
{% endfor %}


<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{ post.title }} <br>
  Tags: {{ post.tags | join:'|' }} <br>
  Size of Tags: {{ post.tags.size }} <br>
  Category: {{ post.category }}
  <br><br>
{% endfor %}

</div>
