import { createRouter, createWebHistory } from 'vue-router';


// Import komponen halaman
import HomePage from '../pages/HomePage.vue';
import BookList from '../pages/BookList.vue';
import AboutUs from '../pages/AboutUs.vue';
import ContactUs from '../pages/ContactUs.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import AdminDashboard from '../pages/admin/Dashboard.vue';

const routes = [
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true, adminOnly: true }
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideNavbar: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { hideNavbar: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
