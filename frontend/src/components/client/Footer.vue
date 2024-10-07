<template>
    <div class="bg-m_black-100">
        <div class="sm:container flex lg:flex-row flex-col-reverse items-start justify-between bg-m_black-200 px-10 py-20">
            <div class="lg:w-2/3 w-full flex lg:items-start items-center lg:justify-start justify-center flex-col lg:mt-0 mt-20">
                <router-link to="/" class="flex items-center space-x-4 cursor-pointer">
                    <img class="w-[70px]" src="/icons/logo.png">
                    <h2 class="font-poppins font-bold lg:text-2xl text-xl text-m_green-100 text-white">Owaz Strore</h2>
                </router-link>
                <p class="font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400 my-10">
                    {{ $t('footer.desc') }}
                </p>
                <div class="flex items-center space-x-6">
                    <router-link v-for="item in icons" :key="item.id" :to="item.url">
                        <img :src="item.icon">
                    </router-link>
                </div>
                <p class="font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400 mt-24 mr-10 lg:hidden block">{{ $t('footer.privacy') }}</p>
            </div>
            <div class="w-full flex flex-col items-end">
                <div class="w-full flex flex-row items-center lg:justify-end justify-center lg:pl-24 lg:pr-10">
                    <div class="flex flex-col items-center justify-center">
                        <h3 class="font-sf_pro font-bold lg:text-lg sm:text-base mobile:text-sm text-xs text-white mb-10">{{ $t('footer.company') }}</h3>
                        <div class="flex flex-col items-center space-y-4">
                            <router-link to="/news" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                {{ $t('routes.title4') }}
                            </router-link>
                            <router-link to="/contacts" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                {{ $t('routes.title3') }}
                            </router-link>
                            <router-link to="/brands" class="font-dm_sans font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400">
                                {{ $t('routes.title2') }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <p class="font-sf_pro font-normal lg:text-lg sm:text-base mobile:text-sm text-xs text-m_gray-400 mt-24 mr-10 lg:block hidden">{{ $t('footer.privacy') }}</p>
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
                { id: 1, icon: '/svgs/facebook.svg', url: 'https://www.facebook.com/owazmusic.musicowaz?mibextid=LQQJ4d' },
                { id: 2, icon: '/svgs/instagram.svg', url: 'https://www.instagram.com/owaz.store?igsh=YnNrbGh6dWJmMHAx' },
                { id: 3, icon: '/svgs/tiktok.svg', url: 'https://www.tiktok.com/@owaz_dukan?_r=1&_d=eaml7f0il4k390&sec_uid=MS4wLjABAAAA7sJL7t8eXFlmbwUvLDgxyRlxPYZkuTv-Ob6PIR9IYF4Uxja3IsHKqDuarpfC83ez&share_author_id=7297505601432404994&sharer_language=ru&source=h5_m&u_code=eamla6al6dmdhb&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAA7sJL7t8eXFlmbwUvLDgxyRlxPYZkuTv-Ob6PIR9IYF4Uxja3IsHKqDuarpfC83ez&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7297505601432404994&share_link_id=CFA1E534-1D9F-477F-BE4B-8FF9FFFBD0E3&share_app_id=1233' },
                { id: 4, icon: '/svgs/youtube.svg', url: '/' },
            ]
        }
    }
}
</script>