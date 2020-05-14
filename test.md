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

<h4>Other</h4>

{% capture temptags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
  {% endfor %}
{% endcapture %}

temptags: {{ temptags }} <br><br>

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
