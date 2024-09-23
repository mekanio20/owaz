<template>
    <div class="w-full">
        <Sidebar link="subcategories" />
        <div class="p-4 sm:ml-64">
            <div class="w-full mt-10">
                <h2 class="text-blue-700 text-lg m-2">Subcategories</h2>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Id
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
                                    CategoryId
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                v-for="item in subcategories" :key="item.id">
                                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    #{{ item.id }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ item.name_tm }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.name_ru }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.name_en }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ item.categoryId }}
                                </td>
                                <td class="flex items-center px-6 py-4">
                                    <div @click="deleteSubcategory(item.id)"
                                        class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">
                                        Remove</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="w-full">
                <form @submit.prevent="addSubcategory" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tm Title</label>
                        <input type="text" id="title" v-model="name_tm"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ru Title</label>
                        <input type="text" id="title" v-model="name_ru"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">En Title</label>
                        <input type="text" id="title" v-model="name_en"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select v-model="categoryId"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.name_ru }}
                            </option>
                        </select>
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
    name: "Subcategories",
    components: {
        Sidebar
    },
    data() {
        return {
            subcategories: null,
            categories: null,
            name_tm: null,
            name_ru: null,
            name_en: null,
            categoryId: 0
        }
    },
    created() {
        this.allSubcategories(),
        this.allCategories()
    },
    methods: {
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        // #########
        async addSubcategory() {
            try {
                const postData = {
                    name_tm: this.name_tm,
                    name_ru: this.name_ru,
                    name_en: this.name_en,
                    categoryId: this.categoryId
                }
                const token = localStorage.getItem('token');
                const subcategory = await api.post('/add/subcategory', postData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (subcategory.data.status === 201) {
                    toast.success(subcategory.data.msg);
                }
                await this.allSubcategories()
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async allSubcategories() {
            const data = await api.get('/subcategories')
            this.categories = data.data.detail.rows
        },
        async deleteSubcategory(id) {
            try {
                const token = localStorage.getItem('token');
                const confirmed = confirm("Subcategoryyany pozmak isleýärsiňizmi!");
                if (confirmed) {
                    const data = await api.delete(`/subcategory/${id}`, {
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