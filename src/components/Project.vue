<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <div class="nav2">
      <router-link to="/project/basic">基本指令</router-link>
      <router-link to="/project/component">组件</router-link>
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Project"
  }
</script>

<style scoped>
  .nav2 {
    word-spacing: 14px;
  }
</style>
