<template>
	<nav class="bg-primary p-4">
		<div class="container mx-auto">
			<nuxt-link to="/" class="text-white flex items-center">
				<Icon name="material-symbols:arrow-left-alt-rounded" class="mr-2" />
				Retour à l'accueil
			</nuxt-link>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavbarMenu",
};
</script>

<style scoped>
/* Ajoutez ici des styles spécifiques si nécessaire */
</style>
