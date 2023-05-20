<script setup lang="ts">
import Button from '../buttons/Button.vue';

defineProps<{ content: string; title: string; text: string; btn?: string; btnLink?: string }>();
</script>

<template>
	<header
		class="header"
		:class="
			(content === 'home' && 'header__home') ||
			(content === 'join' && 'header__join') ||
			(content === 'welcome' && 'header__welcome')
		"
	>
		<div class="header__content p-5">
			<h1>{{ title }}</h1>
			<p>{{ text }}</p>
			<Button v-if="btn" type="link" styles="cta" :label="btn" :path="btnLink" />
		</div>
	</header>
</template>

<style scoped lang="scss">
@use '../../styles/colors' as *;

.header {
	position: relative;
	z-index: 0;
	height: 50vh;
	width: 100%;
	background-position: left;
	background-size: cover;
	display: flex;
	align-items: center;
	margin-top: 72px;
	&__home {
		background-image: url('../../assets/images/header.jpg');
	}
	&__join {
		background-image: url('../../assets/images/join.jpg');
	}
	&__welcome {
		background-image: url('../../assets/images/welcome.jpg');
	}
	&::before,
	&::after {
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	&::before {
		background-color: #000;
		opacity: 0.6;
	}
	&::after {
		background: linear-gradient(to right, transparent, $primary);
		opacity: 0.6;
	}
	&__content {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		color: $header-content-color;
		h1 {
			text-transform: uppercase;
		}
	}
}
</style>
