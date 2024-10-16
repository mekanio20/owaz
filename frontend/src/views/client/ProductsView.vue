<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/" class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">{{
                    $t('routes.title1') }}</router-link>
                <span class="md:text-xl sm:text-lg text-base text-m_gray-200">></span>
                <router-link :to="`/products/${this.$route.params.id}`"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">{{ this.name
                    }}</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">
                {{ this.name }}
            </div>
            <div class="font-sf_pro font-medium md:text-lg sm:text-base text-sm text-m_gray-200">
                {{ this.count }} {{ $t('routes.title6') }}
            </div>
            <div class="my-3 font-sf_pro font-medium md:text-xl sm:text-lg text-base">
                {{ desc }}
            </div>
            <div class="w-full flex items-center space-x-4">
                <swiper :slides-per-view="1" :spaceBetween="30" :modules="modules"
                    :autoplay="{ delay: 2000, disableOnInteraction: false, }" :speed="1000">
                    <swiper-slide class="w-full lg:!h-[400px] my-5" v-for="item in banners" :key="item.id">
                        <img crossorigin="anonymous" class="w-full h-full object-cover rounded-xl"
                            :src="`${$uploadUrl}/${item.img}`">
                    </swiper-slide>
                </swiper>
            </div>
            <button @click="toggleSidebar" class="sm:hidden m-2 p-4 bg-blue-500 text-white rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.553.894l-6 3A1 1 0 017 22v-9.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
            </button>
            <div class="flex items-start">
                <div class="mr-5">

                    <div class="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden" v-if="isSidebarOpen"
                        @click="toggleSidebar"></div>

                    <div class="fixed inset-y-0 left-0 w-64 bg-white p-4 shadow-lg z-30 transform sm:static sm:w-64 transition-transform"
                        :class="{ '-translate-x-full': !isSidebarOpen, 'translate-x-0': isSidebarOpen }">

                        <div class="flex items-center justify-between mb-4">
                            <span class="font-bold text-lg">Filter</span>
                            <button @click="toggleSidebar" class="sm:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div class="mb-6">
                            <span class="font-semibold text-sm mb-2 block">Subcategory</span>
                            <div class="max-h-40 overflow-y-auto space-y-2">
                                <div v-for="(item, index) in subcategories" :key="index" class="flex items-center">
                                    <input type="radio" :id="'subcategory-' + index" :value="item.id"
                                        v-model="selectedSubcategory" class="mr-2" />
                                    <label for="subcategory" class="text-sm">{{ getLocalizedName(item) }}</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-6">
                            <span class="font-semibold text-sm mb-2 block">Brand</span>
                            <div class="max-h-40 overflow-y-auto space-y-2">
                                <div v-for="(item, index) in brands" :key="index" class="flex items-center">
                                    <input type="radio" :id="'brand-' + index" :value="item.id"
                                        v-model="selectedBrand" class="mr-2" />
                                    <label :for="'brand-' + index" class="text-sm">{{ item.title }}</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-4">
                            <span class="font-semibold text-sm mb-2 block">Sorted</span>
                            <select id="sort" v-model="sortOrder"
                                class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="new_products">New products</option>
                                <option value="old_products">Old products</option>
                                <option value="price_asc">Price: low to high</option>
                                <option value="price_desc">Price: high to low</option>
                            </select>
                        </div>

                        <div class="mb-4 flex justify-end">
                            <button @click="applyFilter" class="bg-blue-600 text-white rounded-lg mt-2 px-4 p-2">Apply</button>
                        </div>

                    </div>
                </div>
                <div class="w-full my-10 grid lg:grid-cols-3 md:grid-cols-2 min-[400px]:grid-cols-2 grid-cols-1 gap-10">
                    <router-link v-for="item in products?.rows" :key="item.id" :to="`/product/detail/${item.id}`"
                        class="flex items-start flex-col space-y-4">
                        <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                            <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                                :src="`${$uploadUrl}/${item.product_images[0].img}`">
                        </div>
                        <p class="font-sf_pro font-medium md:text-xl text-lg">{{ item.name_en }}</p>
                        <div class="flex items-center space-x-2">
                            <span class="font-sf_pro font-bold md:text-base text-sm text-m_red-200">{{ item.final_price
                                }}
                                tmt</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Navbar from '@/components/client/Navbar.vue';
import Footer from '@/components/client/Footer.vue';
import api from '@/api/index'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
export default {
    name: "Products",
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            count: 0,
            name: null,
            desc: null,
            products: null,
            banners: null,
            openDropdown: null,
            brandValue: null,
            selectedCategory: null,
            subcategories: null,
            brands: null,
            sortOrder: null,
            isSidebarOpen: true,
            selectedBrand: null,
            selectedSubcategory: null,
            modules: [Pagination, Navigation, Autoplay],
        }
    },
    created() {
        this.allProducts()
        this.subcategoryBanners()
        this.allBrands()
        this.allSubcategories()
    },
    methods: {
        toggleShowMore() {
            this.showMore = !this.showMore;
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        async applyFilter() {
            const params = {};

            if (this.selectedBrand) {
                params.brandId = this.selectedBrand;
            }

            if (this.selectedSubcategory) {
                params.subcategoryId = this.selectedSubcategory;
            }

            if (this.sortOrder === 'new_products') {
                params.sort = 'id'
                params.order = 'desc'
            }

            if (this.sortOrder === 'old_products') {
                params.sort = 'id'
                params.order = 'asc'
            }

            if (this.sortOrder === 'price_asc') {
                params.sort = 'final_price'
                params.order = 'asc'
            }

            if (this.sortOrder === 'price_desc') {
                params.sort = 'final_price'
                params.order = 'desc'
            }

            params.limit = 10000
            const data = await api.get('/products', { params })
            this.products = data.data.detail
            this.count = this.products.count
        },
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail.rows
        },
        async allSubcategories() {
            const data = await api.get('/subcategories')
            this.subcategories = data.data.detail.rows
        },
        async subcategoryBanners() {
            const data = await api.get('/banners?types=subcategory')
            this.banners = data.data.detail.rows
        },
        async allProducts() {
            const locale = this.$i18n.locale.toLowerCase();
            const data = await api.get(`/products?subcategoryId=${this.$route.params.id}&limit=1000`)
            const category = await api.get(`/subcategories?subId=${this.$route.params.id}`)
            if (locale === 'tm') this.name = category.data.detail.rows[0].name_tm
            if (locale === 'ru') this.name = category.data.detail.rows[0].name_ru
            if (locale === 'en') this.name = category.data.detail.rows[0].name_en
            if (locale === 'tm') this.desc = category.data.detail.rows[0].desc_tm
            if (locale === 'ru') this.desc = category.data.detail.rows[0].desc_ru
            if (locale === 'en') this.desc = category.data.detail.rows[0].desc_en
            this.products = data.data.detail
            this.count = this.products.count
        },
        toggleDropdown(type) {
            this.openDropdown = this.openDropdown === type ? null : type;
        },
        selectOption(type, value) {
            if (type === "brand") {
                this.brandValue = value.title;
            }
            if (type === "category") {
                this.selectedCategory = value;
            }
            this.openDropdown = null
        },
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item.name_tm;
            if (locale === 'ru') return item.name_ru;
            if (locale === 'en') return item.name_en;
            return item.name_ru;
        },
    },
    watch: {
        '$route.params.id': function () {
            this.allProducts()
        },
        '$i18n.locale': function () {
            this.allProducts()
        }
    },
}
</script>