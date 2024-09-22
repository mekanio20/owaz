<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">Home</router-link>
                <span class="tablet:text-xl text-lg text-m_gray-200">></span>
                <router-link :to="`/product/detail/${product?.id}`"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">{{
                    product?.name_en }}</router-link>
            </div>
            <div class="w-full flex items-start space-x-10 my-10">
                <div class="flex-1 flex flex-col space-y-4">
                    <div class="w-full bg-m_gray-100 rounded-lg">
                        <img class="p-16" crossorigin="anonymous"
                            :src="`${$uploadUrl}/${product?.product_images[0].img}`">
                    </div>
                    <div class="grid grid-cols-4 gap-x-4">
                        <div class="bg-m_gray-100 rounded-lg" v-for="item in product?.product_images" :key="item.id">
                            <img class="p-4" crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`">
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex flex-col space-y-6">
                    <div
                        class="w-fit rounded-2xl px-6 py-2 font-sf_pro font-medium text-base text-m_orange-100 bg-m_orange-200">
                        {{ product?.inStock === true ? 'In stock' : 'Out stock' }}</div>
                    <h1 class="font-sf_pro font-bold text-4xl">{{ product?.name_en }}</h1>
                    <div class="flex items-center space-x-6">
                        <p class="font-sf_pro font-bold text-3xl text-m_red-200">{{ product?.final_price }} TMT</p>
                        <p v-if="product?.discount_price > 0"
                            class="font-sf_pro font-bold text-2xl text-m_gray-300 line-through">{{ product?.sale_price
                            }}
                            TMT</p>
                    </div>
                    <div class="overflow-hidden">
                        <div class="w-full py-6">
                            <table class="w-full text-left font-sf_pro text-gray-700">
                                <tbody>
                                    <tr>
                                        <td class="font-bold py-2">Brand</td>
                                        <td class="py-2">{{ product?.brand.title }}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Model</td>
                                        <td class="py-2">{{ product?.model }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Year</td>
                                        <td class="py-2">{{ product?.year }}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Made in</td>
                                        <td class="py-2">{{ product?.madeIn }}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2 pr-4">Category</td>
                                        <td class="py-2">{{ product?.category?.name_en }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full my-20">
                <h3 class="font-sf_pro font-bold text-3xl">Description</h3>
                <p class="font-sf_pro font-normal text-lg text-m_gray-600 my-5">{{ product?.desc_en }}</p>
            </div>
            <div class="w-full mb-20">
                <div class="w-full flex items-center justify-between mb-10">
                    <h2 class="font-sf_pro font-bold text-4xl">You may also like</h2>
                    <div class="hidden md:flex items-center space-x-2">
                        <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200 prev-p-1"
                            width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <svg class="p-2 rounded-full bg-m_gray-100 stroke-black cursor-pointer duration-200 next-p-1"
                            width="55px" height="55px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <swiper :slides-per-view="slidesPerView" :breakpoints="p1_breakpoints" :spaceBetween="30"
                    :modules="modules" :navigation="{ nextEl: `.next-p-1`, prevEl: `.prev-p-1` }"
                    class="w-full flex items-center space-x-8 select-none">
                    <swiper-slide v-for="item in products?.rows" :key="item.id">
                        <router-link :to="`/product/detail/${item.id}`" class="flex items-start flex-col space-y-6">
                            <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                                <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                                    :src="`${$uploadUrl}/${item?.product_images[0]?.img}`">
                            </div>
                            <p class="font-sf_pro font-medium text-lg">{{ item.name_en }}</p>
                            <div class="flex items-center space-x-2">
                                <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
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
    name: "ProductDetail",
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination, Navigation, Autoplay],
            product: null,
            products: null,
            slidesPerView: null,
            p1_breakpoints: {
                200: { slidesPerView: 1 },
                500: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }
    },
    async created() {
        await this.getProduct(),
            await this.allProducts()
    },
    methods: {
        async getProduct() {
            const data = await api.get(`/product/${this.$route.params.id}`)
            console.log(data);
            this.product = data.data.detail
        },
        async allProducts() {
            const data = await api.get(`/products?limit=10`)
            this.products = data.data.detail
        },
    }
}
</script>