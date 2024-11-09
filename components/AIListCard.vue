<script setup>
import { ref, onMounted } from "vue";

// Créer un état pour les modèles récupérés
const aiModels = ref([]);

const fetchAIModels = async () => {
	try {
		const response = await fetch("/aiModels.json");

		if (!response.ok) throw new Error(`Erreur: ${response.status}`);

		aiModels.value = await response.json();
	} catch (error) {
		console.error("Erreur lors du chargement des modèles :", error);
		aiModels.value = [];
	}
};

onMounted(() => {
	fetchAIModels();
});
</script>

<template>
	<div class="container mx-auto">
		<div class="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div v-for="model in aiModels" :key="model.nom" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
				<div class="p-4 flex-grow">
					<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{{ model.nom }}</h2>
					<div class="text-gray-600 dark:text-gray-300 text-sm">{{ model.description || "Aucune description disponible" }}</div>
				</div>
				<div class="px-4 pb-4">
					<footer class="flex justify-between items-center">
						<span class="text-gray-600 dark:text-gray-400 text-sm">Créateur : {{ model.createur || "Non spécifié" }}</span>
						<a :href="model.lien" target="_blank" class="text-primary hover:text-blue-700 dark:hover:text-blue-300">Visiter le site</a>
					</footer>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
</style>
