<template>
	<head>
		<title>KIT IA</title>
	</head>
	<FullHeightHeader />
	<section id="full-height-body" class="vh-100 d-flex flex-wrap justify-content-center align-items-center bg-light text-white">
		<div class="card home-card hover-effect m-2 rounded" @click="redirectTo('/news')">
			<img src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg" class="card-img-top home-card-img-top rounded fixed-img" alt="..." />
			<div class="card-img-overlay d-flex justify-content-center align-items-center">
				<h5 class="card-title font-weight-bold display-1 text-dark home-card-title">Actualités</h5>
			</div>
		</div>
		<div class="card home-card hover-effect m-2 rounded" @click="redirectTo('/page2')">
			<img src="https://cdn.pixabay.com/photo/2017/02/18/11/00/checklist-2077020_1280.jpg" class="card-img-top home-card-img-top rounded fixed-img" alt="..." />
			<div class="card-img-overlay d-flex justify-content-center align-items-center">
				<h5 class="card-title font-weight-bold display-6 text-dark home-card-title">Liste des IA</h5>
			</div>
		</div>
		<div class="card home-card hover-effect m-2 rounded" @click="redirectTo('/page3')">
			<img src="https://cdn.pixabay.com/photo/2019/05/19/10/40/cinema-4213751_1280.jpg" class="card-img-top home-card-img-top rounded fix" alt="..." />
			<div class="card-img-overlay d-flex justify-content-center align-items-center">
				<h5 class="card-title font-weight-bold display-6 text-dark home-card-title">Références culturelles</h5>
			</div>
		</div>
	</section>
</template>

<script setup>
import FullHeightHeader from "~/components/FullHeightHeader.vue";
</script>

<script>
export default {
	methods: {
		redirectTo(path) {
			this.$router.push(path); // Utilisation de Vue Router pour la redirection
		},
	},
};
</script>

<style>
.hover-effect {
	transition: transform 0.2s, box-shadow 0.2s;
	cursor: pointer;
	/* Changer le curseur quand il passe sur une carte */
}

.hover-effect:hover {
	transform: scale(1.05);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.hover-effect:active {
	transform: scale(0.95);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	cursor: grabbing;
	/* Changer le curseur quand il clique */
}

.home-card-title {
	font-weight: bold;
	font-size: 2.5rem;
	background-color: #ffffffee;
	padding: 0.5rem;
	border-radius: 0.5em;
}

.home-card {
	border-radius: 0.5rem;
	width: 18rem;
	height: 12rem;
}

.home-card-img-top {
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
	height: 100%;
	object-fit: cover; /* L'image s'adapte à la taille de la carte */
}
</style>
