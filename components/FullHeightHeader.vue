<template>
	<header class="vh-100 d-flex flex-column justify-content-center align-items-center bg-primary text-white">
		<div class="text-center">
			<h1 class="display-4">Bienvenue sur le kit de sensibilisation aux IA</h1>
			<p class="lead">Ce site a pour but de vous fournir différentes ressources pour mieux apréhender les
				intelligences artificielles.</p>
			<div class="d-flex justify-content-center">
				<a href="#full-height-body"
					class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center icon-button">
					<Icon name="material-symbols:keyboard-double-arrow-down-rounded"
						style="color: white; width: 3em; height: 3em;" />
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "MaterialSymbolsKeyboardDoubleArrowDownRounded",
};
</script>
<style scoped>
/* Styles personnalisés (facultatif) */
header {
	background: #007bff;
	/* Couleur de fond */
}

.icon-button {
	width: 50px;
	height: 50px;
	font-size: 20px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
