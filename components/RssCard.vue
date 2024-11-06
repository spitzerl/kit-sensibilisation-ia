<template>
	<div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
		<div v-if="image" class="relative">
			<img :src="image" :alt="title" class="w-full h-48 object-cover" />
		</div>
		<div class="p-4 flex-grow">
			<h2 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h2>
			<!-- Pour une description, vous pouvez inclure le contenu ici -->
			<div v-html="sanitizedDescription" class="text-gray-600 text-sm"></div>
		</div>
		<div class="px-4 pb-4">
			<footer class="flex justify-between items-center">
				<span class="text-gray-600 text-sm">{{ date }}</span>
				<a :href="link" target="_blank" class="text-primary hover:text-blue-700">Lire la suite</a>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		default: "",
	},
	link: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

const sanitizedDescription = computed(() => {
	return props.description.replace(/<iframe[^>]*>.*?<\/iframe>/g, "").replace(/<video[^>]*>.*?<\/video>/g, "");
});
</script>

<style scoped>
/* Ajoutez ici des styles si nécessaire */
</style>
