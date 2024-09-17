// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ADMIN
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/admin/testview.vue"),
    },
    {
      path: "/admin/brands",
      name: "Brands",
      component: () => import("@/views/admin/BrandsView.vue"),
    },
    {
      path: "/admin/banners",
      name: "Banners",
      component: () => import("@/views/admin/BannersView.vue"),
    },
    {
      path: "/admin/categories",
      name: "Categories",
      component: () => import("@/views/admin/CategoriesView.vue"),
    },
    {
      path: "/admin/products",
      name: "Products",
      component: () => import("@/views/admin/ProductsView.vue"),
    },
    {
      path: "/admin/product/:id",
      name: "ProductDetail",
      component: () => import("@/views/admin/ProductDetailView.vue"),
    },
    // CLIENT
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/client/HomeView.vue"),
    },
  ],
});

export default router;