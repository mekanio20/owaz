<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">Home</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold text-5xl">
                {{ this.searchQuery }}
            </div>
            <div class="font-sf_pro font-medium text-lg text-m_gray-200">
                {{ this.count }} Results
            </div>
            <div class="w-full my-10 grid grid-cols-4 gap-10">
                <router-link v-for="item in products" :key="item.id" :to="`/product/detail/${item.id}`"
                    class="flex items-start flex-col space-y-4">
                    <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                        <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                            :src="`${$uploadUrl}/${item.product_images[0].img}`">
                    </div>
                    <p class="font-sf_pro font-medium text-lg">{{ item.name_en }}</p>
                    <div class="flex items-center space-x-2">
                        <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
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
    name: "Search",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            count: 0,
            products: null,
            searchQuery: null
        }
    },
    watch: {
        '$route.query.q': 'allProducts',
    },
    created() {
        this.allProducts()
    },
    methods: {
        async allProducts() {
            this.searchQuery = this.$route.query.q || '';
            if (this.searchQuery.trim()) {
                const data = await api.get(`/product/search?q=${this.searchQuery}`)
                this.products = data.data.detail.rows
                this.count = data.data.detail.count
            }
        },
    },
}
</script>