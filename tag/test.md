---
layout: testpage
---

<div class="post">

{{ site.time }} <br><br>

<h1> Pages </h1>

{% for page in site.pages %}
  Page: {{page.title}} <br>
  Tags: {{page.tag}} <br>
  Category: {{page.category}}
  <br><br>
{% endfor %}

<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{post.title}} <br>
  Tags: {{post.tag}} <br>
  Category: {{post.category}}
  <br><br>
{% endfor %}

</div>
