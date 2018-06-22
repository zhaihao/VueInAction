<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div id="app">
    <img src="./assets/logo.png" width="100px">
    <div class="nav1">
      <router-link to="/">HELLO</router-link>
      <router-link to="/project">PROJECT</router-link>
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', 'PingFangHK-Light', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .nav1{
    word-spacing: 14px;
  }
  a {
    color: #42b983;
    text-decoration-line: none;
  }
</style>
