<script setup lang="ts">
defineProps<{ label: string; value: string | undefined }>();
</script>

<template>
	<p>
		{{ label }}: <span>{{ value }}</span>
	</p>
</template>

<style scoped></style>
