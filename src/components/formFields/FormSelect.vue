<script setup lang="ts">
defineProps<{ label: string; placeholder: string; options: string[] }>();
</script>

<template>
	<div class="form-floating mb-3">
		<select
			class="form-select"
			id="floatingSelect"
			aria-label="Floating label select example"
			@input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
		>
			<option selected>{{ placeholder }}</option>
			<option v-for="(el, index) in options" :value="index">
				{{ el }}
			</option>
		</select>
		<label for="floatingSelect">{{ label }}</label>
	</div>
</template>

<style scoped></style>
