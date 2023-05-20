<script setup lang="ts">
defineProps<{
	title: string;
	type?: string;
}>();
</script>

<template>
	<h1 v-if="type === 'h1'">{{ title }}</h1>
	<h2 v-else class="mb-4">{{ title }}</h2>
</template>

<style scoped lang="scss">
@use '../../styles/colors' as *;

h1,
h2 {
	position: relative;
	margin-left: 0.5em;

	&::before {
		position: absolute;
		content: '';
		height: 120%;
		width: 0.1em;
		top: 0;
		left: -0.5em;
		background-color: $primary;
	}
}
</style>
