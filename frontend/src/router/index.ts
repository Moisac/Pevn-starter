import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import SinglePost from '../views/SinglePost.vue'
import SingleUser from '../views/SingleUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
   component: Users
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: SinglePost,
    props: true
  },
  {
    path: '/users/:id',
    name: 'User',
    component: SingleUser,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
