<script setup lang="ts">
defineProps<{ communicate?: string }>();
</script>

<template>
	<div v-if="communicate" class="alert alert-danger mt-3" role="alert">
		<p class="text-center m-0">{{ communicate }}</p>
	</div>
</template>

<style scoped></style>
