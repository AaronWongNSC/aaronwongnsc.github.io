---
layout: testpage
---

<div class="post">

{{ site.time }} <br><br>

{% for tag in site.tags %}
  Tag: {{ tag[0] }} <br>
  Tag Size: {{ tag[1].size }} <br><br>
{% endfor %}

{% capture temptags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
  {% endfor %}
{% endcapture %}

{{ temptags }}

<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{ post.title }} <br>
  Tags: {{ post.tags | join:'|' }} <br>
  Size of Tags: {{ post.tags.size }} <br>
  Category: {{ post.category }}
  <br><br>
{% endfor %}

</div>
