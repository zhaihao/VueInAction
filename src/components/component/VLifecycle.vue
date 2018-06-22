<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <p>{{num}}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
  export default {
    name: "VLifecycle",
    data: () => {
      return {
        num: 0
      }
    },
    methods: {
      add: function () {
        this.num++
      }
    },
    beforeCreate: function () {
      console.log("beforeCreate...");
    },
    created: function () {
      console.log("created...")
    },
    beforeMount: function () {
      console.log("beforeMount...")
    },
    mounted: function () {
      console.log("mounted...")
    },
    beforeUpdate: function () {
      console.log("beforeUpdate...")
    },
    updated: function () {
      console.log("updated...")
    },
    activated: function () {
      console.log("activated...")
    },
    deactivated: function () {
      console.log("deactivated...")
    },
    beforeDestroy:function () {
      console.log("beforeDestroy...")
    },
    destroyed:function () {
      console.log("destroyed...")
    }
  }
</script>

<style scoped>

</style>
