---
layout: home

hero:
  name: Atlas Development
  text: Development team for Minecraft mods.
  tagline: Developing for your needs, now.
  actions:
    - theme: brand
      text: Defaulted
      link: /defaulted/intro
    - theme: brand
      text: Atlas Core
      link: /core/intro
---

***

<script setup>
import { data as posts } from './blog/blog.data.ts'
import paths from './index.paths.js'

paths()
</script>

<template>
  <h1>Updates & Development Progress</h1>
  <hr>
  <p v-for="post of posts">
    <a :href="post.url">{{ post.title }}</a>
    <span style="font-size: 16px;"> by {{ post.author }} on {{ post.date.string }}</span>
    <hr>
  </p>
</template>
