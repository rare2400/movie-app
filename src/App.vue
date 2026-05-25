<script setup>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="app">
        <AppHeader />
        <main class="main-content">
            <RouterView />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
}
</style>
