<template>
	<div class="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<div v-for="article in articles" :key="article.link" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
			<div v-if="article.image" class="relative">
				<img :src="article.image" :alt="article.title" class="w-full h-48 object-cover" />
			</div>
			<div class="p-4 flex-grow">
				<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{{ article.title }}</h2>
				<div v-html="sanitizeDescription(article.description)" class="text-gray-600 dark:text-gray-300 text-sm"></div>
			</div>
			<div class="px-4 pb-4">
				<footer class="flex justify-between items-center">
					<span class="text-gray-600 dark:text-gray-400 text-sm">{{ article.date }}</span>
					<a :href="article.link" target="_blank" class="text-primary hover:text-blue-700 dark:hover:text-blue-300">Lire la suite</a>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useAsyncData } from "#imports";

const { data: articles, error } = await useAsyncData("rssArticles", () => $fetch("/api/rss"));

if (error.value) {
	console.error("Erreur lors de la récupération des articles RSS:", error.value);
}

function sanitizeDescription(description) {
	if (!description) return "";
	return description.replace(/<iframe[^>]*>.*?<\/iframe>/g, "").replace(/<video[^>]*>.*?<\/video>/g, "");
}
</script>

<style scoped>
/* Ajoutez ici des styles si nécessaire */
</style>
