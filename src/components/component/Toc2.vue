<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div class="toc">
    <div class="nav3">
      <router-link to="/project/component/v_directive">v-directive</router-link>
      <router-link to="/project/component/v_lifecycle">v-lifecycle</router-link>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Toc2"
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

  .nav3 {
    word-spacing: 14px;
  }
</style>
