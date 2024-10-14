<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">Home</router-link>
                <span class="md:text-xl sm:text-lg text-base text-m_gray-200">></span>
                <router-link to="/"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">About
                    us</router-link>
            </div>
            <div class="w-full my-10">
                <h1 class="text-center font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl sm:px-40 px-10 pb-20">
                    {{ getLocalizedName(about) }}
                </h1>
                <div class="w-full flex items-center space-x-4">
                    <swiper :slides-per-view="1" :spaceBetween="30" :modules="modules"
                        :autoplay="{ delay: 2000, disableOnInteraction: false, }" :speed="1000">
                        <swiper-slide class="w-full lg:!h-[400px] my-5" v-for="item in images" :key="item.id">
                            <img crossorigin="anonymous" class="w-full h-full object-contain rounded-xl"
                                :src="`${$uploadUrl}/${item.img}`">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="my-10 font-sf_pro font-medium text-lg px-20">
                    {{ getLocalizedDesc(about) }}
                </div>
            </div>
            <div class="w-full flex items-center justify-between mt-20 mb-16 overflow-x-auto scrollbar-hide">
                <div class="flex items-center mr-10 bg-m_gray-500 px-10 py-4 rounded-lg" v-for="item in services" :key="item.id">
                    <img class="sm:w-[40px] w-[20px] mr-4" crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`" />
                    <div class="flex flex-col space-y-1">
                        <p class="font-sf_pro text-nowrap font-bold md:text-lg text-base">{{ getLocalizedName(item) }}</p>
                        <p class="font-sf_pro text-nowrap md:text-base text-sm">{{ getLocalizedDesc(item) }}</p>
                    </div>
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
    name: "About",
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Pagination, Navigation, Autoplay],
            slidesPerView: null,
            images: null,
            about: null,
            services: null
        }
    },
    created() {
        this.allImages()
        this.getAbout()
        this.allServices()
    },
    methods: {
        async allImages() {
            const data = await api.get('/about/images')
            this.images = data.data.detail.rows
        },
        async getAbout() {
            const data = await api.get('/about')
            this.about = data.data.detail
        },
        async allServices() {
            const data = await api.get('/services')
            this.services = data.data.detail.rows
        },
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item?.name_tm;
            if (locale === 'ru') return item?.name_ru;
            if (locale === 'en') return item?.name_en;
            return item?.name_ru;
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