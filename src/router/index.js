import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'
import contact from '@/components/contact'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [  

     {
      path: '*',
      redirect: '/login' 
    },

     {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/page2',
      name: 'page2',
      component: page2,
      meta: {
        requiresAuth: true
      } 
    },

    {
      path: '/page1',
      name: 'page1',
      component: page1,
      meta: {
        requiresAuth: true
      } 
    },

    {
      path: '/page3',
      name: 'page3',
      component: page3,
      meta: {
        requiresAuth: true
      } 
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        requiresAuth: true
      } 
    },

     {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },

     {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth =  to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')  
  else next()
})

export default router
