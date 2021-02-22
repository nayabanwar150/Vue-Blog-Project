import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Routes from './routes'
import Users from '../src/components/Users.vue'
import UserPosts from '../src/components/UserPosts.vue'
import PostDetails from '../src/components/PostDetails'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Users},
  {path: '/user', component: Users},
  {path: '/user-posts/:userid', component: UserPosts},
  {path: '/post-details/:userid&:postid', component: PostDetails}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false
Vue.directive('status',{
  bind(el){
    const statsColor = ['green', 'red'];
    let randomStats = Math.floor(Math.random()*statsColor.length);
    el.style.background = statsColor[randomStats];
  }
})

Vue.filter('toTitleCase',
  (str) => ( str.replace(str.charAt(0),str.charAt(0).toUpperCase()))
)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
