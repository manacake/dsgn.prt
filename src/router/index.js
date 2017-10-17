import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import projects from '@/components/projects'
import process from '@/components/process'
import about from '@/components/about'
import contact from '@/components/contact'
import notFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/projects',
      name: 'projects',
      component: projects
    },

    {
      path: '/process',
      name: 'process',
      component: process
    },

    {
      path: '/about',
      name: 'about',
      component: about
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
    },

    {
      path: '/error',
      name: 'notFound',
      component: notFound
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
