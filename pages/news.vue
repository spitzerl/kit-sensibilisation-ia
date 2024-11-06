<template>
	<NavbarMenu />
	<div class="container mx-auto">
		<h1 class="text-3xl font-semibold text-center mt-8">Dernières actualités</h1>
		<div class="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<RssCard v-for="article in articles" :key="article.link" :title="article.title" :image="article.image" :description="article.description" :link="article.link" :date="article.date" />
		</div>
	</div>
	<PageFooter />
</template>

<script setup>
import RssCard from "~/components/RssCard.vue";
import { useAsyncData } from "#imports";

const { data: articles, error } = await useAsyncData("rssArticles", () => $fetch("/api/rss"));

if (error.value) {
	console.error("Erreur lors de la récupération des articles RSS:", error.value);
}
</script>

<style>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
