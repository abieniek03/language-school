<script setup lang="ts">
import { ref, onMounted } from 'vue';

import axios from '../../axiosInstance';

import Heading from '../../components/elements/Heading.vue';
import FormInput from '../../components/formFields/FormInput.vue';
import Button from '../../components/buttons/Button.vue';
import LoadingButton from '../../components/buttons/LoadingButton.vue';
import Link from '../../components/buttons/Link.vue';
import ErrorAlert from '../../components/elements/ErrorAlert.vue';
import { navigateAdminToDashboard } from '../../utils/navigateAdmin';

import router from '../../router';

interface IadminData {
	login: string;
	password: string;
	passwordRepeat: string;
}

const adminData = ref<IadminData>({
	login: '',
	password: '',
	passwordRepeat: '',
});

const loading = ref<boolean>(false);
const info = ref<string>('');

const handleRegister = () => {
	if (adminData.value.login === '' || adminData.value.password === '' || adminData.value.passwordRepeat === '') {
		info.value = 'Uzupełnij dane.';
	} else {
		loading.value = true;
		if (adminData.value.password === adminData.value.passwordRepeat) {
			axios
				.post('/admin-register', {
					login: adminData.value.login,
					password: adminData.value.password,
				})
				.then((res) => {
					info.value = '';
					localStorage.setItem('login-token', res.data.token);
					router.push('/uczniowie');
				})
				.catch(() => {
					loading.value = false;
					info.value = 'Rejestracja nie udana.';
				});
		} else {
			loading.value = false;
			info.value = 'Hasła nie są takie same!';
		}
	}
};

onMounted(() => {
	navigateAdminToDashboard();
});
</script>

<template>
	<div class="d-flex justify-content-center align-items-center p-5 mx-auto" style="height: 100vh; max-width: 600px">
		<div class="w-100">
			<Heading title="Zarejestruj się" />
			<p>Stwórz swoje konto administratora.</p>
			<ErrorAlert :communicate="info" />
			<FormInput label="Login" id="login" v-model="adminData.login" />
			<FormInput label="Hasło" id="password" type="password" v-model="adminData.password" />
			<FormInput label="Powtórz hasło" id="passwordRepeat" type="password" v-model="adminData.passwordRepeat" />
			<Button @click="handleRegister" v-if="!loading" label="Zarejestruj się" />
			<LoadingButton v-else label="Rejestracja" />
			<Link path="/administrator/logowanie" label="Masz już konto? Zaloguj się." />
		</div>
	</div>
</template>

<style scoped></style>
