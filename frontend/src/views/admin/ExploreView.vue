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
                            <div class="text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-2" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                <span class="block font-medium">Upload Image</span>
                            </div>
                        </label>
                        <input id="imageUpload" type="file" class="hidden" @change="handleImageUpload">
                    </div>

                    <div class="mb-4">
                        <label class="block font-medium mb-1">Title</label>
                        <input id="title" type="text" class="w-full border p-2 rounded-lg"
                            placeholder="Enter Banner Title" v-model="banner.title" />
                    </div>

                    <div class="mb-4">
                        <label class="block font-medium mb-1">Subtitle</label>
                        <input type="text" class="w-full border p-2 rounded-lg"
                            placeholder="Enter Banner Subtitle" v-model="banner.description" />
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
            banner: {
                title: '',
                description: '',
                image: null,
            },
        }
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.banner.image = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        saveBanner() {
            console.log(this.banner);
        },
        async getBanner() {
            const banner = await api.get('/')
        }
    },
}
</script>