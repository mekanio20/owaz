<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">Home</router-link>
                <span class="tablet:text-xl text-lg text-m_gray-200">></span>
                <router-link :to="`/products/${this.$route.params.id}`"
                    class=" font-sf_pro font-normal tablet:text-xl text-lg text-m_gray-200">{{ this.name
                    }}</router-link>
            </div>
            <div class="my-3 font-sf_pro font-bold text-5xl">
                {{ this.name }}
            </div>
            <div class="font-sf_pro font-medium text-lg text-m_gray-200">
                {{ this.count }} Results
            </div>
            <div class="flex space-x-4 my-5">
                <!-- Category Dropdown -->
                <div class="relative">
                    <button
                        class="px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none flex justify-between items-center"
                        @click="toggleDropdown('category')">
                        {{ selectedCategory }}
                        <span class="ml-2">&#9662;</span>
                    </button>
                    <div v-if="openDropdown === 'category'" class="absolute mt-2 w-full bg-white shadow-lg rounded-md">
                        <ul>
                            <li v-for="item in subcategories" :key="item"
                                class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                @click="selectOption('category', item)">
                                {{ item.name_en }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Brand Dropdown -->
                <div class="relative">
                    <button
                        class="px-4 py-2 bg-white border rounded-md shadow-sm focus:outline-none flex justify-between items-center"
                        @click="toggleDropdown('brand')">
                        Brand {{ brandValue }}
                        <span class="ml-2">&#9662;</span>
                    </button>
                    <div v-if="openDropdown === 'brand'" class="absolute mt-2 w-full bg-white shadow-lg rounded-md">
                        <ul>
                            <li v-for="brand in brands" :key="brand" class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                @click="selectOption('brand', brand)">
                                {{ brand.title }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full my-10 grid grid-cols-4 gap-10">
                <router-link v-for="item in products?.rows" :key="item.id" :to="`/product/detail/${item.id}`"
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
            subcategories: null,
            openDropdown: null,
            brandValue: null,
            selectedCategory: "Subcategory",
            brands: null,
            subcategoryId: 0,
            brandId: 0
        }
    },
    created() {
        this.allSubcategories()
        this.allProducts()
        this.allBrands()
    },
    methods: {
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail.rows
        },
        async allProducts() {
            const data = await api.get(`/products?categoryId=${this.$route.params.id}`)
            const category = await api.get(`/categories?id=${this.$route.params.id}`)
            this.name = category.data.detail.rows[0].name_en
            this.products = data.data.detail
            this.count = this.products.count
        },
        async allSubcategories() {
            const data = await api.get(`/subcategories?id=${this.$route.params.id}`)
            this.subcategories = data.data.detail.rows
        },
        toggleDropdown(type) {
            this.openDropdown = this.openDropdown === type ? null : type;
        },
        selectOption(type, value) {
            if (type === "brand") {
                this.brandValue = value.title;
                this.brandId = value.id
            }
            if (type === "category") {
                this.selectedCategory = value.name_en;
                this.subcategoryId = value.id
            }
            this.openDropdown = null
            this.fetchFilteredData()
        },
        async fetchFilteredData() {
            const params = {
                categoryId: this.$route.params.id,
                subcategoryId: this.subcategoryId,
                brandId: this.brandId
            };
            const data = await api.get('/products', { params })
            this.products = data.data.detail
            this.count = this.products.count
        },
    },
}
</script>