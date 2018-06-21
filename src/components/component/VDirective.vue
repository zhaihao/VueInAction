<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    自定义指令
    <div v-my="color">{{num}}</div>
    <div>
      <button v-on:click="plus">+1</button>
    </div>
  </div>
</template>

<script>


  export default {
    name: "VDirective",
    data() {
      return {
        num: 0,
        color: 'red'
      }
    },
    methods: {
      plus: function () {
        this.num++
      }
    },
    directives: {
      my: {
        bind: function (el, binding) {
          console.log(el);
          console.log(binding);
          el.style = "color:" + binding.value
        }
      }
    }
  }
</script>

<style scoped>

</style>
