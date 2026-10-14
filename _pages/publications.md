---
layout: page
permalink: /publications/
title: Publications
description: Papers and scholarly work.
nav: true
nav_order: 1
---

{% capture publication_list %}{% bibliography %}{% endcapture %}
{% assign publication_check = publication_list | strip_html | strip %}
{% if publication_check != '' %}
{% include bib_search.liquid %}
<div class="publications">{{ publication_list }}</div>
{% else %}
<div class="quiet-empty"><span class="eyebrow">PUBLICATIONS</span><h2>A space for scholarly work.</h2><p>Publication details will be added here when available.</p><a href="{{ '/' | relative_url }}">Back to about <span aria-hidden="true">↗</span></a></div>
{% endif %}
