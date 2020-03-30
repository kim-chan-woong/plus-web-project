import Vue from 'vue'
import VueRouter from 'vue-router'

// Components 분리
import login from '../components/SignIn/login'
import SignUp from "../components/SignIn/SignUp"
import clear from '../components/SignIn/clear'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: function () {
      return import('../views/Post.vue')
    }
  },
  {
    path: '/article/:contentId',
    name: 'Article',
    component: function () {
      return import('../views/Article.vue')
    }
  },
  {
    path: '/posting',
    name: 'Posting',
    component: function () {
      return import('../views/Posting.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
   path: '/signup',
   name: 'SignUp',
   component: SignUp
   },
  {
   path: '/clear',
   name: 'clear',
   component: clear
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
