<template>
	<NavbarMenu />
	<div class="container mx-auto">
		<h1 class="text-3xl font-semibold text-center mt-8">Dernières actualités</h1>
		<RssCard />
	</div>
	<PageFooter />
</template>

<script setup>
import RssCard from "~/components/RssCard.vue";
</script>
