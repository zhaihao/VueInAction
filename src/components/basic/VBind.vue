<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <p><img v-bind:src="imgSrc" width="300px"/></p>
    <p><a :href="webUrl">百度</a></p>
    <div :class="className">
      <p>class</p>
    </div>

    <div :class="{classA:isOk}">
      <p>class2</p>
    </div>
    <label>
      <input type="checkbox" v-model="isOk"/>ok({{isOk}})
    </label>

    <div :class="[classA,classB]">
      <p>class3</p>
    </div>

    <div :class="isOk?classC:classA">
      <p>class4</p>
    </div>

    <div :style="{color:color,fontSize:size}">
      <p>class5</p>
    </div>

    <div :style="styleObj">
      <p>class6</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VBind",
    data() {
      return {
        imgSrc: 'https://www.baidu.com/img/bd_logo1.png?qua=high',
        webUrl: 'https://www.baidu.com',
        className: 'classA',
        isOk: true,
        classA: 'classA',
        classC: 'classC',
        classB: 'classB',
        color: 'red',
        size: '50px',
        styleObj: {
          color: 'green',
          fontSize: '40px'
        }
      }
    }
  }
</script>

<style scoped>
  .classA {
    color: red;
  }

  .classC {
    color: green;
  }

  .classB {
    font-size: x-large;
  }
</style>
