---
layout: page
permalink: /blog/
title: Blog
description: Notes on learning, research, and ideas in progress.
nav: true
nav_order: 3
---

<div class="blog-toolbar"><span>{{ site.posts.size }} {% if site.posts.size == 1 %}post{% else %}posts{% endif %}</span><a class="blue-button" href="{{ '/write/' | relative_url }}">Write a post</a></div>
{% if site.posts.size > 0 %}
<div class="journal-list">
{% for post in site.posts %}
<article class="journal-entry">
  <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %d, %Y' }}</time>
  <div><h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2><p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>{% if post.tags.size > 0 %}<span class="journal-tags">{{ post.tags | join: ', ' }}</span>{% endif %}</div>
</article>
{% endfor %}
</div>
{% else %}
<div class="quiet-empty"><h2>A space for notes.</h2><p>No posts yet. Future writing will appear here.</p></div>
{% endif %}
