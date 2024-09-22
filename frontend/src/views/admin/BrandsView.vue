<template>
    <div class="w-full">
        <Sidebar link="brands" />
        <div class="p-4 sm:ml-64">
            <div class="w-full mt-10">
                <h2 class="text-blue-700 text-lg m-2">Brands</h2>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                v-for="item in brands" :key="item.id">
                                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    #{{ item.id }}
                                </th>
                                <td class="px-6 py-4">
                                    <div class="w-10">
                                        <img crossorigin="anonymous" class="w-full h-full object-cover"
                                            :src="`${$uploadUrl}/${item.img}`">
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.title }}
                                </td>
                                <td class="flex items-center px-6 py-4">
                                    <div @click="deleteBrand(item.id)"
                                        class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">
                                        Remove</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="w-full">
                <form @submit.prevent="addBrand" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand
                            title</label>
                        <input type="text" id="title" v-model="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nike..." required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload
                            file</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="brand_img_help" type="file" @change="handleFileUpload" accept="image/*">
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="brand_img_help">For this brand
                            picture</div>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import { useToast } from 'vue-toastification';
import api from '@/api/index'
export default {
    name: "AdminBrands",
    components: {
        Sidebar
    },
    data() {
        return {
            brands: null,
            imageFile: null,
            title: null,
        }
    },
    created() {
        this.allBrands()
    },
    methods: {
        handleFileUpload(event) {
            this.imageFile = event.target.files[0];
        },
        // ##############
        async addBrand() {
            try {
                const token = localStorage.getItem('token');
                const formData = new FormData();
                formData.append('title', this.title);
                if (this.imageFile) {
                    formData.append('img', this.imageFile);
                }
                const brand = await api.post('/add/brand', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (brand.data.status === 201) {
                    toast.success(brand.data.msg);
                } else {
                    toast.error(brand.data.msg);
                }
                await this.allBrands()
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async allBrands() {
            try {
                const data = await api.get('/brands')
                this.brands = data.data.detail.rows
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async deleteBrand(id) {
            try {
                const token = localStorage.getItem('token');
                const confirmed = confirm("Brendi pozmak isleýärsiňizmi!");
                if (confirmed) {
                    const data = await api.delete(`/brand/${id}`, {
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
                    await this.allBrands()
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        }
    }
}
</script>