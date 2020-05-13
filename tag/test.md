---
layout: testpage
---

<div class="post">

{{ site.time }} <br><br>

<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{ post.title }} <br>
  Tags: {{ post.tags | join:'|' }} <br>
  Category: {{ post.category }}
  <br><br>
{% endfor %}

</div>
