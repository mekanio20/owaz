<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Admin Login
                    </h1>
                    <form @submit.prevent="login" class="space-y-4 md:space-y-6">
                        <div>
                            <input type="text" v-model="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="username" required>
                        </div>
                        <div>
                            <input type="password" v-model="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
                            in</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useToast } from 'vue-toastification';
import api from '@/api/index'
export default {
    name: "Login",
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        async login() {
            try {
                const response = await api.post('/login', {
                    login: this.username,
                    password: this.password,
                });
                localStorage.setItem('token', response.data.detail.token);
                this.$router.push('/admin/brands');
            } catch (err) {
                let toast = useToast();
                toast.error(err.response.data.msg);
            }
        }
    }
}
</script>