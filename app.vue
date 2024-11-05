<template>
	<div>
		<UContainer class="header" style="height: 100vh">
			<h1 class="text-4xl font-bold">Bienvenue sur le kit de sensibilisation aux IA</h1>
			<h2 class="text-2xl mt-4">Ce site a pour but de vous fournir différentes ressources pour mieux appréhender les intelligences artificielles.</h2>
			<button @click="scrollToContent" class="mt-8 w-16 h-16 bg-amber-500 text-black rounded-full flex items-center justify-center">
				<Icon name="material-symbols:keyboard-double-arrow-down-rounded" style="color: black; width: 2em; height: 2em" />
			</button>
		</UContainer>
		<UContainer ref="content" class="content p-10 grid grid-cols-1 md:grid-cols-3 gap-5" style="height: 100vh">
			<a href="#" class="card-link">
				<div class="card-container">
					<img src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg" alt="" class="card-image" />
					<div class="card-text">Actualités</div>
				</div>
			</a>
			<a href="#" class="card-link">
				<div class="card-container">
					<img src="https://cdn.pixabay.com/photo/2017/02/18/11/00/checklist-2077020_1280.jpg" alt="" class="card-image" />
					<div class="card-text">Liste des IA</div>
				</div>
			</a>
			<a href="#" class="card-link">
				<div class="card-container">
					<img src="https://cdn.pixabay.com/photo/2021/12/12/20/00/woman-6865977_1280.jpg" alt="" class="card-image" />
					<div class="card-text">Références culturelles</div>
				</div>
			</a>
			<a href="#" class="card-link">
				<div class="card-container">
					<img src="https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309_1280.jpg" alt="" class="card-image" />
					<div class="card-text">Les IA vont-elles nous remplacer ?</div>
				</div>
			</a>
			<a href="#" class="card-link">
				<div class="card-container">
					<img src="https://cdn.pixabay.com/photo/2018/09/04/10/06/man-3653346_1280.jpg" alt="" class="card-image" />
					<div class="card-text">Quizz</div>
				</div>
			</a>
			<a href="#" class="card-link">
				<div class="card-container">
					<img src="https://cdn.pixabay.com/photo/2016/02/19/12/06/camera-1210111_1280.jpg" alt="" class="card-image" />
					<div class="card-text">Article vidéo</div>
				</div>
			</a>
		</UContainer>
	</div>
</template>

<script setup>
const scrollToContent = () => {
	const content = document.querySelector(".content");
	if (content) {
		content.scrollIntoView({ behavior: "smooth" });
	}
};
</script>

<style scoped>
.header {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.card-link {
	text-decoration: none;
}

.card-container {
	position: relative;
	width: 100%;
	height: 100%;
	cursor: pointer;
	transition: transform 0.3s, box-shadow 0.3s;
}

.card-container:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-container:active {
	transform: scale(0.95);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 2em; /* Taille augmentée pour écrans larges */
	font-weight: bold;
	text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); /* Contraste amélioré */
	background-color: rgba(0, 0, 0, 0.4); /* Arrière-plan semi-transparent */
	padding: 10px 15px; /* Espacement autour du texte */
	border-radius: 5px; /* Coins arrondis */
	text-align: center; /* Alignement centré du texte */
	max-width: 90%; /* Empêche le texte de dépasser la carte */
	word-wrap: break-word; /* Permet de passer à la ligne suivante si nécessaire */
}

/* Media Query pour les tablettes */
@media (max-width: 768px) {
	.card-text {
		font-size: 1.5em; /* Taille réduite pour les tablettes */
		padding: 8px 12px;
	}
}

/* Media Query pour les téléphones mobiles */
@media (max-width: 480px) {
	.card-text {
		font-size: 1.2em; /* Taille encore plus réduite pour les petits écrans */
		padding: 6px 10px;
	}
}
</style>
