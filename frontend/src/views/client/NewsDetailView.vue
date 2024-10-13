<template>
    <div class="w-full h-full">
        <Navbar />
        <div class="container lg:px-40 pt-10 pb-20">
            <div class="w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
                <img crossorigin="anonymous" :src="`${$uploadUrl}/${news.img}`" class="object-cover w-full h-full" />
            </div>

            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6">
                {{ getLocalizedName(news) }}
            </h1>

            <!-- Publish Date -->
            <p class="text-sm text-gray-500 mt-2">
                {{ news.createdAt.substring(0, 10) }}
            </p>

            <div class="mt-4 text-base sm:text-lg lg:text-xl text-gray-700">{{ getLocalizedDesc(news) }}</div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/client/Navbar.vue';
import Footer from '@/components/client/Footer.vue';
import api from '@/api/index'
export default {
    name: "NewsDetail",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            news: null
        }
    },
    created() {
        this.fetchNews()
    },
    methods: {
        async fetchNews() {
            const data = await api.get(`/news?id=${this.$route.params.id}`)
            this.news = data.data.detail.rows[0]
        },
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item.name_tm;
            if (locale === 'ru') return item.name_ru;
            if (locale === 'en') return item.name_en;
            return item.name_ru;
        },
        getLocalizedDesc(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item.desc_tm;
            if (locale === 'ru') return item.desc_ru;
            if (locale === 'en') return item.desc_en;
            return item.desc_ru;
        },
    }
}
</script>