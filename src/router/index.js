import { createWebHashHistory, createRouter } from 'vue-router'
import Categories from '../views/categories/index.vue'
import Category from '../views/categories/show.vue'

const routes = [
  {
    path: '/',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/:categoryId',
    name: 'Category',
    component: Category,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
