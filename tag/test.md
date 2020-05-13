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

{{ temptags }} <br><br>

{% assign sortedtemptags = temptags | split:' ' | sort | reverse %}

{{ sortedtemptags | join:'|' }} <br><br>

{% for tag in site.tags %}
  {% capture this_tag%}{{ tag[0] }}{% endcapture %}
  {{ this_tag }}
  {% for post in site.tags[tag[0]] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
      {{ post.description }}
    </li>
  {% endfor %}
{% endfor %}

<h1> Posts </h1>

{% for post in site.posts %}
  Page: {{ post.title }} <br>
  Tags: {{ post.tags | join:'|' }} <br>
  Size of Tags: {{ post.tags.size }} <br>
  Category: {{ post.category }} <br>
  URL: {{ post.url }} <br>
  <br><br>
{% endfor %}

</div>