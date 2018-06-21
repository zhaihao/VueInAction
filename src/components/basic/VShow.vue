<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <div v-show="flag">显示了</div>

    <br>
    <div>v-show 是通过 css 控制元素是否显示，元素一定是加载的，v-if 可以控制元素是否加载</div>
  </div>
</template>

<script>
  export default {
    name: "VShow",
    data() {
      return {
        flag: true
      }
    }
  }
</script>

<style scoped>

</style>
