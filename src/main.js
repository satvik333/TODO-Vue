import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Todo from './components/Todo.vue';
import Todolist from './components/TodoList.vue';
import TodoForm from './components/Todoform.vue'
import Vuerouter from 'vue-router';
import VueRouter from 'vue-router';
import Users from './components/Listofusers.vue';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false
Vue.use(Vuerouter);
Vue.use(Toasted);

const routes = [
  { path: '/todolist', component:Todolist },
  { path: '/todo', component: Todo },
  { path: '/todoform', component: TodoForm },
  {path:'/users',component:Users}
]

const router=new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
