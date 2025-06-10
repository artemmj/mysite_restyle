<template>
    <div class="home">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else>
        <ArticleCard 
            v-for="article in articles" 
            :key="article.id" 
            :article="article"
        />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ArticleCard from '@/components/ArticleCard.vue';
import api from '@/services/api';

export type Article = {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string;
};

const articles = ref<Article[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
    try {
        articles.value = await api.getArticles();
    } catch (err) {
        error.value = 'Failed to load articles';
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped lang="scss">
.home {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.loading, .error {
    text-align: center;
    font-size: 1.2rem;
    padding: 2rem;
    color: #7f8c8d;
}
</style>
