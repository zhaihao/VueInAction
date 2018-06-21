<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <p>本场得分：{{score}}</p>
    <button v-on:click="plus1">+1</button>
    <button @click="sub1">-1</button>
    <br>
    <input type="text" v-on:keyup.enter="onEnter" v-model="s"/>
  </div>
</template>

<script>
  export default {
    name: "VOn",
    data() {
      return {
        score: 0,
        s: "1"
      }
    },
    methods: {
      plus1: function () {
        this.score++
      },
      sub1: function () {
        if (this.score === 0) this.score = 0;
        else this.score--
      },
      onEnter: function () {
        this.score = this.score + parseInt(this.s)
      }
    }
  }
</script>

<style scoped>

</style>
