<template>
    <div class="w-full">
        <Sidebar link="categories" />
        <div class="p-4 sm:ml-64">
            <div class="w-full">
                <form @submit.prevent="addCategory" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tm Title</label>
                        <input type="text" id="title" v-model="name_tm"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ru Title</label>
                        <input type="text" id="title" v-model="name_ru"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En Title</label>
                        <input type="text" id="title" v-model="name_en"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload
                            file</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-slate-50"
                            aria-describedby="brand_img_help" type="file" @change="handleFileUpload" accept="image/*">
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="brand_img_help">For this cateogry
                            picture</div>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
            <div class="w-full mt-10">
                <h2 class="text-blue-700 text-lg m-2">Categories</h2>
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
                                    Name Tm
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name Ru
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name En
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                v-for="item in categories" :key="item.id">
                                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    #{{ item.id }}
                                </th>
                                <td class="px-6 py-4">
                                    <div class="w-10">
                                        <img class="w-full h-full object-cover" :src="`${image_url}/${item.img}`">
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.name_tm }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.name_ru }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.name_en }}
                                </td>
                                <td class="flex items-center px-6 py-4">
                                    <div @click="deleteCategory(item.id)"
                                        class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">
                                        Remove</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
    name: "Categories",
    components: {
        Sidebar
    },
    data() {
        return {
            categories: null,
            image_url: `http://216.250.13.54:5050/uploads/images`,
            imageFile: null,
            name_tm: null,
            name_ru: null,
            name_en: null
        }
    },
    created() {
        this.allCategories()
    },
    methods: {
        handleFileUpload(event) {
            this.imageFile = event.target.files[0];
        },
        async addCategory() {
            try {
                const formData = new FormData();
                formData.append('name_tm', this.name_tm)
                formData.append('name_ru', this.name_ru)
                formData.append('name_en', this.name_en)
                if (this.imageFile) {
                    formData.append('img', this.imageFile);
                }
                const category = await api.post('/add/category', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                let toast = useToast();
                if (category.data.status === 201) {
                    toast.success(category.data.msg);
                }
                await this.allCategories()
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async allCategories() {
            try {
                const data = await api.get('/categories')
                this.categories = data.data.detail.rows
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async deleteCategory(id) {
            try {
                const confirmed = confirm("Categoryyany pozmak isleýärsiňizmi!");
                if (confirmed) {
                    const data = await api.delete(`/category/${id}`)
                    let toast = useToast();
                    if (data.data.status === 200) {
                        toast.success(data.data.msg);
                    } else {
                        toast.error(data.data.msg);
                    }
                    await this.allCategories()
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        }
    }
}
</script>