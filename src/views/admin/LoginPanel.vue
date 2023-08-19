<script setup lang="ts">
import { ref, onMounted } from 'vue';

import Heading from '../../components/elements/Heading.vue';
import FormInput from '../../components/formFields/FormInput.vue';
import Button from '../../components/buttons/Button.vue';
import LoadingButton from '../../components/buttons/LoadingButton.vue';
import Link from '../../components/buttons/Link.vue';
import ErrorAlert from '../../components/elements/ErrorAlert.vue';

import { navigateAdminToDashboard } from '../../utils/navigateAdmin';

import axios from '../../axiosInstance';
import router from '../../router';

interface IadminData {
	login: string;
	password: string;
}

const adminData = ref<IadminData>({
	login: '',
	password: '',
});

const loading = ref<boolean>(false);
const info = ref<string>('');

const handleLogin = (e: Event) => {
	e.preventDefault();

	if (adminData.value.login === '' || adminData.value.password === '') {
		info.value = 'Uzupełnij dane.';
	} else {
		loading.value = true;

		axios
			.post('/admin-login', adminData.value)
			.then((res) => {
				localStorage.setItem('login-token', res.data.token);
				router.push('/uczniowie');
			})
			.catch((error) => {
				loading.value = false;
				console.error(error);
				info.value = error.response.data.communicate;
			});
	}
};

onMounted(() => {
	navigateAdminToDashboard();
});
</script>

<template>
	<div class="d-flex justify-content-center align-items-center p-5 mx-auto" style="height: 100vh; max-width: 600px">
		<div class="w-100">
			<Heading title="Zaloguj się" />
			<p>Witaj administratorze! Zaloguj się do systemu.</p>
			<ErrorAlert :communicate="info" />
			<form @submit="handleLogin">
				<FormInput label="Login" id="login" v-model="adminData.login" />
				<FormInput label="Hasło" id="password" type="password" v-model="adminData.password" />
				<Button v-if="!loading" label="Zaloguj się" />
				<LoadingButton v-else label="Logowanie" />
			</form>
			<Link path="/administrator/rejestracja" label="Nie masz jeszcze konta? Zarejestruj się." />
		</div>
	</div>
</template>

<style scoped></style>
