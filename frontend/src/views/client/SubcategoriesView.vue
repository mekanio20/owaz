<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">{{ $t('routes.title1') }}</router-link>
                <span class="md:text-xl sm:text-lg text-base text-m_gray-200">></span>
                <router-link :to="`/subcategories/${categoryId}`"
                    class=" font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">{{ name
                    }}</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold md:text-4xl sm:text-3xl text-2xl">
                {{ name }}
            </div>
            <div class="w-full my-10 grid lg:grid-cols-4 md:grid-cols-3 min-[400px]:grid-cols-2 grid-cols-1 gap-10">
                <router-link v-for="item in subcategories" :key="item.id" :to="`/products/${item.id}`"
                    class="flex items-center flex-col space-y-4">
                    <div class="w-full h-64 bg-m_gray-100 rounded-xl">
                        <img class="w-full h-full object-contain mt-4" crossorigin="anonymous"
                            :src="`${$uploadUrl}/${item.img}`">
                    </div>
                    <p class="font-sf_pro font-medium md:text-xl text-lg">{{ getLocalizedName(item) }}</p>
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
    name: "ClientSubcategories",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            name: null,
            categoryId: null,
            subcategories: null
        }
    },
    created() {
        this.allSubcategories()
    },
    methods: {
        async allSubcategories() {
            const locale = this.$i18n.locale;
            this.categoryId = this.$route.params.id
            const data = await api.get(`/subcategories?id=${this.categoryId}`)
            const categories = await api.get(`/categories?id=${this.categoryId}`)
            this.subcategories = data.data.detail.rows
            if (locale === 'tm') this.name = categories.data.detail.rows[0].name_tm
            if (locale === 'ru') this.name = categories.data.detail.rows[0].name_ru
            if (locale === 'en') this.name = categories.data.detail.rows[0].name_en
        },
        getLocalizedName(item) {
            const locale = this.$i18n.locale;
            if (locale === 'tm') return item.name_tm;
            if (locale === 'ru') return item.name_ru;
            if (locale === 'en') return item.name_en;
            return item.name_ru;
        },
    },
    watch: {
        '$route.params.id': function () {
            this.allSubcategories()
        }
    }
}
</script>