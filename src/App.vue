<template>
    <div class="app">
        <AppHeader />
        <main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                <component :is="Component" />
                </transition>
            </router-view>
        </main>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style lang="scss">
@import '@/assets/base.scss';

.app {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
    padding: 2rem 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
