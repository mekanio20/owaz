<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">Home</router-link>
                <span class="md:text-xl sm:text-lg text-base text-m_gray-200">></span>
                <router-link to="/news"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">News</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">
                News
            </div>
            <div class="w-full my-10 grid lg:grid-cols-4 md:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-10">
                <router-link to="/"
                    class="flex items-start flex-col space-y-4">
                    <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                        <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                            src="#">
                    </div>
                    <p class="font-sf_pro font-medium md:text-xl text-lg">Test</p>
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
    name: "News",
    components: {
        Navbar,
        Footer
    }
}
</script>