<script setup lang="ts">
import { RouterLink } from 'vue-router';
import navigationItems from '../../assets/data/navigationItems';

const logoLink = window.location.href.split('/')[3] === '';
</script>

<template>
	<nav
		class="navbar navbar-expand-lg bg-body-tertiary position-fixed bg-white w-100 px-4 py-3 top-0"
		style="z-index: 100"
	>
		<div class="container-fluid d-flex justify-content-between">
			<a v-if="logoLink" href="#" class="navbar-brand text-primary fs-4">SJO.pl</a>
			<router-link v-else to="/" class="navbar-brand text-primary fs-4">SJO.pl</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
				<ul class="navbar-nav mt-3 mt-lg-0">
					<li v-for="item of navigationItems" class="nav-item text-center py-1 p-lg-0 mx-lg-2">
						<router-link :to="item.path" class="nav-link" :class="item.cta && 'bg-primary text-white'">{{
							item.label
						}}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style scoped lang="scss">
.navbar-toggler {
	border: none;
	&:focus {
		outline: 2px solid;
		--bs-navbar-toggler-focus-width: 0;
	}
}
</style>
