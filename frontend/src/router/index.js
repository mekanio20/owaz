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
      path: "/login",
      name: "Login",
      component: () => import("@/views/admin/LoginView.vue"),
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
      path: "/admin/subcategories",
      name: "Subcategories",
      component: () => import("@/views/admin/SubcategoriesView.vue"),
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
    {
      path: "/admin/contacts",
      name: "AdminContacts",
      component: () => import("@/views/admin/ContactsView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/explore",
      name: "Explore",
      component: () => import("@/views/admin/ExploreView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/news",
      name: "AdminNews",
      component: () => import("@/views/admin/AdminNews.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/admin/news/detail/:id",
      name: "AdminNewsDetail",
      component: () => import("@/views/admin/AdminNewsDetail.vue"),
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
      path: "/search",
      name: "Search",
      component: () => import("@/views/client/SearchView.vue"),
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
      path: "/news",
      name: "News",
      component: () => import("@/views/client/NewsView.vue"),
    },
    {
      path: "/news/detail/:id",
      name: "NewsDetail",
      component: () => import("@/views/client/NewsDetailView.vue"),
    },
    {
      path: "/subcategories/:id",
      name: "ClientSubcategories",
      component: () => import("@/views/client/SubcategoriesView.vue"),
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
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;