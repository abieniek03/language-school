<script setup lang="ts">
import Content from '../components/layouts/Content.vue';
import Heading from '../components/elements/Heading.vue';
import Link from '../components/buttons/Link.vue';

const getPath = () => {
	return localStorage.getItem('login-token') ? '/uczniowie' : '/';
};
</script>

<template>
	<Content>
		<Heading title="Nie znaleziono takiej strony" type="h1" />

		<Link :path="getPath()" label="Wróc na stronę główną" styles="d-inline-flex btn btn-primary px-4 py-2 my-4" />
	</Content>
</template>

<style scoped></style>
