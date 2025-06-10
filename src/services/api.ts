import axios from 'axios';

const API_BASE = process.env.NODE_ENV === 'production' ? '/articles' : '/articles';

export default {
    async getArticles() {
        const response = await axios.get(`${API_BASE}/index.json`);
        return response.data;
    },
    async getArticleContent(id: string) {
        const response = await axios.get(`${API_BASE}/${id}.html`);
        return response.data;
    }
};
