<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="w-full flex items-center space-x-4">
                <swiper :slides-per-view="1" :spaceBetween="30" :modules="modules"
                    :autoplay="{ delay: 2000, disableOnInteraction: false, }" :speed="1000">
                    <swiper-slide class="w-full lg:!h-[600px] my-5" v-for="item in banners" :key="item.id">
                        <img crossorigin="anonymous" class="w-full h-full object-contain rounded-xl"
                            :src="`${$uploadUrl}/${item.img}`">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="w-full flex items-center justify-between mt-4 mb-16 overflow-x-auto scrollbar-hide">
                <div class="flex items-center mr-10 bg-m_gray-500 px-10 py-4 rounded-lg" v-for="item in services" :key="item.id">
                    <img class="sm:w-[40px] w-[20px] mr-4" crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`" />
                    <div class="flex flex-col space-y-1">
                        <p class="font-sf_pro text-nowrap font-bold md:text-lg text-base">{{ getLocalizedName(item) }}</p>
                        <p class="font-sf_pro text-nowrap md:text-base text-sm">{{ getLocalizedDesc(item) }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <h2 class="font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">{{ $t('titles.cat') }}</h2>
                <div class="flex items-center flex-wrap pt-10">
                    <router-link class="py-2 pl-6 mr-5 mb-5 bg-m_gray-100 rounded-xl flex items-center"
                        v-for="item in categories" :key="item.id" :to="`/subcategories/${item.id}`">
                        <p class="font-sf_pro font-bold md:text-lg text-base text-nowrap mr-14">{{ getLocalizedName(item) }}</p>
                        <div class="md:w-[100px] sm:w-[70px] w-[50px]">
                            <img crossorigin="anonymous" class="w-full h-full object-cover"
                                :src="`${$uploadUrl}/${item?.img}`">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="my-10">
                <div class="w-full flex items-center justify-between mb-10">
                    <h2 class="font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">{{ $t('titles.news') }}</h2>
                    <div class="hidden md:flex items-center space-x-2">
                        <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200 prev-p-news"
                            width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200 next-p-news"
                            width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="w-full flex items-center space-x-8">
                    <swiper :slides-per-view="slidesPerView" :breakpoints="p1_breakpoints" :spaceBetween="30" :modules="modules"
                        :navigation="{ nextEl: '.next-p-news', prevEl: '.prev-p-news' }"
                        class="w-full flex items-center space-x-8 select-none">
                        <swiper-slide v-for="item in new_products?.rows" :key="item.id">
                            <router-link class="flex flex-col space-y-4" :to="`/product/detail/${item.id}`">
                                <div class="w-full h-64 relative bg-m_gray-100 rounded-xl">
                                    <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                                        :src="`${$uploadUrl}/${item.product_images[0].img}`">
                                </div>
                                <p class="font-sf_pro font-medium md:text-lg text-base">{{ getLocalizedName(item) }}</p>
                                <div class="flex items-center space-x-2">
                                    <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="my-10">
                <div class="w-full flex items-center justify-between mb-10">
                    <h2 class="font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">{{ $t('titles.offer') }}</h2>
                    <div class="hidden md:flex items-center space-x-2">
                        <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200 prev-p"
                            width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200 next-p"
                            width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div class="w-full flex items-center space-x-8">
                    <swiper :slides-per-view="slidesPerView" :breakpoints="p1_breakpoints" :spaceBetween="30" :modules="modules"
                        :navigation="{ nextEl: '.next-p', prevEl: '.prev-p' }"
                        class="w-full flex items-center space-x-8 select-none">
                        <swiper-slide v-for="item in offers?.rows" :key="item.id">
                            <router-link class="flex flex-col space-y-4" :to="`/product/detail/${item.id}`">
                                <div class="w-full h-64 relative bg-m_gray-100 rounded-xl">
                                    <div
                                        class="absolute left-0 top-4 bg-white px-4 py-2 rounded-e-lg font-sf_pro font-bold text-m_red-200 text-sm">
                                        {{ item.discount_price }} {{ item.discount_type == 'manat' ? 'tmt' : '%' }}
                                    </div>
                                    <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                                        :src="`${$uploadUrl}/${item.product_images[0].img}`">
                                </div>
                                <p class="font-sf_pro font-medium md:text-lg text-base">{{ getLocalizedName(item) }}</p>
                                <div class="flex items-center space-x-2">
                                    <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
                                    <span class="font-sf_pro text-m_gray-300 line-through">{{ item.sale_price }}
                                        tmt</span>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="w-full relative my-10 select-none">
                <div class="w-full h-[300px] rounded-xl">
                    <img crossorigin="anonymous" class="w-full h-full object-cover" :src="`${$uploadUrl}/${banner.img}`">
                </div>
                <div class="absolute inset-0 flex justify-center items-center">
                    <div class="flex items-center flex-col space-y-4">
                        <div class="mb-5 text-center">
                            <p class="font-sf_pro font-bold md:text-3xl sm:text-2xl text-xl mb-3">{{ banner.title }}</p>
                            <p class="font-sf_pro md:text-base text-sm text-m_gray-200">{{ banner.desc }}</p>
                        </div>
                        <router-link :to="`/subcategories/${banner.categoryId}`"
                            class="px-8 py-2 rounded-3xl bg-black text-white font-sf_pro font-bold md:text-lg sm:text-base text-sm">
                            {{ $t('titles.explore') }}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div v-for="item in category_products?.rows" :key="item.id" class="w-full flex flex-col">
                    <div v-if="item.products.length > 0" class="w-full flex items-center justify-between mb-10">
                        <router-link :to="`/subcategories/${item.id}`" class="font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">{{ getLocalizedName(item) }}</router-link>
                        <div class="hidden md:flex items-center space-x-2">
                            <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200"
                                :class="[`prev-p-${item.id}`]"
                                width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke-width="1" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200"
                                :class="[`next-p-${item.id}`]"
                                width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="1" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <swiper :slides-per-view="slidesPerView" :breakpoints="p1_breakpoints" :spaceBetween="30" :modules="modules"
                        :navigation="{ nextEl: `.next-p-${item.id}`, prevEl: `.prev-p-${item.id}` }"
                        class="w-full flex items-center space-x-8 select-none">
                        <swiper-slide v-for="product in item.products" :key="product.id">
                            <router-link :to="`/product/detail/${product.id}`" class="flex items-start flex-col space-y-4 mb-10">
                                <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                                    <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                                        :src="`${$uploadUrl}/${product.product_images[0].img}`">
                                </div>
                                <p class="font-sf_pro font-medium md:text-lg text-base">{{ getLocalizedName(product) }}</p>
                                <div class="flex items-center space-x-2">
                                    <span class="font-sf_pro font-bold text-m_red-200">{{ product.final_price }}
                                        tmt</span>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="w-full mb-20">
                <h2 class="font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl mb-10">{{ $t('titles.brand') }}</h2>
                <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
                    <div class="bg-m_gray-100 rounded-lg" v-for="item in brands?.rows" :key="item.id">
                        <img class="lg:p-16 p-14" crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`">
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
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
    name: "Home",
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination, Navigation, Autoplay],
            services: null,
            banners: null,
            categories: null,
            offers: null,
            brands: null,
            category_products: null,
            slidesPerView: null,
            new_products: null,
            p1_breakpoints: {
                200: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
            banner: {
                title: null,
                desc: null,
                categoryId: null,
                img: null
            }
        }
    },
    created() {
        this.newProducts()
        this.allBanners(),
        this.allCategories(),
        this.offerProducts(),
        this.categoryProducts(),
        this.allBrands(),
        this.getBanner(),
        this.allServices()
    },
    methods: {
        async allServices() {
            const data = await api.get('/services')
            this.services = data.data.detail.rows
        },
        async allBanners() {
            const data = await api.get('/banners?types=home')
            this.banners = data.data.detail.rows
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        async offerProducts() {
            const data = await api.get('/products?dis=true&limit=30')
            this.offers = data.data.detail
        },
        async newProducts() {
            const data = await api.get('/products?isNew=true&limit=30')
            this.new_products = data.data.detail
        },
        async categoryProducts() {
            const data = await api.get('/category/products?limit=30')
            this.category_products = data.data.detail
        },
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail
        },
        async getBanner() {
            const banner = await api.get('/explore')
            this.explore = banner.data.detail
            this.banner.title = this.explore.title
            this.banner.desc = this.explore.desc
            this.banner.categoryId = this.explore.categoryId
            this.banner.img = this.explore.img
        },
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item.name_tm;
            if (locale === 'ru') return item.name_ru;
            if (locale === 'en') return item.name_en;
            return item.name_ru;
        },
        getLocalizedDesc(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item?.desc_tm;
            if (locale === 'ru') return item?.desc_ru;
            if (locale === 'en') return item?.desc_en;
            return item?.desc_ru;
        },
    }
}
</script>