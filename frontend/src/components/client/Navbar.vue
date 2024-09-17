<template>
    <div class="container py-5">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <div class="w-14">
                    <img class="w-full h-full object-cover" src="/icons/logo.png">
                </div>
                <h1 class="font-poppins font-semibold text-xl text-m_red-100 text-nowrap">Owaz Store</h1>
            </div>
            <form class="flex-1 mx-20">
                <label
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 end-0 flex items-center ps-3 pr-10 pointer-events-none">
                        <svg class="w-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border-none rounded-xl placeholder:text-m_gray-200 bg-m_gray-100 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search Mockups, Logos..." required />
                </div>
            </form>
            <div class="flex items-center space-x-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8_59)">
                        <path
                            d="M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1M12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1M12 23C15 23 16 18 16 12C16 6 15 1 12 1M12 23C9 23 8 18 8 12C8 6 9 1 12 1M2 16H22M2 8H22"
                            stroke="black" stroke-width="2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_8_59">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <router-link to="/"
                    class="px-8 py-2 xl:text-lg text-base text-nowrap font-sf_pro font-semibold bg-m_red-200 rounded-3xl hover:text-m_gray-300 duration-300 text-white">
                    Contact us
                </router-link>
            </div>
        </div>
        <div class="flex items-center pt-10 space-x-8 overflow-x-auto">
            <router-link v-for="item in categories" :key="item.id" :to="item.route" class="font-sf_pro font-medium uppercase text-lg text-black">
                {{ item.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            searchQuery: '',
            categories: [
                { id: 1, name: 'About us', route: '/about' },
                { id: 2, name: 'Brands', route: '/brands' },
                { id: 3, name: 'Effects and Pedals', route: '/' },
                { id: 4, name: 'Pro Audio', route: '/' },
                { id: 5, name: 'DJ and Lighting Gear', route: '/' },
                { id: 6, name: 'Acoustic Guitars', route: '/' },
                { id: 7, name: 'Acoustic Guitars', route: '/' },
            ]
        };
    },
    methods: {
        performSearch() {
            console.log('Searching for:', this.searchQuery);
        }
    }
}
</script>