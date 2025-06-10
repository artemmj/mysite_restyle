<template>
    <header class="header">
        <router-link to="/" class="logo">fullstackdevblog.ru</router-link>
        <nav>
            <router-link to="/about">Про сайт</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: #2c3e50;
    color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);

    .logo {
        font-size: 1.8rem;
        font-weight: 700;
        color: #42b983;
        text-decoration: none;
    }

    nav a {
        color: #ecf0f1;
        text-decoration: none;
        margin-left: 1.5rem;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
            color: #42b983;
        }
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        padding: 1rem;

        nav {
            margin-top: 1rem;
        }
    }
}
</style>
