<script setup lang="ts">
import Link from '../buttons/Link.vue';
import convertGroupName from '../../utils/convertGroupName';

defineProps<{ name: string; group: number; id: string }>();
</script>

<template>
	<div class="d-flex flex-column flex-md-row justify-content-between border p-4 mb-4">
		<div>
			<h3>{{ name }}</h3>
			<p class="fw-bold">{{ convertGroupName(group) }}</p>
		</div>
		<div><Link :path="/uczen/ + id" styles="button" label="Pokaż profil" /></div>
	</div>
</template>
