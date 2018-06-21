<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <div v-if="isLogin">您好!</div>
    <div v-else>请登录!</div>
  </div>
</template>

<script>
  export default {
    name: "VIf",
    data() {
      return {
        isLogin: false
      }
    }
  }
</script>

<style scoped>

</style>
