<template>
	<NuxtPage />
</template>

<script setup lang="ts">
useHead({
	title: "KIT de sensibilisation au IA",
	meta: [{ name: "description", content: "Ce site a pour but de vous fournir différentes ressources pour mieux appréhender les intelligences artificielles." }],
	bodyAttrs: {
		class: "test",
	},
	script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
<style>
/* Styles globaux si nécessaire */
</style>
