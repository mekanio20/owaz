<template>
    <div class="w-full py-5">
        <div class="container">
            <div class="w-full flex items-center justify-start">
                <div class=" font-sf_pro text-xs text-m_red-100">+99365863633</div>
            </div>
            <div class="flex items-center justify-between">
                <router-link to="/" class="flex items-center sm:space-x-4 space-x-2">
                    <div class="md:w-[85px] w-14">
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
                            :placeholder="$t('routes.title5')" required />
                    </div>
                </form>
                <div class="md:flex items-center space-x-6 hidden">
                    <div class="cursor-pointer relative">
                        <svg @click="openLang" width="28" height="28" viewBox="0 0 35 35" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.4987 33.5423C26.3581 33.5423 33.5404 26.36 33.5404 17.5007C33.5404 8.64128 26.3581 1.45898 17.4987 1.45898M17.4987 33.5423C8.63932 33.5423 1.45703 26.36 1.45703 17.5007C1.45703 8.64128 8.63932 1.45898 17.4987 1.45898M17.4987 33.5423C21.8737 33.5423 23.332 26.2507 23.332 17.5007C23.332 8.75065 21.8737 1.45898 17.4987 1.45898M17.4987 33.5423C13.1237 33.5423 11.6654 26.2507 11.6654 17.5007C11.6654 8.75065 13.1237 1.45898 17.4987 1.45898M2.91536 23.334H32.082M2.91536 11.6673H32.082"
                                stroke="black" stroke-width="2.4" />
                        </svg>
                        <div v-show="isLang" class="absolute top-10 z-50 -left-3 bg-gray-200 py-2">
                            <div class="font-sf_pro font-medium py-2 px-4 text-base uppercase duration-300"
                                v-for="item in langs" :key="item" @click="updateLang(item)"
                                :class="[this.$i18n.locale == item ? 'text-m_red-200' : 'text-black']">
                                {{ item }}
                            </div>
                        </div>
                    </div>
                    <router-link to="/contacts"
                        class="cursor-pointer px-8 py-2 xl:text-lg text-base text-nowrap font-sf_pro font-semibold bg-m_red-100 rounded-3xl hover:bg-m_red-200 duration-300 text-white">
                        {{ $t('routes.title3') }}
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
            <div class="w-full flex items-center relative select-none">
                <svg v-if="!isAtStart" @click="scrollLeft" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 sm:top-[39px] top-[38px] h-6 w-6 bg-white text-gray-500 cursor-pointer"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6" />
                </svg>
                <div ref="scrollContainer" class="flex items-center pt-10 space-x-8 overflow-x-auto scrollbar-hide">
                    <router-link to="/news"
                        class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                        {{ $t('routes.title4') }}
                    </router-link>
                    <router-link to="/contacts"
                        class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                        {{ $t('routes.title3') }}
                    </router-link>
                    <router-link to="/brands"
                        class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black">
                        {{ $t('routes.title2') }}
                    </router-link>
                    <router-link v-for="item in categories" :key="item.id" :to="`/subcategories/${item.id}`"
                        class="font-sf_pro font-medium uppercase md:text-base text-sm text-nowrap text-black flex items-center">
                        {{ getLocalizedName(item) }}
                    </router-link>
                </div>
                <svg v-if="!isAtEnd" @click="scrollRight" xmlns="http://www.w3.org/2000/svg"
                    class="absolute right-0 sm:top-[39px] top-[38px] h-6 w-6 bg-white text-gray-500 cursor-pointer" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18l6-6-6-6" />
                </svg>
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
                        :placeholder="$t('routes.title5')" required />
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
            categories: null,
            isLang: false,
            isAtStart: true,
            isAtEnd: false,
            langs: ['tm', 'ru', 'en']
        };
    },
    created() {
        this.allCategories()
    },
    methods: {
        openLang() {
            this.isLang = !this.isLang
        },
        openBurger() {
            this.isBurger = !this.isBurger
        },
        performSearch() {
            this.$router.push({ path: '/search', query: { q: this.searchQuery } });
        },
        updateLang(lang) {
            localStorage.setItem('lang', lang)
            this.locale = lang
            this.isLang = !this.isLang
            this.$i18n.locale = lang
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item.name_tm;
            if (locale === 'ru') return item.name_ru;
            if (locale === 'en') return item.name_en;
            return item.name_ru;
        },
        scrollRight() {
            const container = this.$refs.scrollContainer;
            container.scrollBy({
                left: 300,
                behavior: 'smooth'
            })
            this.checkScroll()
        },
        scrollLeft() {
            const container = this.$refs.scrollContainer;
            container.scrollBy({
                left: -300,
                behavior: 'smooth'
            })
            this.checkScroll()
        },
        checkScroll() {
            const container = this.$refs.scrollContainer;
            this.isAtStart = container.scrollLeft === 0;
            this.isAtEnd = container.scrollWidth - container.clientWidth === container.scrollLeft;
        }
    }
}
</script>