import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News"
import Message from "../views/Message"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children:[
        {
          path:"news",
          name:"news",
          component:News
        },
        {
          path:"message",
          name:"message",
          component:Message
        }
    ]
  }
]

export default new VueRouter({
  routes
})

 
