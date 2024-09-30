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
            <div class="w-full my-10 grid lg:grid-cols-4 md:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-10">
                <router-link v-for="item in products?.rows" :key="item.id" :to="`/product/detail/${item.id}`"
                    class="flex items-start flex-col space-y-4">
                    <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                        <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                            :src="`${$uploadUrl}/${item.product_images[0].img}`">
                    </div>
                    <p class="font-sf_pro font-medium md:text-xl text-lg">{{ item.name_en }}</p>
                    <div class="flex items-center space-x-2">
                        <span class="font-sf_pro font-bold md:text-base text-sm text-m_red-200">{{ item.final_price }}
                            tmt</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from '@/components/client/Navbar.vue';
import Footer from '@/components/client/Footer.vue';
import api from '@/api/index'
export default {
    name: "Products",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            count: 0,
            name: null,
            products: null,
        }
    },
    created() {
        this.allProducts()
    },
    methods: {
        async allProducts() {
            const locale = this.$i18n.locale.toLowerCase();
            const data = await api.get(`/products?subcategoryId=${this.$route.params.id}`)
            const category = await api.get(`/subcategories?subId=${this.$route.params.id}`)
            if (locale === 'tm') this.name = category.data.detail.rows[0].name_tm
            if (locale === 'ru') this.name = category.data.detail.rows[0].name_ru
            if (locale === 'en') this.name = category.data.detail.rows[0].name_en
            this.products = data.data.detail
            this.count = this.products.count
        }
    },
    watch: {
        '$route.params.id': function () {
            this.allProducts()
        }
    },
}
</script>