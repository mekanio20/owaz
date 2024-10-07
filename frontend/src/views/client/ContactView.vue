<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            <div class="mt-10 flex items-center space-x-2">
                <router-link to="/"
                    class="font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">{{ $t('routes.title1') }}</router-link>
                <span class="md:text-xl sm:text-lg text-base text-m_gray-200">></span>
                <router-link to="/contacts"
                    class="font-sf_pro font-normal md:text-xl sm:text-lg text-base text-m_gray-200">{{ $t('routes.title3') }}</router-link>
            </div>
            <div class="flex justify-center items-center my10">
                <form @submit.prevent="addContact" class="bg-white p-8 rounded-lg lg:w-1/2 w-full">
                    <h2 class="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-10">{{ $t('routes.title3') }}</h2>
                    <div class="mb-6">
                        <label for="fullName" class="block font-sf_pro text-gray-700">{{ $t('contact.fullname') }}</label>
                        <input id="fullName" type="text" v-model="fullname"
                            class="mt-2 w-full rounded-lg p-3 bg-m_gray-100 border-none focus:outline-none" />
                    </div>
                    <div class="mb-6">
                        <label for="phoneNumber" class="block font-sf_pro text-gray-700">{{ $t('contact.phone') }}</label>
                        <input id="phoneNumber" type="text" v-model="phone"
                            class="mt-2 w-full rounded-lg p-3 bg-m_gray-100 border-none focus:outline-none"
                            value="+993" />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block font-sf_pro text-gray-700">{{ $t('contact.message') }}</label>
                        <textarea id="message" rows="4" v-model="message"
                            class="mt-2 w-full rounded-lg p-3 bg-m_gray-100 border-none focus:outline-none"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full bg-red-500 text-white font-bold py-3 rounded hover:bg-red-600 transition duration-300">
                        {{ $t('contact.send') }}
                    </button>
                </form>
            </div>
            <div
                class="w-full px-20 py-6 mb-20 bg-m_gray-500 rounded-lg flex lg:flex-row flex-col lg:space-y-0 space-y-8 items-center justify-between">
                <a href="tel:+99365863633" class="flex items-center space-x-4">
                    <div class="w-full">
                        <svg class="lg:w-[24px] w-[20px]" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                                stroke="#E83D46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p class="font-sf_pro font-bold lg:text-base text-sm text-nowrap">+99365863633</p>
                </a>
                <div class="flex items-center space-x-4">
                    <div class="w-full">
                        <svg class="lg:w-[24px] w-[20px]" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_238_174)">
                                <path
                                    d="M19.25 9.16667C19.25 15.5833 11 21.0833 11 21.0833C11 21.0833 2.75 15.5833 2.75 9.16667C2.75 6.97863 3.61919 4.88021 5.16637 3.33304C6.71354 1.78586 8.81196 0.916667 11 0.916667C13.188 0.916667 15.2865 1.78586 16.8336 3.33304C18.3808 4.88021 19.25 6.97863 19.25 9.16667Z"
                                    stroke="#E83D46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M11 11.9167C12.5188 11.9167 13.75 10.6854 13.75 9.16667C13.75 7.64788 12.5188 6.41667 11 6.41667C9.48122 6.41667 8.25 7.64788 8.25 9.16667C8.25 10.6854 9.48122 11.9167 11 11.9167Z"
                                    stroke="#E83D46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_238_174">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p class="font-sf_pro font-bold lg:text-base text-sm text-nowrap">
                        Turkmenistan, Ataturk 79
                    </p>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="w-full flex items-center lg:space-x-10 space-x-6">
                        <a href="https://www.instagram.com/owaz.store?igsh=YnNrbGh6dWJmMHAx">
                            <svg class="lg:w-[24px] w-[20px]" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_238_177)">
                                    <path
                                        d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
                                        fill="url(#paint0_radial_238_177)" />
                                    <path
                                        d="M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z"
                                        fill="url(#paint1_radial_238_177)" />
                                    <path
                                        d="M12.0008 2.625C9.45478 2.625 9.13519 2.63616 8.13525 2.68163C7.13719 2.72738 6.45591 2.88534 5.85984 3.11719C5.24316 3.35663 4.72013 3.67697 4.19906 4.19822C3.67753 4.71937 3.35719 5.24241 3.117 5.85881C2.8845 6.45506 2.72634 7.13663 2.68144 8.13422C2.63672 9.13425 2.625 9.45394 2.625 12.0001C2.625 14.5463 2.63625 14.8648 2.68163 15.8648C2.72756 16.8628 2.88553 17.5441 3.11719 18.1402C3.35681 18.7568 3.67716 19.2799 4.19841 19.8009C4.71938 20.3225 5.24241 20.6436 5.85862 20.883C6.45516 21.1148 7.13653 21.2728 8.13441 21.3186C9.13444 21.364 9.45375 21.3752 11.9997 21.3752C14.5461 21.3752 14.8646 21.364 15.8646 21.3186C16.8626 21.2728 17.5447 21.1148 18.1412 20.883C18.7576 20.6436 19.2799 20.3225 19.8007 19.8009C20.3223 19.2799 20.6425 18.7568 20.8828 18.1404C21.1133 17.5441 21.2715 16.8626 21.3184 15.8649C21.3633 14.865 21.375 14.5463 21.375 12.0001C21.375 9.45394 21.3633 9.13444 21.3184 8.13441C21.2715 7.13634 21.1133 6.45516 20.8828 5.85909C20.6425 5.24241 20.3223 4.71937 19.8007 4.19822C19.2793 3.67678 18.7578 3.35644 18.1406 3.11728C17.543 2.88534 16.8613 2.72728 15.8632 2.68163C14.8632 2.63616 14.5448 2.625 11.9979 2.625H12.0008ZM11.1598 4.31447C11.4095 4.31409 11.688 4.31447 12.0008 4.31447C14.5041 4.31447 14.8007 4.32347 15.7892 4.36838C16.7032 4.41019 17.1994 4.56291 17.5298 4.69125C17.9674 4.86113 18.2793 5.06428 18.6072 5.3925C18.9353 5.72063 19.1384 6.03309 19.3088 6.47062C19.4371 6.80062 19.59 7.29675 19.6316 8.21081C19.6765 9.19913 19.6863 9.49594 19.6863 11.9979C19.6863 14.4999 19.6765 14.7968 19.6316 15.7851C19.5898 16.6991 19.4371 17.1953 19.3088 17.5253C19.1389 17.9629 18.9353 18.2744 18.6072 18.6023C18.2791 18.9305 17.9676 19.1335 17.5298 19.3035C17.1997 19.4324 16.7032 19.5848 15.7892 19.6266C14.8009 19.6715 14.5041 19.6812 12.0008 19.6812C9.49753 19.6812 9.20081 19.6715 8.21259 19.6266C7.29853 19.5844 6.80241 19.4317 6.47166 19.3033C6.03422 19.1333 5.72166 18.9303 5.39353 18.6022C5.06541 18.274 4.86234 17.9623 4.692 17.5246C4.56366 17.1945 4.41075 16.6984 4.36913 15.7843C4.32422 14.796 4.31522 14.4992 4.31522 11.9956C4.31522 9.492 4.32422 9.19678 4.36913 8.20847C4.41094 7.29441 4.56366 6.79828 4.692 6.46781C4.86197 6.03028 5.06541 5.71781 5.39363 5.38969C5.72184 5.06156 6.03422 4.85841 6.47175 4.68816C6.80222 4.55925 7.29853 4.40691 8.21259 4.36491C9.07744 4.32581 9.41259 4.31409 11.1598 4.31212V4.31447ZM17.0052 5.87109C16.3841 5.87109 15.8802 6.37453 15.8802 6.99572C15.8802 7.61681 16.3841 8.12072 17.0052 8.12072C17.6263 8.12072 18.1302 7.61681 18.1302 6.99572C18.1302 6.37463 17.6263 5.87072 17.0052 5.87072V5.87109ZM12.0008 7.18556C9.34209 7.18556 7.18641 9.34125 7.18641 12.0001C7.18641 14.6589 9.34209 16.8136 12.0008 16.8136C14.6597 16.8136 16.8146 14.6589 16.8146 12.0001C16.8146 9.34134 14.6595 7.18556 12.0007 7.18556H12.0008ZM12.0008 8.87503C13.7267 8.87503 15.1259 10.2741 15.1259 12.0001C15.1259 13.7259 13.7267 15.1252 12.0008 15.1252C10.275 15.1252 8.87588 13.7259 8.87588 12.0001C8.87588 10.2741 10.2749 8.87503 12.0008 8.87503Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <radialGradient id="paint0_radial_238_177" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(6.375 25.8485) rotate(-90) scale(23.7858 22.1227)">
                                        <stop stop-color="#FFDD55" />
                                        <stop offset="0.1" stop-color="#FFDD55" />
                                        <stop offset="0.5" stop-color="#FF543E" />
                                        <stop offset="1" stop-color="#C837AB" />
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_238_177" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(-4.02009 1.72884) rotate(78.681) scale(10.6324 43.827)">
                                        <stop stop-color="#3771C8" />
                                        <stop offset="0.128" stop-color="#3771C8" />
                                        <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                    </radialGradient>
                                    <clipPath id="clip0_238_177">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/@owaz_dukan?_r=1&_d=eaml7f0il4k390&sec_uid=MS4wLjABAAAA7sJL7t8eXFlmbwUvLDgxyRlxPYZkuTv-Ob6PIR9IYF4Uxja3IsHKqDuarpfC83ez&share_author_id=7297505601432404994&sharer_language=ru&source=h5_m&u_code=eamla6al6dmdhb&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAA7sJL7t8eXFlmbwUvLDgxyRlxPYZkuTv-Ob6PIR9IYF4Uxja3IsHKqDuarpfC83ez&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7297505601432404994&share_link_id=CFA1E534-1D9F-477F-BE4B-8FF9FFFBD0E3&share_app_id=1233">
                            <svg class="lg:w-[24px] w-[20px]" viewBox="0 0 21 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_238_182)">
                                    <path
                                        d="M15.5631 8.64174C17.0953 9.74615 18.9723 10.396 20.9995 10.396V6.46245C20.6158 6.46261 20.2332 6.42222 19.8578 6.34196V9.43821C17.8307 9.43821 15.9539 8.78847 14.4214 7.68414V15.7114C14.4214 19.7271 11.193 22.9821 7.21089 22.9821C5.72506 22.9821 4.34398 22.5292 3.19678 21.7524C4.50616 23.1024 6.33218 23.9398 8.35228 23.9398C12.3347 23.9398 15.5632 20.6848 15.5632 16.6689V8.64174H15.5631ZM16.9715 4.6733C16.1885 3.8107 15.6743 2.69594 15.5631 1.4635V0.9576H14.4812C14.7535 2.52397 15.6825 3.86218 16.9715 4.6733ZM5.71546 18.6709C5.27794 18.0926 5.04145 17.3849 5.04256 16.6574C5.04256 14.8208 6.51921 13.3317 8.34104 13.3317C8.6805 13.3315 9.01797 13.384 9.34157 13.4875V9.46601C8.96341 9.41379 8.5818 9.39153 8.20036 9.39972V12.5298C7.87659 12.4263 7.53895 12.3738 7.19933 12.3741C5.37758 12.3741 3.90102 13.8631 3.90102 15.6999C3.90102 16.9987 4.63905 18.1231 5.71546 18.6709Z"
                                        fill="#FF004F" />
                                    <path
                                        d="M14.4213 7.68406C15.9539 8.78839 17.8305 9.43812 19.8577 9.43812V6.34188C18.7261 6.09881 17.7245 5.50262 16.9713 4.6733C15.6822 3.8621 14.7534 2.52389 14.481 0.9576H11.6392V16.6687C11.6327 18.5004 10.1586 19.9834 8.34075 19.9834C7.26958 19.9834 6.31785 19.4686 5.71517 18.6708C4.63892 18.1231 3.9008 16.9986 3.9008 15.7C3.9008 13.8633 5.37737 12.3742 7.19912 12.3742C7.54816 12.3742 7.88457 12.4289 8.20014 12.5299V9.39981C4.28791 9.48133 1.1416 12.7046 1.1416 16.6688C1.1416 18.6478 1.92508 20.4417 3.19673 21.7525C4.34394 22.5292 5.72493 22.9823 7.21085 22.9823C11.1931 22.9823 14.4214 19.727 14.4214 15.7114L14.4213 7.68406Z"
                                        fill="black" />
                                    <path
                                        d="M19.8577 6.34179V5.50477C18.8373 5.50627 17.8371 5.21813 16.9714 4.6733C17.7377 5.51927 18.7468 6.10265 19.8577 6.34196M14.481 0.957517C14.455 0.807854 14.4351 0.657193 14.4213 0.505903V0H10.4974V15.7113C10.4911 17.5428 9.01704 19.0258 7.19906 19.0258C6.68368 19.0266 6.17534 18.905 5.71512 18.671C6.3178 19.4686 7.26953 19.9833 8.34069 19.9833C10.1585 19.9833 11.6328 18.5004 11.6392 16.6688V0.9576L14.481 0.957517ZM8.20034 9.39972V8.5085C7.87245 8.46333 7.54189 8.44072 7.21096 8.4408C3.22834 8.4408 0 11.696 0 15.7113C0 18.2287 1.26878 20.4473 3.19684 21.7524C1.92519 20.4416 1.14171 18.6476 1.14171 16.6687C1.14171 12.7046 4.28794 9.48124 8.20034 9.39972Z"
                                        fill="#00F2EA" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_238_182">
                                        <rect width="21" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from '@/components/client/Navbar.vue';
import Footer from '@/components/client/Footer.vue';
import { useToast } from 'vue-toastification';
import api from '@/api/index'
export default {
    name: "Contacts",
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            fullname: null,
            phone: null,
            message: null
        }
    },
    methods: {
        async addContact() {
            try {
                const postData = {
                    fullname: this.fullname,
                    phone: this.phone,
                    message: this.message
                }
                const data = await api.post('/add/contact', postData)
                let toast = useToast();
                if (data.data.status === 201) {
                    toast.success(data.data.msg);
                    this.fullname = null
                    this.phone = null
                    this.message = null
                } else {
                    toast.error(data.data.msg);
                }
            } catch (error) {
                let toast = useToast();
                toast.error(error.response.data.msg);
            }
        }
    }
}
</script>