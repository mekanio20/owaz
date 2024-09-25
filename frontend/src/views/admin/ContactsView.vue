<template>
    <div class="w-full">
        <Sidebar link="contacts" />
        <div class="p-4 sm:ml-64">
            <div class="w-full relative" v-for="(item, index) in contacts" :key="index" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
                <div
                    class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.fullname }}</h5>
                    <h5 class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">{{ item.phone }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{{ item.message }}</p>
                </div>
                <button v-if="hoveredIndex === index" @click="deleteContact(item.id)"
                    class="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue';
import { useToast } from 'vue-toastification';
import api from '@/api/index'
export default {
    name: "AdminContacts",
    components: {
        Sidebar
    },
    data() {
        return {
            hoveredIndex: null,
            contacts: null
        }
    },
    created() {
        this.allContacts()
    },
    methods: {
        async allContacts() {
            const token = localStorage.getItem('token')
            const data = await api.get('/contacts', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            this.contacts = data.data.detail.rows
        },
        async deleteContact(id) {
            const token = localStorage.getItem('token');
            if (confirm('Contact pozmak isleýärsiňizmi?')) {
                const data = await api.delete(`/contact/${id}`, {
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
                await this.allContacts()
            }
        },
    }
}
</script>