import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddCategoryView from '../views/category/AddCategoryView.vue'
import ViewCategory from '../views/category/ViewCategory.vue'

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
    path:'/admin/category',
    name:'Category',
    component: ViewCategory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
