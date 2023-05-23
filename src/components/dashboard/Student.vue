<script setup lang="ts">
import Link from '../buttons/Link.vue';
import convertLanguageID from '../../utils/convertLanguageID';

defineProps<{ name: string; language: number; id: string }>();
</script>

<template>
	<div class="d-flex flex-column flex-md-row justify-content-between border p-4 mb-4">
		<div>
			<h3>{{ name }}</h3>
			<p class="fw-bold">Język {{ convertLanguageID(language) }}</p>
		</div>
		<div><Link :path="/uczen/ + id" styles="button" label="Pokaż profil" /></div>
	</div>
</template>
