<template>
    <div class="!w-full !h-full">
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
    name: "App",
    components: {
        RouterView
    }
}
</script>