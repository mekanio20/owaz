<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">Home</router-link>
                <span class="tablet:text-xl text-lg text-m_gray-200">></span>
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">{{ this.name }}</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold text-5xl">
               {{ this.name }}
            </div>
            <div class="font-sf_pro font-medium text-lg text-m_gray-200">
                {{ this.count }} Results
            </div>
            <div class="w-full my-10 grid grid-cols-4 gap-10">
                <div v-for="item in products?.rows" :key="item.id"
                    class="flex items-start flex-col space-y-4">
                    <div class="w-full bg-m_gray-100 rounded-xl">
                        <img class="w-full h-full mt-4" crossorigin="anonymous"
                            :src="`${$uploadUrl}/${item.product_images[0].img}`">
                    </div>
                    <p class="font-sf_pro font-medium text-lg">{{ item.name_en }}</p>
                    <div class="flex items-center space-x-2">
                        <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
                    </div>
                </div>
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
            name: null,
            products: null,
            count: 0
        }
    },
    created() {
        this.allProducts()
    },
    methods: {
        async allProducts() {
            const data = await api.get(`/products?categoryId=${this.$route.params.id}`)
            const category = await api.get(`/categories?id=${this.$route.params.id}`)
            this.name = category.data.detail.rows[0].name_en
            this.products = data.data.detail
            this.count = this.products.count
        },
    }
}
</script>