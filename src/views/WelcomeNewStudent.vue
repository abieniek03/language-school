<script setup lang="ts">
import { watchEffect } from 'vue';
import router from '../router';

import Navbar from '../components/elements/Navbar.vue';
import Header from '../components/elements/Header.vue';
import Content from '../components/layouts/Content.vue';
// import Heading from '../components/elements/Heading.vue';

watchEffect(() => {
	if (!sessionStorage.getItem('registered')) {
		router.push('/zapisz-sie');
	}
});
</script>

<template>
	<Navbar />
	<Header content="welcome" title="Witamy Cię w naszej szkole!" text="Zostałeś zapisany na liście uczniów" />
	<Content>
		<h3>Dziękujemy za zaufanie!</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus facere tenetur alias, quam illo, iure
			quibusdam, consectetur eligendi ipsam nesciunt enim dolorem rem esse ut quisquam quia temporibus autem? Veritatis
			quae unde praesentium nemo autem sint consectetur dolor repellendus tempore dolore. Omnis quas aspernatur id hic
			facere quaerat nisi, quam repudiandae, non dolorem nobis eveniet soluta vero nam ad eius culpa! Temporibus odit
			recusandae quis ab, explicabo tenetur officia ipsam facere esse aspernatur saepe, molestias asperiores at facilis
			praesentium expedita. Blanditiis optio cum corporis, error voluptas nam aliquam quaerat adipisci. Beatae adipisci
			nisi atque voluptates fuga cumque blanditiis distinctio minima voluptate dignissimos quidem omnis cum, tenetur a
			vero ea! Alias quos quisquam quo optio tenetur! Fugiat ratione atque nam.
		</p>
	</Content>
</template>

<style scoped></style>
