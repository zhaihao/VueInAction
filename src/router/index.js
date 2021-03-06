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
import Toc1 from '@/components/basic/Toc1'
import VIf from '@/components/basic/VIf'
import VShow from '@/components/basic/VShow'
import VFor from '@/components/basic/VFor'
import VText from '@/components/basic/VText'
import VHtml from '@/components/basic/VHtml'
import VOn from '@/components/basic/VOn'
import VModel from '@/components/basic/VModel'
import VBind from '@/components/basic/VBind'
import VPre from '@/components/basic/VPre'
import VCloak from '@/components/basic/VCloak'
import VOnce from '@/components/basic/VOnce'

import Toc2 from '@/components/component/Toc2'
import VDirective from '@/components/component/VDirective'
import VLifecycle from '@/components/component/VLifecycle'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: HelloWorld},
    {
      path: '/project', component: Project, children: [
        {
          path: '/project/basic', component: Toc1, children: [
            {path: '/project/basic/v_if', component: VIf},
            {path: '/project/basic/v_show', component: VShow},
            {path: '/project/basic/v_for', component: VFor},
            {path: '/project/basic/v_text', component: VText},
            {path: '/project/basic/v_html', component: VHtml},
            {path: '/project/basic/v_on', component: VOn},
            {path: '/project/basic/v_model', component: VModel},
            {path: '/project/basic/v_bind', component: VBind},
            {path: '/project/basic/v_pre', component: VPre},
            {path: '/project/basic/v_cloak', component: VCloak},
            {path: '/project/basic/v_once', component: VOnce}
          ]
        },
        {
          path: '/project/component', component: Toc2, children: [
            {path: '/project/component/v_directive', component: VDirective},
            {path: '/project/component/v_lifecycle', component: VLifecycle}
          ]
        }
      ]
    }
  ]
})
