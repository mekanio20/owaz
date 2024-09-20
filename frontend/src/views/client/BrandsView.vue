<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-lg text-sm text-m_gray-200">Home</router-link>
                <span class="tablet:text-lg text-sm text-m_gray-200">></span>
                <router-link to="/brands"
                    class=" font-sf_pro font-normal tablet:text-lg text-sm text-m_gray-200">Brands</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold text-5xl">
                Brands
            </div>
            <div class="font-sf_pro font-medium text-lg text-m_gray-200">
                {{ brands.count }} Results
            </div>
            <div class="grid grid-cols-5 gap-x-6 my-10">
                <div class="bg-m_gray-100 rounded-lg" v-for="item in brands.rows" :key="item.id">
                    <img class="p-16" crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`">
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
    name: "Brands",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            brands: null
        }
    },
    created() {
        this.allBrands()
    },
    methods: {
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail
        }
    }
}
</script>