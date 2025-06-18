<template>
    <article 
    class="article-card"
    @click="$router.push(`/article/${article.id}`)"
    >
        <h2>{{ article.title }}</h2>
        <div class="meta">
            <p>{{ article.date }}</p>
            <p>{{ article.tags }}</p>
        </div>
        <div class="short-content">{{ article.excerpt }}</div>
    </article>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Article } from '../views/HomeView.vue'

defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true
    }
});
</script>

<style scoped lang="scss">
.article-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    h2 {
        color: #0062c3;
        margin-bottom: 0.5rem;
    }
    .meta {
        font-size: 0.75rem;
        line-height: 1.7;
        margin-bottom: 1rem;
    }
    .short-content {
        color: black;
        font-size: 0.8rem;
    }
}

@media (max-width: 768px) {
    .article-card {
        padding: 1rem;
    }
}
</style>
