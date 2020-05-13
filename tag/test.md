---
layout: testpage
---

Some text here. <br><br>

<div class="post">

{{ site.time }} <br><br>

{% for page in site.pages %}
Page: {{page.title}} <br>
Tags: {{page.tag}} <br>
Category: {{page.category}}

<br><br>
{% endfor %}

</div>

More text here.
