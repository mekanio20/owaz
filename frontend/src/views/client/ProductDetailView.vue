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
                            :src="`${$uploadUrl}/${product.product_images[0].img}`">
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
                    <p class="font-sf_pro font-bold text-3xl text-m_red-200">{{ product.final_price }} TMT</p>
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
                                        <td class="py-2">WM20JB Smalls Deep State Conspiracy Theory Diodes Overdrive
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Color</td>
                                        <td class="py-2">Black</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Year</td>
                                        <td class="py-2">2024</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Made in</td>
                                        <td class="py-2">United States</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2">Pedal Format</td>
                                        <td class="py-2">Standard</td>
                                    </tr>
                                    <tr>
                                        <td class="font-bold py-2 pr-4">Number of Strings</td>
                                        <td class="py-2">2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
    name: "ProductDetail",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            product: null
        }
    },
    created() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            const data = await api.get(`/product/${this.$route.params.id}`)
            console.log(data);
            this.product = data.data.detail
        }
    }
}
</script>