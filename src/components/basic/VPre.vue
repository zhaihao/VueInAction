<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    {{msg}}
    <p v-pre>{{msg}}</p>

    <p>v-pre 直接输出 vue 表达式</p>
  </div>
</template>

<script>
  export default {
    name: "VPre",
    data() {
      return {
        msg: 'hello'
      }
    }
  }
</script>

<style scoped>

</style>
