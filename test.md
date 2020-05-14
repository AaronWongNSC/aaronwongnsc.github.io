---
layout: blank
---

<h4>Site Variables</h4>

site.time (time site was processed): {{ site.time }} <br><br>

<h4>Pages</h4>

Number of pages: {{ site.pages.size }} <br><br>

{% for page in site.pages %}
  Title: {{ page.title }} <br>
  Name: {{ page.name }} <br>
  URL: {{ page.url }} <br>
{% endfor %}


<h4>Posts</h4>

Number of posts: {{ site.posts.size }} <br><br>

{% for post in site.posts %}
  Title: {{ post.title }} <br>
  URL: {{ post.url }} <br>
  Tags: {{ post.tags }} <br>
{% endfor %}

<h4>Tags</h4>

Number of tags: {{ site.tags.size }} <br><br>

{% for tag in site.tags %}
  Tag: {{ tag[0] }} <br>
  Tag Size: {{ tag[1].size }} <br>
  {% for post in tag[1] %}
  Title: {{ post.title }} <br>
  URL: {{ post.url }} <br>
  Tags: {{ post.tags }} <br>
  {% endfor %}
{% endfor %}

<h4> Tag Code </h4>

{% assign rawtags = "" %}
{% for post in site.posts %}
  {% assign ttags = post.tags | join:'|' | append:'|' %}
ttags: {{ ttags }} <br>
  {% assign rawtags = rawtags | append:ttags %}
rawtags: {{ rawtags}} <br>
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}
rawtags, split and sorted: {{ rawtags | split:'|' }} <br>

{% assign site.tags = "" %}
{% for tag in rawtags %}
tag: {{ tag }} <br>
  {% if tag != "" %}
    {% if tags == "" %}
      {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
      {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
tags: {{ tags | split:'|' }} <br>
  {% endif %}
{% endfor %}
site.tags: {{ site.tags }} <br>

<h4>Other</h4>

{% for tag in site.tags %}
  {% capture this_tag%}{{ tag[0] }}{% endcapture %}
  {{ this_tag }}
  <ul>
  {% for post in site.tags[this_tag] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
      {{ post.description }}
    </li>
  {% endfor %}
  </ul>
{% endfor %}
