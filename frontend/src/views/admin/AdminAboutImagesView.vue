<template>
    <div class="w-full">
        <Sidebar link="about_images" />
        <div class="p-4 sm:ml-64">
            <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
                <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
                    <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div
                            class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                            <div class="flex items-center flex-1 space-x-1">
                                <span class="text-gray-500">About Images:</span>
                                <span class="dark:text-white">{{ count }}</span>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-4 py-3">Id</th>
                                        <th scope="col" class="px-4 py-3">Image</th>
                                        <th scope="col" class="px-4 py-3">CreatedAt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        v-for="item in images" :key="item.id">
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
                                        <th scope="row">
                                            <div class="flex items-center">
                                               {{ item.createdAt.substring(0, 10) }}
                                            </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <div class="w-full">
                <form @submit.prevent="addAboutImage" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload
                            file</label>
                        <input
                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            type="file" accept="image/*" @change="handleFileUpload">
                        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="brand_img_help">For this about
                            picture</div>
                    </div>
                    <button type="submit"
                        class="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
    name: "AdminAboutImages",
    components: {
        Paginator,
        Sidebar,
    },
    data() {
        return {
            images: null,
            imageFile: null,
            count: 0
        }
    },
    created() {
        this.aboutImages()
    },
    methods: {
        handleFileUpload(event) {
            this.imageFile = event.target.files[0]
        },
        // ##########
        async aboutImages() {
            const data = await api.get('/about/images')
            this.images = data.data.detail.rows
            this.count = data.data.detail.count
        },
        async addAboutImage() {
            try {
                const token = localStorage.getItem('token');
                const formData = new FormData();
                if (this.imageFile) {
                    formData.append('img', this.imageFile);
                }
                const aboutImages = await api.post('/add/about/image', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (aboutImages.data.status === 201) {
                    toast.success(aboutImages.data.msg);
                }
                this.aboutImages()
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
    }
}
</script>