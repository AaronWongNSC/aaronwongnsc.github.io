---
layout: blank
---

<h4> Site Variables </h4>

site.time (time site was processed): {{ site.time }} <br><br>

<h4> Pages </h4>
{% for page in site.pages %}
  Title: {{ page.title }} <br>
  Name: {{ page.name }} <br>
  URL: {{ page.url }} <br>
  Tags: {{ page.tags }} <br>
{% endfor %}

<h4> Other Stuff </h4>

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
  {% for post in site.tags[this_tag] %}
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
