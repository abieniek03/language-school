<script setup lang="ts">
import Button from '../components/buttons/Button.vue';
import Link from '../components/buttons/Link.vue';
const formFields: { label: string; type?: string }[] = [
	{
		label: 'Imię i nazwisko',
	},
	{
		label: 'Email',
		type: 'email',
	},
	{
		label: 'Temat',
	},
];

document.title = 'Kontakt - Szkoła Języków Obcych';
</script>

<template>
	<div class="row m-0">
		<div class="photo d-none d-lg-block col-12 col-lg-5"></div>
		<div
			class="col-12 col-lg-7 position-relative d-flex flex-column justify-content-center align-items-center"
			style="height: 100vh"
		>
			<Link path="/" label="Strona główna" styles="position-absolute start-0 top-0 m-3 p-2" />

			<div style="max-width: 650px">
				<div class="mb-4 text-center">
					<h2>Wypełnij formularz kontaktowy</h2>
					<p>Jak najszybciej odpowiemy na Twoją wiadomość.</p>
				</div>
				<div v-for="element of formFields" class="form-floating mb-3">
					<input
						:type="element.type || 'text'"
						class="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label for="floatingInput">{{ element.label }}</label>
				</div>
				<div class="form-floating">
					<textarea
						class="form-control mb-3"
						placeholder="Leave a comment here"
						id="floatingTextarea2"
						style="height: 125px; min-height: 100px; max-height: 200px"
					></textarea>
					<label for="floatingTextarea2">Wiadomość</label>
				</div>
				<Button label="Wyślij" type="form" styles="w-100 p-3" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.photo {
	height: 100vh;
	background-image: url('../assets/images/contact.jpg');
	background-position: center;
	background-size: cover;
}
</style>
