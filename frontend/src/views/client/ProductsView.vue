<template>
    <div class="w-full">
        <Navbar />
        <div class="container">
            
        </div>
    </div>
    <Footer />
</template>

<script>
import Navbar from '@/components/client/Navbar.vue';
import Footer from '@/components/client/Footer.vue';
export default {
    name: "Products",
    components: {
        Navbar,
        Footer
    }
}
</script>