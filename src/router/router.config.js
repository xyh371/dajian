import app from '../index.js'
import dynamic from 'dva/dynamic'
// import { Spin } from 'antd';
import Main from '../views/main/index'

const GroupMenu = {
  USER_MANAGEMENU: {
    groupName: '用户管理',
    groupIcon: 'user',
    groupId: 'USER_MANAGEMENU'
  },
  QUESTIONS_MANAGEMENU: {
    groupName: '试题管理',
    groupIcon: 'user',
    groupId: 'QUESTIONS_MANAGEMENU'
  },
  CHART_MANAGEMENU: {
    groupName: '权限管理',
    groupIcon: 'user',
    groupId: 'CHART_MANAGEMENU'
  }
}

const Loadable = (component, models = []) => {
  return dynamic({
    app,
    models: () => models.map(name => import(`../models/${name}`).js),
    component: component
  })
}

const router = [
  {
    path: '/home',
    redirect: '/main/home'
  }, {
    path: '/login',
    component: Loadable(()=> import('../views/login'))
  }, {
    path: '/main',
    component: Main,
    children: [
      {
        path: '/main/home',
        component: Loadable(() => import('../views/home')),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/main/addUser',
        component: Loadable(() => import('../views/setting')),
        meta: {
          title: '添加试题',
          groupId: GroupMenu.USER_MANAGEMENU.groupId
        },
        children: [{
          path: '/main/addUser/setting',
          component: Loadable(() => import('../views/setting/details'))
        }]
      },
      {
        path: '/main/list',
        component: Loadable(() => import('../views/list')),
        meta: {
          title: '试题分类',
          groupId: GroupMenu.USER_MANAGEMENU.groupId
        }
      },
      {
        path: '/main/See',
        component: Loadable(() => import('../views/See')),
        meta: {
          title: '查看试题',
          groupId: GroupMenu.QUESTIONS_MANAGEMENU.groupId
        }
      },
      {
        path: '/main/questions',
        component: Loadable(() => import('../views/statistics')),
        meta: {
          title: '试题管理',
          groupId: GroupMenu.CHART_MANAGEMENU.groupId
        }
      }
    ]
  }
]

const getChildMenu = (groupId, routes) => {
  const subMenu = []
  routes.forEach((item, index) => {
    if (item.meta.groupId === groupId) {
      subMenu.push(item)
    }
  })
  return subMenu
}

export const getRoutes = () => {
  return router[2].children
}

export const getMenu = () => {
  const menu = []
  for (let key in GroupMenu) {
    const item = GroupMenu[key]
    const subMenu = getChildMenu(item.groupId, router[2].children)
    if (subMenu.length >= 1) {
      item.subMenu = subMenu
    }
    menu.push(item)
  }
  return menu
}


export default router
