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
import { data as posts } from './blog/blog.data.js'
</script>

<template>
  <h1>Updates & Development Progress</h1>
  <hr>
  <ul>
    <li v-for="post of posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span style="font-size: 16px;"> by {{ post.frontmatter.author }}</span>
      <br>
      <span style="font-size: 26px;">{{ post.frontmatter.desc }}</span>
    </li>
  </ul>
</template>
