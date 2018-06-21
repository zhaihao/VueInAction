<!--
  - Copyright (c) 2018.
  - OOON.ME ALL RIGHTS RESERVED.
  - Licensed under the Mozilla Public License, version 2.0
  - Please visit http://ooon.me or mail to zhaihao@ooon.me
  -->

<template>
  <div>
    <p><b v-for="item in sortItems">{{ item }} </b></p>

    <div>
      <p v-for="s in sortStudent">{{s.name}} - {{s.age}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "VFor",
    data() {
      return {
        items: [53, 23, 7, 14, 54, 36, 28],
        students: [
          {name: "Lucy", age: 10},
          {name: "Tom", age: 12},
          {name: "Lily", age: 11}
        ]
      }
    },
    computed: {
      sortItems: function () {
        return this.items.sort(sortNum)
      },
      sortStudent: function () {
        return sortByKey(this.students, 'age')

      }
    }
  }

  function sortNum(a, b) {
    return a - b
  }

  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      let x = a[key];
      let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
  }
</script>

<style scoped>

</style>
