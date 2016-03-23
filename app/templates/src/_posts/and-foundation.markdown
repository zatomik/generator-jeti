---
layout: post
title:  "And Foundation!"
date:   <%= date_time %>
categories: blog foundation

images:

  - url: /assets/img/post_assets/foundation.png
    alt: Jekyll
    title: Jekyll

---

{% assign image = page.images[0] %}
{% include image.html image=image %}

{% include zurb-kitchen-sink.html %}

