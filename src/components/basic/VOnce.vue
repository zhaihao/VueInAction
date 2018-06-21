<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <p v-once>{{msg}}</p>
    <p>{{msg}}</p>
    <input type="text" v-model="msg"/>
  </div>
</template>

<script>
  export default {
    name: "VOnce",
    data() {
      return {
        msg: "hello"
      }
    }
  }
</script>

<style scoped>

</style>
