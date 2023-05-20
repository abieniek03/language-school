<script setup lang="ts">
defineProps<{ path: string; label: string; styles?: string }>();
</script>

<template>
	<router-link
		:to="path"
		class="d-block my-2 p-1 text-center"
		:class="(styles === 'button' && 'btn btn-primary px-3 py-2') || styles"
		>{{ label }}</router-link
	>
</template>

<style scoped></style>
