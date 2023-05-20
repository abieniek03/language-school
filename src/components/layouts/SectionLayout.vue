<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
	<div :id="id">
		<slot />
	</div>
</template>

<style scoped lang="scss">
div {
	scroll-margin-top: 85px;
	margin-bottom: 5em;
}
</style>
