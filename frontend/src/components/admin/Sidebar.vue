<template>
    <div>
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            @click="toogleSidebar">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>

        <aside id="logo-sidebar"
            class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
                <a class="flex items-center sm:justify-start justify-between ps-2.5 mb-5">
                    <img src="/icons/logo.png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-black sm:block hidden">Admin
                        Panel</span>
                    <button type="button" @click="hideSidebar"
                        class="text-xl font-semibold whitespace-nowrap dark:text-white sm:hidden block">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </button>
                </a>
                <ul class="space-y-2 font-medium">
                    <li>
                        <router-link to="/admin/brands"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'brands' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Brands</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/banners"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'banners' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Banners</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/categories"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'categories' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Categories</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/subcategories"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'subcategories' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Subcategories</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/products"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'products' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                    d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/contacts"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'contacts' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Contacts</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/explore"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'explore' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Explore</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/admin/news"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
                            :class="[link === 'news' ? 'bg-gray-200' : '']">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">News</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    methods: {
        hideSidebar() {
            const sidebar = document.getElementById('logo-sidebar');
            if (sidebar) {
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
            }
        },
        toogleSidebar() {
            const sidebar = document.getElementById('logo-sidebar');
            if (sidebar) {
                sidebar.classList.toggle('-translate-x-full');
                sidebar.classList.toggle('translate-x-0');
            }
        }
    },
    props: {
        link: {
            type: String
        }
    }
}
</script>