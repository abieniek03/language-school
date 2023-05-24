<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import Button from '../buttons/Button.vue';

import navigationItems from '../../assets/data/navigationItems';

const logoLink = window.location.href.split('/')[3] === '';
const loginedUser = ref<boolean>(localStorage.getItem('login-token') ? true : false);

const logout = () => {
	localStorage.removeItem('login-token');
	window.location.reload();
};
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
			<div class="collapse navbar-collapse d-lg-flex justify-content-lg-end align-items-center" id="navbarNav">
				<ul class="navbar-nav mt-3 mt-lg-0">
					<li v-for="item of navigationItems" class="nav-item text-center py-1 p-lg-0 mx-lg-2">
						<router-link :to="item.path" class="nav-link">{{ item.label }}</router-link>
					</li>
					<Button v-if="!loginedUser" label="Zapisz się" type="link" path="/zapisz-sie" />
					<Button @click="logout" v-else label="Wyloguj się" />
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
