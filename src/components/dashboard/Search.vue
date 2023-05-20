<script setup lang="ts">
import { ref } from 'vue';

import FormInput from '../formFields/FormInput.vue';
import Button from '../buttons/Button.vue';
// import LoadingButton from '../buttons/LoadingButton.vue';

const searchTerm = ref<string>('');

const emitSearchTerm = () => {};
</script>

<template>
	<div class="my-4 border-bottom pb-4">
		<FormInput label="Wyszukaj..." id="search" styles="search" v-model="searchTerm" />
		<Button @click="emitSearchTerm" label="Wyszukaj" />
		<!-- <LoadingButton label="Wyszukiwanie" /> -->
	</div>
</template>

<style scoped></style>
