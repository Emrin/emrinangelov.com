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

- [Example](#example-toc)
- [Example image](#example-image)
- [Example codeblock](#example-codeblock)
- [Example code](#example-code)
- [Base Alerts](#base-alerts)
- [Example video](#example-video)

## Example

I use this blog as a baseline for my future blogs.

## Example image

Images are stored in the static folder under blog and in a folder with the filename.

![My image alt tag](/blog/first/gandalf.gif)
![My image alt 5](/gandalf.gif)

## Example codeblock

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add gf
```

</code-block>
<code-block label="npm">

```bash
npm install gf
```

  </code-block>
</code-group>

## Example code

```js{}[smex.js]
export default {
  yes: 'very'
}
```

## Base Alerts

<base-alert>

alert box

</base-alert>

<base-alert type="info">

info box

</base-alert>

## Example video

<video poster="/blog/first/gandalf.gif" loop="loop" plays-inline="true" controls="controls">
  <source src="/blog/first/frodo-gandalf.mp4" type="video/mp4">
</video>

<video poster="https://my-cdn.com/pic.jpg" loop="loop" plays-inline="true" controls="controls">
  <source src="https://my-cdn.com/video1.webm" type="video/webm">
  <source src="https://my-cdn.com/video1.mp4" type="video/mp4">
  <source src="https://my-cdn.com/video1.ogv" type="video/ogg">
</video>
