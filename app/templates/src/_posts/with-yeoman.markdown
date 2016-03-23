---
layout: post
title:  "With Yeoman!"
date:   <%= date_time %>
categories: blog yeoman

images:

  - url: /assets/img/post_assets/yeoman.png
    alt: Jekyll
    title: Jekyll
---

{% assign image = page.images[0] %}
{% include image.html image=image %}

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```