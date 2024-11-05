<template>
	<div class="card h-100 d-flex flex-column">
		<img v-if="article.image" :src="article.image" class="card-img-top fixed-image" alt="Article Image">
		<div class="card-body flex-grow-1">
			<h5 class="card-title">{{ article.title }}</h5>
			<p class="card-text">{{ article.description }}</p>
		</div>
		<div class="card-footer d-flex justify-content-between align-items-center mt-auto">
			<small class="text-muted">{{ new Date(article.pubDate).toLocaleDateString() }}</small>
			<a :href="article.link" class="btn btn-primary d-flex align-items-center">
				<Icon name="material-symbols:open-in-new-rounded" style="color: white" class="me-2" />
				Lire plus
			</a>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	article: {
		type: Object,
		required: true,
	},
});
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
}

.card-body {
	flex-grow: 1;
}

.card-footer {
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.fixed-image {
	width: 100%;
	height: 200px;
	/* Vous pouvez ajuster la hauteur selon vos besoins */
	object-fit: cover;
	/* Pour s'assurer que l'image couvre toute la zone */
}
</style>
