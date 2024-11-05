<template>
	<UCard>
		<template #header>
			<img v-if="image" :src="image" :alt="title" class="card-image" />
		</template>

		<h2 class="card-title">{{ title }}</h2>

		<!-- <div v-html="description"></div> -->

		<template #footer>
			<n-button :href="link" target="_blank" class="mt-4">Lire la suite</n-button>
		</template>
	</UCard>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		default: "",
	},
	// description: {
	// 	type: String,
	// 	required: true,
	// },
	link: {
		type: String,
		required: true,
	},
});
</script>

<style>
/* Ajoutez des styles spécifiques au composant si nécessaire */
</style>
