<script setup lang="ts">
import { RouterLink } from 'vue-router';
import navigationItems from '../../assets/data/navigationItems';
</script>

<template>
	<footer class="p-5 py-lg-3">
		<div class="d-lg-flex justify-content-between">
			<div>
				<p class="fs-4">Szkoła Języków Obcych</p>
				<p class="my-1">ul. Nowa 10</p>
				<p class="my-1">00-000 Warszawa</p>
				<p class="my-1">Tel: 00 000 00 00</p>
				<p class="my-1">Email: kontakt@sjo.pl</p>
			</div>
			<div class="my-4 lg-m-0 d-flex flex-column">
				<router-link v-for="item of navigationItems" :to="item.path" class="link my-1 align-self-lg-end">{{
					item.label
				}}</router-link>
			</div>
		</div>
		<div class="row mt-5 border-top pt-3">
			<p class="text-center">Wykonanie - AB Web Project</p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
@use '../../styles/colors' as *;

footer {
	background-color: $content-color;
	color: $footer-content-color !important;
}
.link {
	text-decoration: none;
	color: $footer-content-color !important;
}
</style>
