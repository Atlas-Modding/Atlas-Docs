---
layout: home

hero:
  name: Atlas Development
  text: Development team for Minecraft mods.
  tagline: Developing for your needs, now.
  actions:
    - theme: brand
      text: Defaulted
      link: /defaulted
    - theme: brand
      text: Atlas Core
      link: /core/intro
---

***

<script setup>
import { data as posts } from './blog/blog.data.ts'
</script>

<template>
  <h1>Updates & Development Progress</h1>
  <hr>
  <p v-for="post of posts">
    <a :href="post.url">{{ post.title }}</a>
    <span style="font-size: 16px;"> by {{ post.author }} on {{ post.date.string }}</span>
    <br>
    <span style="font-size: 22px;">{{ post.excerpt }}</span>
    <hr>
  </p>
</template>
