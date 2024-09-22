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
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/brands",
      name: "AdminBrands",
      component: () => import("@/views/admin/BrandsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/banners",
      name: "Banners",
      component: () => import("@/views/admin/BannersView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/categories",
      name: "Categories",
      component: () => import("@/views/admin/CategoriesView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/products",
      name: "AdminProducts",
      component: () => import("@/views/admin/ProductsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/product/detail/:id",
      name: "AdminProductDetail",
      component: () => import("@/views/admin/ProductDetailView.vue"),
      meta: { requiresAuth: true },
    },
    // CLIENT
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/client/HomeView.vue"),
    },
    {
      path: "/products/:id",
      name: "Products",
      component: () => import("@/views/client/ProductsView.vue"),
    },
    {
      path: "/product/detail/:id",
      name: "ProductDetail",
      component: () => import("@/views/client/ProductDetailView.vue"),
    },
    {
      path: "/brands",
      name: "Brands",
      component: () => import("@/views/client/BrandsView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/client/AboutView.vue"),
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: () => import("@/views/client/ContactView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth'); // Kullanıcı giriş yapmış mı kontrol ediyoruz

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Eğer giriş yapılmamışsa login sayfasına yönlendir
    next({
      path: '/login',
      query: { redirect: to.fullPath }, // Hedef rotayı saklayarak yönlendirme yap
    });
  } else {
    next(); // Aksi takdirde yönlendirmeye izin ver
  }
});

export default router;