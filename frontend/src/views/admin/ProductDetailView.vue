<template>
    <div class="w-full">
        <Sidebar link="products" />
        <div class="p-4 sm:ml-64">
            <div class="flex flex-col items-center">
                <div class="w-full p-4 bg-gray-50 border-r border-gray-200">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-2">
                        <div v-for="(image, index) in images" :key="index" class="relative h-48 mb-2 cursor-pointer"
                            @mouseover="hoveredImageIndex = index" @mouseleave="hoveredImageIndex = null">
                            <img :src="`http://216.250.13.54:5050/uploads/images/${image.img}`"
                                class="w-full h-full object-cover rounded-lg shadow-md" />
                            <button v-if="hoveredImageIndex === index" @click="deleteImage(image.id)"
                                class="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full p-4">
                    <h2 class="text-2xl font-bold mb-4">Product Details</h2>
                    <form @submit.prevent="updateProduct">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Name (TM)</label>
                                <input v-model="name_tm" type="text"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Name (RU)</label>
                                <input v-model="name_ru" type="text"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Name (EN)</label>
                                <input v-model="name_en" type="text"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Description (TM)</label>
                                <textarea v-model="desc_tm"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full h-24"></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Description (RU)</label>
                                <textarea v-model="desc_ru"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full h-24"></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Description (EN)</label>
                                <textarea v-model="desc_en"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full h-24"></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Model</label>
                                <input v-model="model" type="text"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Year</label>
                                <input v-model="year" type="number"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Made In</label>
                                <input v-model="madeIn" type="text"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">In
                                    stock</label>
                                <select v-model="inStock"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Sale Price</label>
                                <input v-model="sale_price" type="number"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount
                                    Type</label>
                                <select v-model="discount_type"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="goterim">%</option>
                                    <option value="manat">tmt</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Discount Price</label>
                                <input v-model="discount_price" type="number"
                                    class="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Category</label>
                                <select v-model="categoryId"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.name_en
                                        }}</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Brand</label>
                                <select v-model="brandId"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option v-for="item in brands" :key="item.id" :value="item.id">{{ item.title }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <button @click="deletProduct" type="button"
                            class="mt-6 px-4 py-2 ml-2 float-end font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-500">
                            Delete
                        </button>
                        <button type="submit"
                            class="mt-6 px-4 py-2 float-end font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import { useToast } from 'vue-toastification';
import api from '@/api/index'
export default {
    name: "ProductDetail",
    components: {
        Sidebar
    },
    created() {
        this.fetchProductDetails();
        this.allBrands(),
        this.allCategories()
    },
    data() {
        return {
            images: [],
            hoveredImageIndex: null,
            productId: null,
            name_tm: '',
            name_ru: '',
            name_en: '',
            desc_tm: '',
            desc_ru: '',
            desc_en: '',
            model: '',
            year: '',
            madeIn: '',
            inStock: '',
            sale_price: '',
            discount_type: '',
            discount_price: '',
            categoryId: '',
            brandId: '',
            brands: null,
            categories: null
        };
    },
    methods: {
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail.rows
        },
        // ###############
        async fetchProductDetails() {
            const data = await api.get(`/product/${this.$route.params.id}`)

            this.productId = data.data.detail.id
            this.images = data.data.detail.product_images;
            this.name_tm = data.data.detail.name_tm;
            this.name_ru = data.data.detail.name_ru;
            this.name_en = data.data.detail.name_en;
            this.desc_tm = data.data.detail.desc_tm;
            this.desc_ru = data.data.detail.desc_ru;
            this.desc_en = data.data.detail.desc_en;
            this.model = data.data.detail.model;
            this.year = data.data.detail.year;
            this.madeIn = data.data.detail.madeIn;
            this.inStock = data.data.detail.inStock;
            this.sale_price = data.data.detail.sale_price;
            this.discount_type = data.data.detail.discount_type;
            this.discount_price = data.data.detail.discount_price;
            this.categoryId = data.data.detail.categoryId;
            this.brandId = data.data.detail.brandId;
        },
        async deleteImage(imageId) {
            try {
                if (confirm('Suraty pozmak isleýärsiňizmi?')) {
                    let toast = useToast();
                    const product = await api.delete(`/image/${imageId}`)
                    if (product.data.status === 200) {
                        toast.success(product.data.msg);
                    } else {
                        toast.error(product.data.msg);
                    }
                    this.images = this.images.filter(image => image.id !== imageId)
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async deletProduct() {
            if (confirm('Harydy pozmak isleýärsiňizmi?')) {
                await api.delete(`/product/${this.productId}`)
                this.$router.push({ name: 'Products' })
            }
        },
        async updateProduct() {
            try {
                let postData = {
                    id: this.productId,
                    name_tm: this.name_tm,
                    name_ru: this.name_ru,
                    name_en: this.name_en,
                    desc_tm: this.desc_tm,
                    desc_ru: this.desc_ru,
                    desc_en: this.desc_en,
                    model: this.model,
                    year: this.year,
                    madeIn: this.madeIn,
                    inStock: this.inStock,
                    sale_price: this.sale_price,
                    discount_type: this.discount_type,
                    discount_price: this.discount_price,
                    categoryId: this.categoryId,
                    brandId: this.brandId
                };
                const product = await api.put('/update/product', postData)
                let toast = useToast();
                if (product.data.status === 200) {
                    toast.success(product.data.msg);
                } else {
                    toast.error(product.data.msg);
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
    }
}
</script>