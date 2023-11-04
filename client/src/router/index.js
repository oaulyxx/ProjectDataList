import Vue from 'vue'
import Router from 'vue-router'

// Index
import Index from '@/components/Iron/Index'

// height130up
import height130upIndex from '@/components/Iron/Index/IndexHeight130up'
import height130upCreate from '@/components/Iron/Create/CreateHeight130up'
import height130upEdit from '@/components/Iron/Edit/EditHeight130up'
import height130upShow from '@/components/Iron/Show/ShowHeight130up'

// height110up
import height110upIndex from '@/components/Iron/Index/IndexHeight110up'
import height110upCreate from '@/components/Iron/Create/CreateHeight110up'
import height110upEdit from '@/components/Iron/Edit/EditHeight110up'
import height110upShow from '@/components/Iron/Show/ShowHeight110up'

// height90up
import height90upIndex from '@/components/Iron/Index/IndexHeight90up'
import height90upCreate from '@/components/Iron/Create/CreateHeight90up'
import height90upEdit from '@/components/Iron/Edit/EditHeight90up'
import height90upShow from '@/components/Iron/Show/ShowHeight90up'

// height155up
import height155upIndex from '@/components/Iron/Index/IndexHeight155up'
import height155upCreate from '@/components/Iron/Create/CreateHeight155up'
import height155upEdit from '@/components/Iron/Edit/EditHeight155up'
import height155upShow from '@/components/Iron/Show/ShowHeight155up'

Vue.use(Router)

export default new Router({
  routes: [
    // Index
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    
    // height130up
    {
      path: '/height130ups',
      name: 'height130ups',
      component: height130upIndex
    },
    {
      path: '/height130up/create',
      name: 'height130up-create',
      component: height130upCreate
    },
    {
      path: '/height130up/edit/:height130upId',
      name: 'height130up-edit',
      component: height130upEdit
    },
    {
      path: '/height130up/:height130upId',
      name: 'height130up',
      component: height130upShow
    },

    // Height110up
    {
      path: '/height110ups',
      name: 'height110ups',
      component: height110upIndex
    },
    {
      path: '/height110up/create',
      name: 'height110up-create',
      component: height110upCreate
    },
    {
      path: '/height110up/edit/:height110upId',
      name: 'height110up-edit',
      component: height110upEdit
    },
    {
      path: '/height110up/:height110upId',
      name: 'height110up',
      component: height110upShow
    },

    // Height90up
    {
      path: '/height90ups',
      name: 'height90ups',
      component: height90upIndex
    },
    {
      path: '/height90up/create',
      name: 'height90up-create',
      component: height90upCreate
    },
    {
      path: '/height90up/edit/:height90upId',
      name: 'height90up-edit',
      component: height90upEdit
    },
    {
      path: '/height90up/:height90upId',
      name: 'height90up',
      component: height90upShow
    },

    // height155up
    {
      path: '/height155ups',
      name: 'height155ups',
      component: height155upIndex
    },
    {
      path: '/height155up/create',
      name: 'height155up-create',
      component: height155upCreate
    },
    {
      path: '/height155up/edit/:height155upId',
      name: 'height155up-edit',
      component: height155upEdit
    },
    {
      path: '/height155up/:height155upId',
      name: 'height155up',
      component: height155upShow
    },

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})
