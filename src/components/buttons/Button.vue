<script setup lang="ts">
defineProps<{ label: string; type?: string; styles?: string; path?: string }>();
</script>

<template>
	<a
		v-if="type === 'link'"
		:href="path"
		class="btn btn-primary"
		:class="styles === 'cta' && 'text-uppercase fs-5 px-4 py-2'"
	>
		{{ label }}
	</a>

	<button v-else class="btn btn-primary" :class="styles">
		{{ label }}
	</button>
</template>
