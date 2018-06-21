<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div class="toc">
    <div class="nav3">
      <router-link to="/project/basic/v_if">v-if</router-link>
      <router-link to="/project/basic/v_show">v-show</router-link>
      <router-link to="/project/basic/v_for">v-for</router-link>
      <router-link to="/project/basic/v_text">v-text</router-link>
      <router-link to="/project/basic/v_html">v-html</router-link>
      <router-link to="/project/basic/v_on">v-on</router-link>
      <router-link to="/project/basic/v_model">v-model</router-link>
      <router-link to="/project/basic/v_bind">v-bind</router-link>
      <router-link to="/project/basic/v_pre">v-pre</router-link>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toc"
  }
</script>

<style scoped>

  .content {
    padding: 10px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    border: darkgray 1px solid;
    min-height: 400px;
    max-width: 800px;
  }

  .nav3{
    word-spacing: 14px;
  }
</style>
