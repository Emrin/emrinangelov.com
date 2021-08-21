---
title: my title
description: my description
imgUrl: blog/filename/main.jpg
date: 2021-MM-DD
authors:
  - name: Emrin Angelov
    avatarUrl: https://pbs.twimg.com/profile_images/1175377476412936193/CY_5QKNg_400x400.jpg
    link: https://twitter.com/cyberlypse
tags:
  - tag1
  - tag2
  - tag3
---

## Example TOC

- [Example TOC](#example-toc)
- [Nuxt/NuxtJS/Nuxt.js](#nuxtnuxtjsnuxtjs)
- [Example image](#example-image)
- [Example codeblock](#example-codeblock)
- [Example code](#example-code)
- [Base Alerts](#base-alerts)
- [Example video](#example-video)

## www

www

## Example image

Images are stored in the static folder under blog and in a folder with your filename.

![My image alt tag](blog/going-dark-with-nuxtjs-color-mode/list-of-colors.png)

## Example codeblock

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxt/content
```

</code-block>
<code-block label="npm">

```bash
npm install @nuxt/content
```

  </code-block>
</code-group>

## Example code

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

## Base Alerts

<base-alert>

alert default is warning

</base-alert>

<base-alert type="info">

if you have some info to share

</base-alert>

## Example video

<video poster="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.jpg" loop="loop" plays-inline="true" controls="controls">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.webm" type="video/webm">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.mp4" type="video/mp4">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.ogv" type="video/ogg">
</video>
