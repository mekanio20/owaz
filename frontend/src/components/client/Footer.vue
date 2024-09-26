<template>
    <div class="bg-m_black-100">
        <div class="sm:container flex lg:flex-row flex-col-reverse items-start justify-between bg-m_black-200 px-10 py-20">
            <div class="lg:w-2/3 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 mt-20">
                <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                    <img class="w-[40px]" src="/icons/logo.png">
                    <h2 class="font-poppins font-bold lg:text-2xl text-xl text-m_green-100 text-white">Owaz Strore</h2>
                </router-link>
                <p class="font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400 my-10">
                    Owaz is the store selling high quality musical instruments.
                </p>
                <div class="flex items-center space-x-6">
                    <router-link v-for="item in icons" :key="item.id" :to="item.url">
                        <img :src="item.icon">
                    </router-link>
                </div>
                <div class="font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400 mt-24 mr-10 lg:hidden block">All Rights Reserved | <span class="text-m_green-100 underline">Terms and Conditions | Privacy Policy</span></div>
            </div>
            <div class="w-full flex flex-col items-end">
                <div class="w-full flex flex-row items-center lg:justify-end justify-center lg:pl-24 lg:pr-10">
                    <!-- <div class="flex flex-col items-center justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base mobile:text-sm text-xs text-white mb-10">Product</h3>
                        <div class="flex flex-col items-center space-y-4">
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Features
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Pricing
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Case studies
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Reviews
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Updates
                            </router-link>
                        </div>
                    </div> -->
                    <div class="flex flex-col items-center justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base mobile:text-sm text-xs text-white mb-10">Company</h3>
                        <div class="flex flex-col items-center space-y-4">
                            <router-link to="/news" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                News
                            </router-link>
                            <router-link to="/contacts" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Contact us
                            </router-link>
                            <router-link to="/brands" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Brands
                            </router-link>
                        </div>
                    </div>
                    <!-- <div class="flex flex-col items-center justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base mobile:text-sm text-xs text-white mb-10">Support</h3>
                        <div class="flex flex-col items-center space-y-4">
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Getting started
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Help center
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Server status
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Report a bug
                            </router-link>
                            <router-link to="#" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                Chat support
                            </router-link>
                        </div>
                    </div> -->
                </div>
                <div class="font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400 mt-24 mr-10 lg:block hidden">All Rights Reserved | <span class="text-m_green-100 underline">Terms and Conditions | Privacy Policy</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            icons: [
                { id: 1, icon: '/svgs/facebook.svg', url: '/' },
                { id: 2, icon: '/svgs/instagram.svg', url: '/' },
                { id: 3, icon: '/svgs/linkedin.svg', url: '/' },
                { id: 4, icon: '/svgs/youtube.svg', url: '/' },
            ]
        }
    }
}
</script>