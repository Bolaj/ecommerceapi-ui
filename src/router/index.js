import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddCategoryView from '../views/category/AddCategoryView.vue'
import AddProductView from '../views/product/AddProductView.vue'
import ViewCategory from '../views/category/ViewCategory.vue'
import ProductView from '../views/product/ProductView.vue'
import AdminHome from '../views/admin/AdminHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/admin/category/add',
    name:'AddCategory',
    component: AddCategoryView
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProductView
  },
  {
    path:'/admin/category',
    name:'Category',
    component: ViewCategory
  },
  {
    path:'/admin/product',
    name:'Product',
    component: ProductView
  },
  //admin home page
  {
    path:'/admin',
    name:'AdminHome',
    component:AdminHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
