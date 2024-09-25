<template>
    <div class="w-full py-5">
        <div class="container">
            <div class="flex items-center justify-between">
                <router-link to="/" class="flex items-center sm:space-x-4 space-x-2">
                    <div class="md:w-14 w-10">
                        <img class="w-full h-full object-cover" src="/icons/logo.png">
                    </div>
                    <h1 class="font-poppins font-semibold md:text-xl sm:text-lg text-base text-m_red-100 text-nowrap">
                        Owaz
                        Store</h1>
                </router-link>
                <form @submit.prevent="performSearch" class="flex-1 mx-20 md:block hidden">
                    <div class="relative">
                        <div class="absolute inset-y-0 end-0 flex items-center ps-3 pr-10 pointer-events-none">
                            <svg class="md:w-5 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" v-model="searchQuery" @keydown.enter="performSearch"
                            class="block w-full p-4 pr-16 md:text-sm text-xs text-gray-900 border-none rounded-xl placeholder:text-m_gray-200 bg-m_gray-100 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search..." required />
                    </div>
                </form>
                <div class="md:flex items-center space-x-6 hidden">
                    <svg class="md:w-[24px] w-[20px]" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_59)">
                            <path
                                d="M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1M12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1M12 23C15 23 16 18 16 12C16 6 15 1 12 1M12 23C9 23 8 18 8 12C8 6 9 1 12 1M2 16H22M2 8H22"
                                stroke="black" stroke-width="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_59">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <router-link to="/contacts"
                        class="cursor-pointer px-8 py-2 xl:text-lg text-base text-nowrap font-sf_pro font-semibold bg-m_red-100 rounded-3xl hover:bg-m_red-200 duration-300 text-white">
                        Contact us
                    </router-link>
                </div>
                <div class="flex items-center space-x-6">
                    <svg class="w-[22px] md:hidden block cursor-pointer" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_8_59)">
                            <path
                                d="M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1M12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1M12 23C15 23 16 18 16 12C16 6 15 1 12 1M12 23C9 23 8 18 8 12C8 6 9 1 12 1M2 16H22M2 8H22"
                                stroke="black" stroke-width="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_59">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div @click="openBurger" class="cursor-pointer md:hidden">
                        <div class="w-10 flex flex-col justify-between space-y-2">
                            <div class="h-0.5 w-6 bg-m_red-100 duration-500"></div>
                            <div class="w-3 h-0.5 bg-m_red-100 duration-500"></div>
                            <div class="h-0.5 w-4 bg-m_red-100 duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center pt-10 space-x-8 overflow-x-auto scrollbar-hide">
                <router-link to="/about"
                    class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                    About us
                </router-link>
                <router-link to="/contacts"
                    class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                    Contact us
                </router-link>
                <router-link to="/brands"
                    class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                    Brands
                </router-link>
                <router-link v-for="item in categories" :key="item.id" :to="`/products/${item.id}`"
                    class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                    {{ item.name_en }}
                </router-link>
            </div>
        </div>
        <!-- Mobile navbar -->
        <div class="select-none w-full fixed z-20 top-0 overflow-hidden duration-200 bg-m_red-200"
            :class="[isBurger ? 'h-fit' : 'h-0']">
            <div @click="openBurger" class=" my-4 float-right cursor-pointer md:hidden">
                <div class="w-10 flex flex-col justify-between space-y-2">
                    <div class="h-0.5 w-6 transform translate-y-[10px] -rotate-45 bg-white"
                        :class="[isBurger ? '' : 'w-6']"></div>
                    <div class="w-3 h-0.5 bg-white" :class="[isBurger ? 'opacity-0' : '']"></div>
                    <div class="h-0.5 w-6 transform translate-y-[-10px] rotate-45 bg-white"></div>
                </div>
            </div>
            <div class="w-full bg-m_red-200 pb-5 px-4">
                <form @submit.prevent="performSearch">
                    <input type="text" v-model="searchQuery"
                        class="block w-full p-4 pr-16 md:text-sm text-xs text-gray-900 border-none rounded-xl placeholder:text-m_gray-200 bg-m_gray-100 focus:ring-red-500 focus:border-red-500"
                        placeholder="Search..." required />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
export default {
    name: "Navbar",
    data() {
        return {
            isBurger: false,
            searchQuery: null,
            categories: null
        };
    },
    created() {
        this.allCategories()
    },
    methods: {
        openBurger() {
            this.isBurger = !this.isBurger
        },
        performSearch() {
            this.$router.push({ path: '/search', query: { q: this.searchQuery } });
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        }
    }
}
</script>