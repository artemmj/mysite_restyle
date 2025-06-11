<template>
    <div class="article-view" v-prism>
        <div class="article">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else v-html="content" class="content"></div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/services/api';

const route = useRoute();
const content = ref('');
const loading = ref(true);
const error = ref<string | null>(null);

const loadArticle = async (id: string) => {
    try {
        content.value = await api.getArticleContent(id);
    } catch (err) {
        error.value = 'Article not found';
    } finally {
        loading.value = false;
    }
};

onMounted(() => loadArticle(route.params.id as string));
watch(() => route.params.id, (newId) => loadArticle(newId as string));
onMounted(() => {
    if (route.params.id) {
        loadArticle(route.params.id as string).then(() => {
        // Добавьте этот код для перерисовки Prism после загрузки контента
        setTimeout(() => {
            window.Prism?.highlightAll();
        }, 100);
        });
    }
});
</script>

<style scoped lang="scss">
.article {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.content {
    :deep() {
            h1, h2, h3 {
            color: #2c3e50;
            margin-top: 1.5em;
        }
        p {
            line-height: 1.8;
            margin-bottom: 1.5rem;
            color: #34495e;
        }
        ul {
            margin: 1.5rem;
        }
        .section-title {
            text-align: center;
            padding: 10px;
            border-style: solid;
            margin-bottom: 1.5rem;
        }
        .article-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
        pre[class*="language-"] {
            margin: 1.5rem 0;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            code {
                font-family:'Courier New', Courier, monospace;
                font-size: 0.9rem;
                line-height: 1.5;
            }
        }
    }
}
</style>
