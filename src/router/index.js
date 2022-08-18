import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddCategoryView from '../views/category/AddCategoryView.vue'
import EditCategory from '../views/category/EditCategory.vue'
import AddProductView from '../views/product/AddProductView.vue'
import ViewCategory from '../views/category/ViewCategory.vue'
import ProductView from '../views/product/ProductView.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import SignIn from '../views/SignIn.vue'

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
    path:'/admin/category/update/:id',
    name:'EditCategory',
    component:EditCategory

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
  },
  {
    path:'/signin',
    name:'SignIn',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
