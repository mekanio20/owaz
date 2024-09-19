<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="w-full flex items-center space-x-4">
                <img crossorigin="anonymous" class="w-[800px] h-[600px] object-contain rounded-xl"
                    :src="`${$uploadUrl}/${banners[0]?.img}`">
                <div class="flex flex-col space-y-4">
                    <img crossorigin="anonymous" class="w-[450px] h-[250px] object-cover rounded-xl"
                        :src="`${$uploadUrl}/${banners[1]?.img}`">
                    <img crossorigin="anonymous" class="w-[450px] h-[250px] object-cover rounded-xl"
                        :src="`${$uploadUrl}/${banners[2]?.img}`">
                </div>
            </div>
            <div class="w-full flex items-center justify-between mt-4 mb-16">
                <div class="flex items-center space-x-4">
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="42.5" r="42.5" fill="#E83D46" fill-opacity="0.15" />
                        <path
                            d="M53.625 50.7917C53.625 51.731 53.2519 52.6318 52.5877 53.296C51.9235 53.9602 51.0226 54.3333 50.0833 54.3333C49.144 54.3333 48.2432 53.9602 47.579 53.296C46.9148 52.6318 46.5417 51.731 46.5417 50.7917C46.5417 49.8524 46.9148 48.9515 47.579 48.2873C48.2432 47.6231 49.144 47.25 50.0833 47.25C51.0226 47.25 51.9235 47.6231 52.5877 48.2873C53.2519 48.9515 53.625 49.8524 53.625 50.7917ZM39.4583 50.7917C39.4583 51.731 39.0852 52.6318 38.421 53.296C37.7568 53.9602 36.856 54.3333 35.9167 54.3333C34.9774 54.3333 34.0765 53.9602 33.4123 53.296C32.7481 52.6318 32.375 51.731 32.375 50.7917C32.375 49.8524 32.7481 48.9515 33.4123 48.2873C34.0765 47.6231 34.9774 47.25 35.9167 47.25C36.856 47.25 37.7568 47.6231 38.421 48.2873C39.0852 48.9515 39.4583 49.8524 39.4583 50.7917Z"
                            stroke="#E83D46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M46.5417 50.7917H39.4584M53.625 50.7917H54.706C55.0176 50.7917 55.1735 50.7917 55.3038 50.7747C55.7728 50.7163 56.2089 50.5032 56.5432 50.1691C56.8775 49.8351 57.0909 49.3991 57.1497 48.9302C57.1667 48.7984 57.1667 48.6426 57.1667 48.3309V44.4167C57.1667 41.9745 56.1965 39.6323 54.4696 37.9054C52.7428 36.1785 50.4006 35.2083 47.9584 35.2083M28.8334 31.6667H43C45.0032 31.6667 46.0048 31.6667 46.6267 32.29C47.25 32.9105 47.25 33.9121 47.25 35.9167V47.9583M28.8334 44.0625V47.25C28.8334 48.5746 28.8334 49.2362 29.1181 49.7292C29.3046 50.0522 29.5729 50.3204 29.8959 50.5069C30.3889 50.7917 31.0505 50.7917 32.375 50.7917M28.8334 35.9167H37.3334M28.8334 40.1667H34.5"
                            stroke="#E83D46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex flex-col space-y-1">
                        <p class="font-sf_pro font-bold text-lg">Free Delivery</p>
                        <p class="font-sf_pro text-base">Free delivery on all orders</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="42.5" r="42.5" fill="#E83D46" fill-opacity="0.15" />
                        <path
                            d="M40.7881 28.9776C41.0684 28.6697 41.4099 28.4236 41.7908 28.2553C42.1717 28.087 42.5836 28 43 28C43.4164 28 43.8283 28.087 44.2092 28.2553C44.5901 28.4236 44.9316 28.6697 45.2119 28.9776L46.7374 30.6527C47.0336 30.9778 47.3979 31.2337 47.8042 31.4019C48.2106 31.5702 48.6491 31.6468 49.0884 31.6263L51.3512 31.5216C51.767 31.502 52.1823 31.5694 52.5706 31.7195C52.9589 31.8696 53.3115 32.0991 53.606 32.3933C53.9005 32.6875 54.1303 33.04 54.2808 33.4281C54.4313 33.8162 54.4991 34.2315 54.4799 34.6473L54.3737 36.9116C54.3532 37.3509 54.4298 37.7894 54.5981 38.1958C54.7664 38.6022 55.0222 38.9664 55.3473 39.2626L57.0224 40.7881C57.3303 41.0684 57.5764 41.4099 57.7447 41.7908C57.913 42.1717 58 42.5836 58 43C58 43.4164 57.913 43.8283 57.7447 44.2092C57.5764 44.5901 57.3303 44.9316 57.0224 45.2119L55.3473 46.7374C55.0222 47.0336 54.7664 47.3979 54.5981 47.8042C54.4298 48.2106 54.3532 48.6491 54.3737 49.0884L54.4784 51.3512C54.498 51.767 54.4306 52.1823 54.2805 52.5706C54.1304 52.9589 53.9009 53.3115 53.6067 53.606C53.3125 53.9005 52.96 54.1303 52.5719 54.2808C52.1838 54.4313 51.7685 54.4991 51.3527 54.4799L49.0884 54.3737C48.6491 54.3532 48.2106 54.4298 47.8042 54.5981C47.3979 54.7664 47.0336 55.0222 46.7374 55.3473L45.2119 57.0224C44.9316 57.3303 44.5901 57.5764 44.2092 57.7447C43.8283 57.913 43.4164 58 43 58C42.5836 58 42.1717 57.913 41.7908 57.7447C41.4099 57.5764 41.0684 57.3303 40.7881 57.0224L39.2626 55.3473C38.9664 55.0222 38.6022 54.7664 38.1958 54.5981C37.7894 54.4298 37.3509 54.3532 36.9116 54.3737L34.6488 54.4784C34.233 54.498 33.8177 54.4306 33.4294 54.2805C33.0411 54.1304 32.6885 53.9009 32.394 53.6067C32.0995 53.3125 31.8697 52.96 31.7192 52.5719C31.5687 52.1838 31.5009 51.7685 31.5201 51.3527L31.6263 49.0884C31.6468 48.6491 31.5702 48.2106 31.4019 47.8042C31.2337 47.3979 30.9778 47.0336 30.6527 46.7374L28.9776 45.2119C28.6697 44.9316 28.4236 44.5901 28.2553 44.2092C28.087 43.8283 28 43.4164 28 43C28 42.5836 28.087 42.1717 28.2553 41.7908C28.4236 41.4099 28.6697 41.0684 28.9776 40.7881L30.6527 39.2626C30.9778 38.9664 31.2337 38.6022 31.4019 38.1958C31.5702 37.7894 31.6468 37.3509 31.6263 36.9116L31.5216 34.6488C31.502 34.233 31.5694 33.8177 31.7195 33.4294C31.8696 33.0411 32.0991 32.6885 32.3933 32.394C32.6875 32.0995 33.04 31.8697 33.4281 31.7192C33.8162 31.5687 34.2315 31.5009 34.6473 31.5201L36.9116 31.6263C37.3509 31.6468 37.7894 31.5702 38.1958 31.4019C38.6022 31.2337 38.9664 30.9778 39.2626 30.6527L40.7881 28.9776Z"
                            stroke="#E83D46" stroke-width="2.8" />
                        <path d="M38.5133 43.0002L41.5044 45.9913L47.4867 40.0091" stroke="#E83D46" stroke-width="2.8"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex flex-col space-y-1">
                        <p class="font-sf_pro font-bold text-lg">Guarantee</p>
                        <p class="font-sf_pro text-base">12 months guarantee</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="42.5" r="42.5" fill="#E83D46" fill-opacity="0.15" />
                        <g clip-path="url(#clip0_190_20)">
                            <path
                                d="M51.781 28.125H43.6177C43.3639 28.1248 43.1204 28.2251 42.9403 28.4039L26.6203 44.7199C26.2631 45.0789 26.0625 45.5648 26.0625 46.0713C26.0625 46.5778 26.2631 47.0636 26.6203 47.4227L34.3898 55.1922C34.749 55.5495 35.235 55.7501 35.7415 55.7501C36.2481 55.7501 36.7341 55.5495 37.0932 55.1922L53.4086 38.8828C53.5874 38.7028 53.6877 38.4592 53.6875 38.2055V30.0375C53.6887 29.7865 53.6403 29.5378 53.545 29.3056C53.4497 29.0734 53.3094 28.8623 53.1322 28.6845C52.955 28.5068 52.7444 28.3658 52.5125 28.2698C52.2806 28.1738 52.032 28.1246 51.781 28.125Z"
                                stroke="#E83D46" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M48.375 35.5625C47.9547 35.5625 47.5439 35.4379 47.1944 35.2044C46.845 34.9709 46.5726 34.639 46.4118 34.2507C46.2509 33.8624 46.2088 33.4351 46.2908 33.0229C46.3728 32.6107 46.5752 32.2321 46.8724 31.9349C47.1696 31.6377 47.5482 31.4353 47.9604 31.3533C48.3726 31.2713 48.7999 31.3134 49.1882 31.4743C49.5765 31.6351 49.9084 31.9075 50.1419 32.2569C50.3754 32.6064 50.5 33.0172 50.5 33.4375C50.5 34.0011 50.2761 34.5416 49.8776 34.9401C49.4791 35.3386 48.9386 35.5625 48.375 35.5625Z"
                                fill="#E83D46" />
                            <path
                                d="M40.2734 57.875L57.6719 40.4766C57.7584 40.3893 57.8265 40.2856 57.8721 40.1715C57.9178 40.0574 57.94 39.9353 57.9375 39.8125V31.3125"
                                stroke="#E83D46" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_190_20">
                                <rect width="34" height="34" fill="white" transform="translate(25 26)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="flex flex-col space-y-1">
                        <p class="font-sf_pro font-bold text-lg">The best prices</p>
                        <p class="font-sf_pro text-base">The cheapest prices</p>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42.5" cy="42.5" r="42.5" fill="#E83D46" fill-opacity="0.15" />
                        <path
                            d="M35.5625 37.6875C35.5625 35.715 36.3461 33.8232 37.7409 32.4284C39.1357 31.0336 41.0275 30.25 43 30.25C44.9725 30.25 46.8643 31.0336 48.2591 32.4284C49.6539 33.8232 50.4375 35.715 50.4375 37.6875C50.4375 37.9693 50.5494 38.2395 50.7487 38.4388C50.948 38.6381 51.2182 38.75 51.5 38.75C51.7818 38.75 52.052 38.6381 52.2513 38.4388C52.4506 38.2395 52.5625 37.9693 52.5625 37.6875C52.5624 36.0567 52.1452 34.453 51.3505 33.0289C50.5559 31.6048 49.4103 30.4076 48.0225 29.551C46.6348 28.6945 45.0511 28.2071 43.4218 28.1351C41.7926 28.0632 40.1721 28.4091 38.7143 29.14C37.2564 29.8709 36.0097 30.9625 35.0927 32.311C34.1756 33.6595 33.6187 35.2202 33.4748 36.8446C33.3309 38.4691 33.6049 40.1033 34.2706 41.592C34.9363 43.0808 35.9718 44.3745 37.2784 45.3503C38.3989 46.1873 39.6894 46.7683 41.0588 47.0524C41.249 47.4791 41.5746 47.8312 41.9851 48.0542C42.3955 48.2773 42.8681 48.3589 43.3296 48.2863C43.7911 48.2138 44.2159 47.9912 44.5381 47.653C44.8604 47.3147 45.0622 46.8797 45.1124 46.4153C45.1625 45.9508 45.0582 45.4827 44.8156 45.0835C44.573 44.6843 44.2056 44.3761 43.7702 44.2067C43.3348 44.0373 42.8558 44.0161 42.4071 44.1464C41.9585 44.2767 41.5653 44.5511 41.2883 44.9274C39.658 44.5418 38.2056 43.6172 37.1664 42.3032C36.1272 40.9891 35.562 39.3628 35.5625 37.6875ZM36.625 37.6875C36.6254 36.5147 36.9493 35.3648 37.5612 34.3642C38.173 33.3636 39.0489 32.5512 40.0927 32.0163C41.1364 31.4815 42.3074 31.2449 43.4769 31.3326C44.6465 31.4204 45.7691 31.829 46.7213 32.5136C47.6736 33.1983 48.4185 34.1323 48.8742 35.2129C49.3298 36.2936 49.4786 37.479 49.304 38.6387C49.1294 39.7985 48.6383 40.8876 47.8847 41.7862C47.1311 42.6848 46.1442 43.3581 45.0326 43.7321C44.4609 43.2589 43.7421 43 43 43C42.2276 43 41.5199 43.2752 40.9674 43.7321C39.7017 43.3063 38.6017 42.4938 37.8226 41.4093C37.0434 40.3247 36.6245 39.0229 36.625 37.6875ZM43 33.4375C41.8728 33.4375 40.7918 33.8853 39.9948 34.6823C39.1978 35.4793 38.75 36.5603 38.75 37.6875C38.75 38.8147 39.1978 39.8957 39.9948 40.6927C40.7918 41.4897 41.8728 41.9375 43 41.9375C44.1272 41.9375 45.2082 41.4897 46.0052 40.6927C46.8022 39.8957 47.25 38.8147 47.25 37.6875C47.25 36.5603 46.8022 35.4793 46.0052 34.6823C45.2082 33.8853 44.1272 33.4375 43 33.4375ZM33.9688 45.125H35.4127C36.2668 45.9976 37.2649 46.7165 38.3632 47.25H33.9688C33.5461 47.25 33.1407 47.4179 32.8418 47.7168C32.5429 48.0157 32.375 48.4211 32.375 48.8438V49.375C32.375 50.9401 33.3737 52.5083 35.3064 53.7376C37.2264 54.9595 39.9432 55.75 42.9989 55.75C46.0568 55.75 48.7736 54.9595 50.6936 53.7376C52.6273 52.5094 53.625 50.939 53.625 49.375V48.8438C53.625 48.4211 53.4571 48.0157 53.1582 47.7168C52.8593 47.4179 52.4539 47.25 52.0312 47.25H46.0069C46.2499 46.5625 46.2499 45.8125 46.0069 45.125H52.0312C53.0175 45.125 53.9634 45.5168 54.6608 46.2142C55.3582 46.9116 55.75 47.8575 55.75 48.8438V49.375C55.75 51.9176 54.1318 54.0681 51.8347 55.5301C49.5248 57.0006 46.3979 57.875 43 57.875C39.6021 57.875 36.4762 57.0006 34.1653 55.5301C31.8682 54.0681 30.25 51.9176 30.25 49.375V48.8438C30.25 47.8575 30.6418 46.9116 31.3392 46.2142C32.0366 45.5168 32.9825 45.125 33.9688 45.125Z"
                            fill="#E83D46" />
                    </svg>
                    <div class="flex flex-col space-y-1">
                        <p class="font-sf_pro font-bold text-lg">Online support 24/7</p>
                        <p class="font-sf_pro text-base">24 hours online support</p>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <h2 class="font-sf_pro font-bold text-4xl">Browse by category</h2>
                <div class="flex items-center flex-wrap py-10">
                    <router-link class="py-2 pl-6 mr-5 mb-5 bg-m_gray-100 rounded-xl flex items-center"
                        v-for="item in categories" :key="item.id" :to="`/`">
                        <p class="font-sf_pro font-bold text-lg text-nowrap mr-14">{{ item.name_en }}</p>
                        <div class="w-[100px]">
                            <img crossorigin="anonymous" class="w-full h-full object-cover"
                                :src="`${$uploadUrl}/${item?.img}`">
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="my-10">
                <div class="w-full flex items-center justify-between">
                    <h2 class="font-sf_pro font-bold text-4xl mb-10">The best offers for you</h2>
                </div>
                <div class="flex items-center space-x-8">
                    <div v-for="item in offers.rows" :key="item.id"
                        class="flex items-start flex-col space-y-4 w-[300px]">
                        <div class="w-full relative bg-m_gray-100 rounded-xl">
                            <div
                                class="absolute left-0 top-4 bg-white px-4 py-2 rounded-e-lg font-sf_pro font-bold text-m_red-200 text-sm">
                                {{ item.discount_price }} {{ item.discount_type == 'manat' ? 'tmt' : '%' }}
                            </div>
                            <img class="w-full h-full mt-4" crossorigin="anonymous"
                                :src="`${$uploadUrl}/${item.product_images[0].img}`">
                        </div>
                        <p class="font-sf_pro font-medium text-lg">{{ item.name_en }}</p>
                        <div class="flex items-center space-x-2">
                            <span class="font-sf_pro font-bold text-m_red-200">{{ item.final_price }} tmt</span>
                            <span class="font-sf_pro text-m_gray-300 line-through">{{ item.sale_price }} tmt</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full relative mt-20 mb-10">
                <img class="w-full h-full object-cover" src="/images/big-banner.png">
                <div class="absolute inset-0 flex justify-center items-center">
                    <div class="flex items-center flex-col space-y-4">
                        <div class="mb-5 text-center">
                            <p class="font-sf_pro font-bold text-4xl mb-3">New Keyboards Collection</p>
                            <p class="font-sf_pro text-lg text-m_gray-200">New the best and latest keyboard collection
                            </p>
                        </div>
                        <router-link to="/"
                            class="px-8 py-2 rounded-3xl bg-black text-white font-sf_pro font-bold text-lg">
                            Explore Now
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div v-for="item in category_products.rows" :key="item.id" class="w-full flex flex-col mb-20">
                    <div v-if="item.products.length > 0" class="w-full flex items-center justify-between">
                        <h2 class="font-sf_pro font-bold text-4xl mb-10">{{ item.name_en }}</h2>
                    </div>
                    <div v-for="product in item.products" :key="product.id"
                        class="flex items-start flex-col space-y-4 w-[300px]">
                        <div class="w-full bg-m_gray-100 rounded-xl">
                            <img class="w-full h-full mt-4" crossorigin="anonymous"
                                :src="`${$uploadUrl}/${product.product_images[0].img}`">
                        </div>
                        <p class="font-sf_pro font-medium text-lg">{{ product.name_en }}</p>
                        <div class="flex items-center space-x-2">
                            <span class="font-sf_pro font-bold text-m_red-200">{{ product.final_price }} tmt</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full mb-20">
                <h2 class="font-sf_pro font-bold text-4xl mb-10">Our top brands</h2>
                <div class="grid grid-cols-5 gap-x-6">
                    <div class="bg-m_gray-100 rounded-lg" v-for="item in brands.rows" :key="item.id">
                        <img class="p-16" crossorigin="anonymous" :src="`${$uploadUrl}/${item.img}`">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/client/Navbar.vue';
import api from '@/api/index'
export default {
    name: "Home",
    components: {
        Navbar
    },
    data() {
        return {
            banners: null,
            categories: null,
            offers: null,
            brands: null,
            category_products: null,
        }
    },
    created() {
        this.allBanners(),
            this.allCategories(),
            this.offerProducts(),
            this.categoryProducts(),
            this.allBrands()
    },
    methods: {
        async allBanners() {
            const data = await api.get('/banners')
            this.banners = data.data.detail.rows
        },
        async allCategories() {
            const data = await api.get('/categories')
            this.categories = data.data.detail.rows
        },
        async offerProducts() {
            const data = await api.get('/products?dis=true')
            this.offers = data.data.detail
        },
        async categoryProducts() {
            const data = await api.get('/category/products')
            this.category_products = data.data.detail
        },
        async allBrands() {
            const data = await api.get('/brands')
            this.brands = data.data.detail
        }
    }
}
</script>