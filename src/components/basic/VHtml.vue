<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    {{todo}}
    <span v-html="todo"></span>
  </div>
</template>

<script>
  export default {
    name: "VHtml",
    data() {
      return {
        todo: '<h2>hello</h2>'
      }
    }
  }
</script>

<style scoped>
</style>
