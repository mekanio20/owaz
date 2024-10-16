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
            <div class="flex items-start">
                <div class="flex flex-col items-start space-y-4 mr-10  my-10">
                    <!-- Category Dropdown -->
                    <div class="relative">
                        <button
                            class="px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none flex justify-between items-center"
                            @click="toggleDropdown('category')">
                            Subcategory {{ selectedCategory }}
                            <span class="ml-2">&#9662;</span>
                        </button>
                        <div v-if="openDropdown === 'category'"
                            class="absolute mt-2 w-full bg-white shadow-lg rounded-md">
                            <ul>
                                <li v-for="item in subcategories" :key="item.id"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    @click="selectOption('category', getLocalizedName(item))">
                                    {{ getLocalizedName(item) }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="relative">
                        <button
                            class="px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none flex justify-between items-center"
                            @click="toggleDropdown('brand')">
                            Brand {{ brandValue }}
                            <span class="ml-2">&#9662;</span>
                        </button>
                        <div v-if="openDropdown === 'brand'" class="absolute mt-2 w-32 bg-white shadow-lg rounded-md">
                            <ul>
                                <li v-for="brand in brands" :key="brand.id"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    @click="selectOption('brand', brand)">
                                    {{ brand.title }}
                                </li>
                            </ul>
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