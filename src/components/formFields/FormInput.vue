<script setup lang="ts">
defineProps<{ label: string; id: string; type?: string }>();
</script>

<template>
	<div class="form-floating mb-3">
		<input
			:type="type || 'text'"
			class="form-control"
			:id="id"
			:placeholder="label"
			@input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
		/>
		<label :for="id">{{ label }}</label>
	</div>
</template>
