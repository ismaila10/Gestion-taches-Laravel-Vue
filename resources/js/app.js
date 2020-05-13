/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

// importation du packet pagination
Vue.use(VueRouter);
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('add-task', require('./components/AddTaskComponent.vue').default);
Vue.component('edit-task', require('./components/EditTaskComponent.vue').default);


import Home from './components/HomeComponent.vue';
import Task from './components/TaskComponent.vue';
import Event from './components/EventComponent.vue';


const routes = [
  { path: '/home', component: Home },
  { path: '/tasks', component: Task },
  { path: '/events', component: Event }
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router:router
});
