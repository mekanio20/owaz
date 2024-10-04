<template>
    <div class="w-full">
        <Sidebar link="products" />
        <div class="p-4 sm:ml-64">
            <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
                <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
                    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div
                            class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                            <div class="flex items-center flex-1 space-x-1">
                                <span class="text-gray-500">All Products:</span>
                                <span class="dark:text-white">{{ this.count }}</span>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-4 py-3">Id</th>
                                        <th scope="col" class="px-4 py-3">Product name</th>
                                        <th scope="col" class="px-4 py-3">Stock</th>
                                        <th scope="col" class="px-4 py-3">Year</th>
                                        <th scope="col" class="px-4 py-3">Made in</th>
                                        <th scope="col" class="px-4 py-3">BrandId</th>
                                        <th scope="col" class="px-4 py-3">CategoryId</th>
                                        <th scope="col" class="px-4 py-3">Sale price</th>
                                        <th scope="col" class="px-4 py-3">Final price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        v-for="item in products" :key="item.id">
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                #{{ item.id }}
                                            </div>
                                        </th>
                                        <th scope="row">
                                            <router-link :to="`/admin/product/detail/${item.id}`"
                                                class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:underline">
                                                <img crossorigin="anonymous" :src="`${$uploadUrl}/${item.product_images[0].img}`" class="w-auto h-8 mr-3">
                                                {{ item.name_en }}
                                            </router-link>
                                        </th>
                                        <td class="px-4 py-2">
                                            <span v-if="item.inStock == true"
                                                class="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">true
                                            </span>
                                            <span v-else
                                                class="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                                false
                                            </span>
                                        </td>
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.year }}
                                        </td>
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.madeIn }}
                                        </td>
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.brandId }}
                                        </td>
                                        <td class="px-4 py-2">
                                            {{ item.categoryId }}
                                        </td>
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.sale_price }}
                                        </td>
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.final_price }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Paginator :dataLength="dataLength" @setPageItem="allProducts" :count="count" />
                    </div>
                </div>
            </section>
            <div class="w-full">
                <form @submit.prevent="addProduct" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tm Title</label>
                        <input type="text" v-model="name_tm"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ru Title</label>
                        <input type="text" v-model="name_ru"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En Title</label>
                        <input type="text" v-model="name_en"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tm
                            Description</label>
                        <textarea rows="4" required v-model="desc_tm"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ru
                            Description</label>
                        <textarea rows="4" required v-model="desc_ru"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En
                            Description</label>
                        <textarea rows="4" required v-model="desc_en"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
                        <input type="text" v-model="model"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">MadeIn</label>
                        <input type="text" v-model="madeIn"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                        <input type="number" v-model="year"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sale price</label>
                        <input type="number" v-model="sale_price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount
                            type</label>
                        <select v-model="discount_type"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="goterim">%</option>
                            <option value="manat">tmt</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount
                            price</label>
                        <input type="number" v-model="discount_price"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">In stock</label>
                        <select v-model="inStock"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Is new</label>
                        <select v-model="isNew"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select v-model="categoryId"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.name_ru }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subcategory</label>
                        <select v-model="subcategoryId"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option v-for="item in subcategories" :key="item.id" :value="item.id">{{ item.name_ru }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                        <select v-model="brandId"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option v-for="item in brands" :key="item.id" :value="item.id">{{ item.title }}</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload
                            file</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            type="file" accept="image/*" multiple @change="handleFileUpload">
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="brand_img_help">For this brand
                            picture</div>
                    </div>
                    <button type="submit"
                        class="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <div v-if="previewImages.length" class="grid grid-cols-2 gap-4">
                        <div v-for="(image, index) in previewImages" :key="index" class="relative">
                            <img crossorigin="anonymous" :src="image" class="w-full h-32 object-cover rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Paginator from '@/components/admin/Paginator.vue';
import Sidebar from '@/components/admin/Sidebar.vue';
import { useToast } from 'vue-toastification';
import api from '@/api/index'
export default {
    name: "AdminProducts",
    components: {
        Sidebar,
        Paginator
    },
    data() {
        return {
            selectedFiles: [],
            previewImages: [],
            products: null,
            count: 0,
            dataLength: 0,
            name_tm: null,
            name_ru: null,
            name_en: null,
            desc_tm: null,
            desc_ru: null,
            desc_en: null,
            model: null,
            year: 0,
            madeIn: null,
            inStock: true,
            isNew: true,
            sale_price: 0,
            discount_type: 'manat',
            discount_price: 0,
            categoryId: null,
            brandId: null,
            categories: null,
            subcategories: null,
            subcategoryId: null,
            brands: null,
            currentPage: 1,
        }
    },
    created() {
        this.allProducts(this.currentPage)
        this.allSubcategories()
        this.allCategories()
        this.allBrands()
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFiles = Array.from(event.target.files);
            this.previewImages = this.selectedFiles.map((file) =>
                URL.createObjectURL(file)
            );
        },
        async allProducts(page) {
            this.currentPage = page;
            const data = await api.get(`/products?page=${page}`)
            this.dataLength = Math.ceil((await data.data.detail.count) / 10);
            this.products = await data.data.detail.rows;
            this.count = await data.data.detail.count;
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail.rows
        },
        async allSubcategories() {
            const data = await api.get('/subcategories')
            this.subcategories = data.data.detail.rows
        },
        // ##############
        async addProduct() {
            try {
                const token = localStorage.getItem('token');
                const formData = new FormData();
                formData.append('name_tm', this.name_tm);
                formData.append('name_ru', this.name_ru);
                formData.append('name_en', this.name_en);
                formData.append('desc_tm', this.desc_tm);
                formData.append('desc_ru', this.desc_ru);
                formData.append('desc_en', this.desc_en);
                formData.append('model', this.model);
                formData.append('year', this.year);
                formData.append('madeIn', this.madeIn);
                formData.append('inStock', this.inStock);
                formData.append('isNew', this.isNew);
                formData.append('sale_price', this.sale_price);
                formData.append('discount_type', this.discount_type);
                formData.append('discount_price', this.discount_price);
                formData.append('categoryId', this.categoryId);
                formData.append('subcategoryId', this.subcategoryId);
                formData.append('brandId', this.brandId);
                if (this.selectedFiles) {
                    this.selectedFiles.forEach((file, index) => {
                        formData.append('img', file)
                    })
                }
                const product = await api.post('/add/product', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (product.data.status === 201) {
                    toast.success(product.data.msg);
                } else {
                    toast.error(product.data.msg);
                }
                 this.allProducts(this.currentPage);
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async deleteProduct(id) {
            try {
                const token = localStorage.getItem('token');
                const confirmed = confirm("Harydy pozmak isleýärsiňizmi!");
                if (confirmed) {
                    const data = await api.delete(`/product/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    })
                    let toast = useToast();
                    if (data.data.status === 200) {
                        toast.success(data.data.msg);
                    } else {
                        toast.error(data.data.msg);
                    }
                     this.allProducts(this.currentPage);
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        }
    }
}
</script>