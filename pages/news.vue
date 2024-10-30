<!-- pages/news.vue -->

<template>
    <div class="container my-5">
        <h1 class="mb-5">Actualités sur l'intelligence artificielle</h1>
        <div v-if="error" class="alert alert-danger" role="alert">
            Erreur de chargement des articles : {{ error }}
        </div>
        <div v-else class="row">
            <div
                class="col-md-6"
                v-for="article in articles"
                :key="article.link"
            >
                <RssCard :article="article" />
            </div>
        </div>
        <div v-if="loading" class="text-center my-4">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Chargement...</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import RssCard from "~/components/RssCard.vue";

const articles = ref([]);
const page = ref(1); // Page actuelle pour la pagination
const loading = ref(false);
const error = ref(null);
const hasMoreArticles = ref(true);

async function loadArticles() {
    if (loading.value || !hasMoreArticles.value) return;

    loading.value = true;
    try {
        // Requête pour les articles de la page actuelle
        const response = await $fetch(`/api/rss?page=${page.value}`);
        if (response.length > 0) {
            articles.value.push(...response);
            page.value += 1; // Augmente le numéro de page pour la prochaine requête
        } else {
            hasMoreArticles.value = false; // Arrête le chargement si plus d'articles
        }
    } catch (e) {
        error.value = "Erreur de chargement des articles";
    } finally {
        loading.value = false;
    }
}

function onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.documentElement.offsetHeight - 100; // Proche de la fin
    if (scrollPosition >= bottomPosition) {
        loadArticles(); // Charger les articles suivants
    }
}

// Charger les articles initiaux et ajouter l'écouteur de défilement
onMounted(() => {
    loadArticles();
    window.addEventListener("scroll", onScroll);
});

// Supprimer l'écouteur de défilement quand le composant est démonté
onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
});
</script>

<style>
.container {
    max-width: 800px;
}
</style>
