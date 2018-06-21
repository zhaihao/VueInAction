<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <h2>输入框</h2>
    <p>{{msg}}</p>
    <label>model: <input type="text" v-model="msg"/></label>
    <br>
    <label>lazy: <input type="text" v-model.lazy="msg"/></label>
    <br>
    <p>{{num}}</p>
    <label>number: <input type="text" v-model.number="num"/></label>
    <br>
    <p>{{msg1}}</p>
    <label>trim: <input type="text" v-model.trim="msg1"/></label>
    <p>lazy 当forces 改变时生效，number：只允许输入数字, trim 去空格</p>

    <br>
    <h2>文本框</h2>
    <p>{{msg2}}</p>
    <p><textarea v-model="msg2"></textarea></p>

    <br>
    <h2>单选</h2>
    <p><input type="checkbox" id="agree" v-model="agree"/><label for="agree">是否同意</label>({{agree}})</p>

    <br>
    <h2>多选</h2>
    <p>{{fav}}</p>
    <p>
      <input type="checkbox" id="fav1" v-model="fav" value="足球"/><label for="fav1">足球</label>
      <input type="checkbox" id="fav2" v-model="fav" value="篮球"/><label for="fav2">篮球</label>
      <input type="checkbox" id="fav3" v-model="fav" value="乒乓球"/><label for="fav3">乒乓球</label>
      <input type="checkbox" id="fav4" v-model="fav" value="羽毛球"/><label for="fav4">羽毛球</label>
    </p>

    <br>
    <h2>选项</h2>
    <p>{{sex}}</p>
    <input type="radio" id="sex1" value="男" v-model="sex"/><label for="sex1">男</label>
    <input type="radio" id="sex2" value="女" v-model="sex"/><label for="sex2">女</label>
  </div>
</template>

<script>
  export default {
    name: "VModel",
    data() {
      return {
        msg: "hello",
        num: 0,
        msg1: "msg1",
        msg2: "msg2",
        agree: true,
        fav: [],
        sex: '男'
      }
    }
  }
</script>

<style scoped>

</style>
