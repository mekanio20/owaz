<template>
    <div class="w-full">
        <Sidebar link="explore" />
        <div class="p-4 sm:ml-64">
            <div class="container mx-auto p-8">
                <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">

                    <!-- Image Upload Placeholder -->
                    <div class="relative mb-6">
                        <label for="imageUpload"
                            class="cursor-pointer w-full h-60 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100">
                            <div v-if="!imageFile" class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                <span class="block font-medium">Upload Image</span>
                            </div>
                            <div v-if="imageFile && local">
                                <img class="w-full h-full object-cover" crossorigin="anonymous" :src="`${imageFile}`">
                            </div>
                            <div v-if="imageFile && !local">
                                <img class="w-full h-full object-cover" crossorigin="anonymous"
                                    :src="`${$uploadUrl}/${imageFile}`">
                            </div>
                        </label>
                        <input id="imageUpload" type="file" class="hidden" @change="handleFileUpload" accept="image/*">
                    </div>

                    <div class="mb-4">
                        <label class="block font-medium mb-1">Title</label>
                        <input id="title" type="text" class="w-full border p-2 rounded-lg"
                            placeholder="Enter Banner Title" v-model="banner.title" />
                    </div>

                    <div class="mb-4">
                        <label class="block font-medium mb-1">Subtitle</label>
                        <input type="text" class="w-full border p-2 rounded-lg" placeholder="Enter Banner Subtitle"
                            v-model="banner.description" />
                    </div>

                    <div class="mb-5">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select v-model="banner.categoryId" :value="banner.categoryId"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.name_ru }}
                            </option>
                        </select>
                    </div>

                    <!-- Save Button -->
                    <div class="flex justify-end">
                        <button @click="saveBanner"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all">
                            Save Changes
                        </button>
                    </div>
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
    name: "Explore",
    components: {
        Sidebar
    },
    data() {
        return {
            imageFile: null,
            explore: null,
            local: false,
            categories: null,
            banner: {
                title: '',
                description: '',
                categoryId: 0,
            },
        }
    },
    async created() {
        await this.getBanner()
        await this.allCategories()
    },
    methods: {
        handleFileUpload(event) {
            this.local = true
            this.imageFile = URL.createObjectURL(event.target.files[0])
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        // ########
        async saveBanner() {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('title', this.banner.title);
            formData.append('subtitle', this.banner.description);
            formData.append('categoryId', this.banner.categoryId);
            if (this.imageFile && this.local) {
                console.log(this.imageFile);
                formData.append('img', this.imageFile)
            }
            const banner = await api.put('/update/explore', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
            let toast = useToast();
            if (banner.data.status === 200) {
                toast.success(banner.data.msg);
            } else {
                toast.error(banner.data.msg);
            }
            this.getBanner();
        },
        async getBanner() {
            const banner = await api.get('/explore')
            this.explore = banner.data.detail
            this.banner.title = this.explore.title
            this.banner.description = this.explore.desc
            this.banner.categoryId = this.explore.categoryId
            this.imageFile = this.explore.img
            this.local = false
        }
    },
}
</script>