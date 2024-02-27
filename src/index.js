/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import AddProductFormVue from './components/AddProductForm.vue'
//import { setupLayouts } from 'virtual:generated-layouts'
const routes = [
{path : "/AddPage",
name: AddPage,
component : AddProductFormVue}
] 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),routes
//  extendRoutes: setupLayouts,
})

export default router