/*
 * Copyright (c) 2018.
 * OOON.ME ALL RIGHTS RESERVED.
 * Licensed under the Mozilla Public License, version 2.0
 * Please visit http://ooon.me or mail to zhaihao@ooon.me
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Project from '@/components/Project'
import Toc from '@/components/basic/Toc'
import VIf from '@/components/basic/VIf'
import VShow from '@/components/basic/VShow'
import VFor from '@/components/basic/VFor'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: HelloWorld},
    {
      path: '/project', component: Project, children: [
        {
          path: '/project/basic', component: Toc, children: [
            {path: '/project/basic/v_if', component: VIf},
            {path: '/project/basic/v_show', component: VShow},
            {path: '/project/basic/v_for', component: VFor}
          ]
        }
      ]
    },


  ]
})
