<template>
	<header class="full-height-header">
		<div class="content">
			<h1>Mon Titre</h1>
			<h2>Mon Sous-Titre</h2>
			<button @click="scrollToSection">Scroll Down</button>
		</div>
	</header>
</template>

<script setup>
const scrollToSection = () => {
	const section = document.getElementById('target-section');
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};
</script>

<style scoped>
.full-height-header {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	background-color: #f5f5f5;
}

.content {
	max-width: 600px;
}

button {
	margin-top: 20px;
	padding: 10px 20px;
	font-size: 16px;
	cursor: pointer;
}
</style>