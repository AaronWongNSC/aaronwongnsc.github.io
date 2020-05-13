---
layout: testpage
---

<div class="post">

{{ site.time }} <br><br>

<h1> Pages </h1>

{% for page in site.pages %}
  Page: {{page.title}} <br>
  Tag: {{page.tag}} <br>
  Tags: {{page.tags}} <br>
  Category: {{page.category}}
  <br><br>
{% endfor %}

<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{post.title}} <br>
  Tag: {{post.tag}} <br>
  Tags: {{post.tags}} <br>
  Category: {{post.category}}
  <br><br>
{% endfor %}

</div>
