<script setup lang="ts">
import Navbar from '../components/elements/Navbar.vue';
import Header from '../components/elements/Header.vue';
import About from '../components/sections/About.vue';
import Content from '../components/layouts/Content.vue';
import Classes from '../components/sections/Classes.vue';
import Footer from '../components/elements/Footer.vue';

document.title = 'Szkoła Języków Obcych';
</script>

<template>
	<Navbar />
	<Header
		content="home"
		title="Ucz się języków obcych"
		text="Zajęcia z grupowe i dla dzieci, młodzieży i dorosłych."
		btn="Zapoznaj się z ofertą"
		btnLink="#zajecia"
	/>
	<Content>
		<About />
		<Classes />
	</Content>
	<Footer />
</template>

<style scoped></style>
