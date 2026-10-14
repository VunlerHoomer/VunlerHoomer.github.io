---
layout: default
title: About
permalink: /
---

<div class="academic-home">
  <section class="home-intro" aria-labelledby="profile-name">
    <div class="name-block">
      <h1 id="profile-name">Chengxuan<br>Shi</h1>
      <p class="chinese-name" lang="zh">施承轩</p>
    </div>
    <div class="bio-block">
      <h2>About</h2>
      <p>I’m Chengxuan Shi at Xi’an Jiaotong-Liverpool University.</p>
      <p lang="zh">西交利物浦大学</p>
      <p class="bio-note">A place for my academic work, projects, and notes.</p>
      <div class="home-actions">
        <a class="blue-button" href="{{ '/blog/' | relative_url }}">Read the blog</a>
        <a href="https://github.com/VunlerHoomer" rel="me">GitHub</a>
      </div>
    </div>
  </section>
  <div class="home-sections">
    <section aria-labelledby="academic-heading">
      <h2 id="academic-heading">Academic work</h2>
      <div class="academic-links">
        <a href="{{ '/publications/' | relative_url }}">Publications</a>
        <p>Papers and scholarly work</p>
        <a href="{{ '/projects/' | relative_url }}">Projects</a>
        <p>Ideas and implementations</p>
      </div>
    </section>
    <section aria-labelledby="blog-heading">
      <h2 id="blog-heading">From the blog</h2>
      {% if site.posts.size > 0 %}
        {% for post in site.posts limit:2 %}
        <div class="home-post"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %d, %Y' }}</time><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
        {% endfor %}
      {% else %}
        <p>Notes will appear here.</p>
      {% endif %}
      <a class="blog-more" href="{{ '/blog/' | relative_url }}">Visit the blog</a>
    </section>
  </div>
</div>
