<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="w-full flex items-center space-x-4">
                <img class="w-[800px] h-[600px] object-contain rounded-xl"
                    :src="`http://localhost:5050/uploads/images/${banners[0].img}`">
                <div class="flex flex-col space-y-4">
                    <img class="w-[450px] h-[250px] object-cover rounded-xl"
                        :src="`http://localhost:5050/uploads/images/${banners[1].img}`">
                    <img class="w-[450px] h-[250px] object-cover rounded-xl"
                        :src="`http://localhost:5050/uploads/images/${banners[2].img}`">
                </div>
            </div>
            <div class="w-full">
                <h2 class="font-sf_pro font-bold text-4xl">Browse by category</h2>
                <div class="flex items-center flex-wrap py-10">
                    <router-link class="py-2 pl-6 mr-5 mb-5 bg-m_gray-100 rounded-xl flex items-center" v-for="item in categories" :key="item.id" :to="`/`">
                        <p class="font-sf_pro font-bold text-lg text-nowrap mr-14">{{ item.name_en }}</p>
                        <div class="w-[100px]">
                            <img class="w-full h-full object-cover" :src="`http://localhost:5050/uploads/images/${item.img}`">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="mt-20">
                <div class="w-full flex items-center justify-between">
                    <h2 class="font-sf_pro font-bold text-4xl">The best offers for you</h2>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/client/Navbar.vue';
import api from '@/api/index'
export default {
    name: "Home",
    components: {
        Navbar
    },
    data() {
        return {
            banners: null,
            categories: null
        }
    },
    created() {
        this.allBanners(),
        this.allCategories()
    },
    methods: {
        async allBanners() {
            const data = await api.get('/banners')
            this.banners = data.data.detail.rows
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
    }
}
</script>