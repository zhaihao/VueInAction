<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <p>{{}} 这种方式在异常情况下，会把表达式显示出来，v-text 可以解决这个问题</p>
    <br>

    {{a}} = <span v-text="a"></span>

  </div>
</template>

<script>
  export default {
    name: "VText",
    data() {
      return {
        a: 1
      }
    }
  }
</script>

<style scoped>

</style>
