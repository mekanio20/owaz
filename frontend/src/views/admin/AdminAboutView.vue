<template>
    <div class="w-full">
        <Sidebar link="about" />
        <div class="p-4 sm:ml-64">
            <div class="w-full">
                <form @submit.prevent="addAbout" class="max-w-lg mx-auto bg-slate-100 py-10 px-10 rounded-xl">
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
                    <button type="submit"
                        class="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
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
    name: "AdminAbout",
    components: {
        Sidebar,
    },
    data() {
        return {
            about: null,
            id: null,
            name_tm: null,
            name_ru: null,
            name_en: null,
            desc_tm: null,
            desc_ru: null,
            desc_en: null
        }
    },
    created() {
        this.getAbout()
    },
    methods: {
        handleFileUpload(event) {
            this.imageFile = event.target.files[0]
        },
        // ##########
        async getAbout() {
            const data = await api.get('/about')
            this.about = data.data.detail
            this.id = this.about.id
            this.name_tm = this.about.name_tm
            this.name_ru = this.about.name_ru
            this.name_en = this.about.name_en
            this.desc_tm = this.about.desc_tm
            this.desc_ru = this.about.desc_ru
            this.desc_en = this.about.desc_en
        },
        async addAbout() {
            try {
                const token = localStorage.getItem('token');
                const postData = {
                    id: this.id,
                    name_tm: this.name_tm,
                    name_ru: this.name_ru,
                    name_en: this.name_en,
                    desc_tm: this.desc_tm,
                    desc_ru: this.desc_ru,
                    desc_en: this.desc_en
                }
                const about = await api.put('/update/about', postData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (about.data.status === 200) {
                    toast.success(about.data.msg);
                }
                this.getAbout()
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
    }
}
</script>