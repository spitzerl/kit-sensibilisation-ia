<template>
    <Navbar />
    <div class="container my-5">
        <h1 class="mb-5">Actualités sur l'intelligence artificielle</h1>
        <div v-if="error" class="alert alert-danger" role="alert">Erreur de chargement des articles : {{ error }}</div>
        <div v-else class="row">
            <div class="col-lg-4 col-md-6 mb-4 d-flex align-items-stretch" v-for="article in articles" :key="article.link">
                <RssCard :article="article" class="card-equal-height" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import RssCard from "~/components/RssCard.vue";

const articles = ref([]);
const error = ref(null);

async function loadArticles() {
    try {
        const response = await $fetch('/api/rss');
        articles.value = response;
    } catch (err) {
        error.value = err.message;
    }
}

onMounted(loadArticles);
</script>

<style>
.card-equal-height {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
