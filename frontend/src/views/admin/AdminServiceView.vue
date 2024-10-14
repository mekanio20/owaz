<template>
    <div class="w-full">
        <Sidebar link="service" />
        <div class="p-4 sm:ml-64">
            <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
                <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
                    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div
                            class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                            <div class="flex items-center flex-1 space-x-1">
                                <span class="text-gray-500">All Service:</span>
                                <span class="dark:text-white">{{ count }}</span>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-4 py-3">Id</th>
                                        <th scope="col" class="px-4 py-3">Icon</th>
                                        <th scope="col" class="px-4 py-3">Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        v-for="item in services" :key="item.id">
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                #{{ item.id }}
                                            </div>
                                        </th>
                                        <th scope="row">
                                            <div
                                                class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:underline">
                                                <img crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`"
                                                    class="w-auto h-8 mr-3">
                                            </div>
                                        </th>
                                        <td
                                            class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ item.name_en }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <div class="w-full">
                <form @submit.prevent="addService" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
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
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload
                            file</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            type="file" accept="image/*" multiple @change="handleFileUpload">
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="brand_img_help">For this service
                            icon</div>
                    </div>
                    <button type="submit"
                        class="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
    name: "AdminService",
    components: {
        Sidebar,
    },
    data() {
        return {
            services: null,
            imageFile: null,
            count: 0,
            name_tm: null,
            name_ru: null,
            name_en: null,
            desc_tm: null,
            desc_ru: null,
            desc_en: null
        }
    },
    created() {
        this.allServices()
    },
    methods: {
        handleFileUpload(event) {
            this.imageFile = event.target.files[0]
        },
        // ##########
        async allServices() {
            const data = await api.get('/services')
            this.services = data.data.detail.rows
            this.count = data.data.detail.count
        },
        async addService() {
            try {
                const token = localStorage.getItem('token');
                const formData = new FormData();
                formData.append('name_tm', this.name_tm)
                formData.append('name_ru', this.name_ru)
                formData.append('name_en', this.name_en)
                formData.append('desc_tm', this.desc_tm)
                formData.append('desc_ru', this.desc_ru)
                formData.append('desc_en', this.desc_en)
                if (this.imageFile) {
                    formData.append('img', this.imageFile);
                }
                const service = await api.post('/add/service', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (service.data.status === 201) {
                    toast.success(service.data.msg);
                }
                await this.allServices()
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
    }
}
</script>