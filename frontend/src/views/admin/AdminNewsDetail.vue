<template>
    <div class="w-full">
        <Sidebar link="news" />
        <div class="p-4 sm:ml-64">
            <div class="w-full p-4">
                <h2 class="text-2xl font-bold mb-4">News Detail</h2>
                <form @submit.prevent="updateNews">
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
                    </div>
                    <button @click="deleteNews" type="button"
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
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import { useToast } from 'vue-toastification'
import api from '@/api/index'
export default {
    name: "AdminNewsDetail",
    data() {
        return {
            id: null,
            name_tm: null,
            name_ru: null,
            name_en: null,
            desc_tm: null,
            desc_ru: null,
            desc_en: null
        }
    },
    components: {
        Sidebar
    },
    created() {
        this.fetchNewsDetails()
    },
    methods: {
        async fetchNewsDetails() {
            const data = await api.get(`/news?id=${this.$route.params.id}`)
            this.id = data.data.detail.rows[0].id
            this.name_tm = data.data.detail.rows[0].name_tm;
            this.name_ru = data.data.detail.rows[0].name_ru;
            this.name_en = data.data.detail.rows[0].name_en;
            this.desc_tm = data.data.detail.rows[0].desc_tm;
            this.desc_ru = data.data.detail.rows[0].desc_ru;
            this.desc_en = data.data.detail.rows[0].desc_en;
        },
        async deleteNews(id) {
            try {
                const token = localStorage.getItem('token');
                const confirmed = confirm("News pozmak isleýärsiňizmi!");
                if (confirmed) {
                    const data = await api.delete(`/news/${id}`, {
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
                    await this.allNews(this.currentPage)
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
        async updateNews() {
            try {
                const token = localStorage.getItem('token');
                let postData = {
                    id: this.id,
                    name_tm: this.name_tm,
                    name_ru: this.name_ru,
                    name_en: this.name_en,
                    desc_tm: this.desc_tm,
                    desc_ru: this.desc_ru,
                    desc_en: this.desc_en
                };
                const news = await api.put('/update/news', postData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                let toast = useToast();
                if (news.data.status === 200) {
                    toast.success(news.data.msg);
                } else {
                    toast.error(news.data.msg);
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        },
    }
}
</script>