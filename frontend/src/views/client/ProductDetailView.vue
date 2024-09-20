<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">Home</router-link>
                <span class="tablet:text-xl text-lg text-m_gray-200">></span>
                <router-link to="/brands" class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">{{
                    product.name_en }}</router-link>
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
                        {{ product.inStock === true ? 'In stock' : 'Out stock' }}</div>
                    <h1 class="font-sf_pro font-bold text-4xl">{{ product.name_en }}</h1>
                    <div class="flex items-center space-x-6">
                        <p class="font-sf_pro font-bold text-3xl text-m_red-200">{{ product.final_price }} TMT</p>
                        <p v-if="product.discount_price > 0"
                            class="font-sf_pro font-bold text-2xl text-m_gray-300 line-through">{{ product.sale_price }}
                            TMT</p>
                    </div>
                    <div class="overflow-hidden">
                        <div class="w-full py-6">
                            <table class="w-full text-left font-sf_pro text-gray-700">
                                <tbody>
                                    <tr>
                                        <td class="font-bold py-2">Brand</td>
                                        <td class="py-2">{{ product.brand.title }}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Model</td>
                                        <td class="py-2">{{ product.model }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Year</td>
                                        <td class="py-2">{{ product.year }}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Made in</td>
                                        <td class="py-2">{{ product.madeIn }}</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2 pr-4">Category</td>
                                        <td class="py-2">{{ product.category.name_en }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full my-20">
                <h3 class="font-sf_pro font-bold text-3xl">Description</h3>
                <p class="font-sf_pro font-normal text-lg text-m_gray-600 my-5">{{ product.desc_en }}</p>
            </div>
            <div class="w-full mb-20">
                <h2 class="font-sf_pro font-bold text-4xl mb-10">You may also like</h2>
                <div class="grid grid-cols-5 gap-x-6">
                    <router-link v-for="item in products?.rows" :key="item.id" :to="`/product/detail/${item.id}`"
                        class="flex items-start flex-col space-y-4">
                        <div class="w-full bg-m_gray-100 rounded-xl">
                            <img class="w-full h-full mt-4" crossorigin="anonymous"
                                :src="`${$uploadUrl}/${item?.product_images[0]?.img}`">
                        </div>
                        <p class="font-sf_pro font-medium text-lg">{{ item.name_en }}</p>
                        <div class="flex items-center space-x-2">
                            <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
                        </div>
                    </router-link>
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
    name: "ProductDetail",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            product: null,
            products: null
        }
    },
    async created() {
        await this.getProduct(),
        await this.allProducts()
    },
    methods: {
        async getProduct() {
            const data = await api.get(`/product/${this.$route.params.id}`)
            this.product = data.data.detail
        },
        async allProducts() {
            const data = await api.get(`/products`)
            this.products = data.data.detail
        },
    }
}
</script>