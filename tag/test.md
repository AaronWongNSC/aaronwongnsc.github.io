---
layout: default
title: "Test"
---
{% for post in paginator.posts %}
{{ post.title }}
{{ post.category }}
{% endfor %}
