<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
	<button class="btn btn-primary w-100 p-3" disabled>
		<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
		{{ label }}
	</button>
</template>
