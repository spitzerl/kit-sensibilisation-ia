<template>
	<div class="card mb-4 shadow-sm" style="width: 100%">
		<div class="card-body">
			<h5 class="card-title">{{ article.title }}</h5>
			<p class="card-text">
				<small class="text-muted">Publié le : {{ formatDate(article.pubDate) }}</small>
			</p>
			<a :href="article.link" class="btn btn-primary" target="_blank">Lire l'article</a>
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

const formatDate = (dateStr) => {
	return new Date(dateStr).toLocaleDateString();
};
</script>
