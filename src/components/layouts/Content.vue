<script setup lang="ts"></script>

<template>
	<main class="p-5">
		<slot />
	</main>
</template>

<style scoped lang="scss">
@use '../../styles/colors' as *;

main {
	max-width: 1200px;
	margin: 0 auto;
	color: $content-color;
}
</style>
