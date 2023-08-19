<script setup lang="ts">
import { ref } from 'vue';

import Navbar from '../components/elements/Navbar.vue';
import Header from '../components/elements/Header.vue';
import Content from '../components/layouts/Content.vue';
import Heading from '../components/elements/Heading.vue';
import Button from '../components/buttons/Button.vue';
import Footer from '../components/elements/Footer.vue';
import LoadingButton from '../components/buttons/LoadingButton.vue';
import FormInput from '../components/formFields/FormInput.vue';
import ErrorAlert from '../components/elements/ErrorAlert.vue';
import FormSelect from '../components/formFields/FormSelect.vue';

import registerStudentFormValidation from '../utils/registerStudentFormValidation';
import languageOptions from '../assets/data/languageOptions';

import axios from '../axiosInstance';
import router from '../router';

export interface IStudentData {
	firstName: string;
	lastName: string;
	language: string;
	address: string;
	postalCode: string;
	city: string;
	email: string;
	phone: string;
}

const studentData = ref<IStudentData>({
	firstName: '',
	lastName: '',
	language: '',
	address: '',
	postalCode: '',
	city: '',
	email: '',
	phone: '',
});

const loading = ref<boolean>(false);

const info = ref<string>('');

const sendRegister = (e: Event) => {
	e.preventDefault();

	registerStudentFormValidation(studentData.value);
	loading.value = true;

	if (sessionStorage.getItem('validation') === 'false') {
		loading.value = false;
		info.value = 'Dane są nieprawidłowe';
	} else {
		axios
			.post('/student-register', studentData.value)
			.then(() => {
				sessionStorage.setItem('registered', 'true');
				router.push('/powitanie');
			})
			.catch((error) => {
				loading.value = false;
				info.value = error.response.data.communicate;
			});
	}
};

document.title = 'Dołącz - Szkoła Języków Obcych';
</script>

<template>
	<Navbar />
	<Header content="join" title="Dołącz do naszej szkoły" text="Zapisz się na zajęcia już teraz. Przez internet." />
	<Content>
		<Heading title="Zapisz się" />
		<form @submit="sendRegister" class="py-1 py-lg-3">
			<FormInput label="Imię" id="firstName" v-model="studentData.firstName" />
			<FormInput label="Nazwisko" id="lastName" v-model="studentData.lastName" />
			<FormSelect label="Język" placeholder="Wybierz" :options="languageOptions" v-model="studentData.language" />
			<FormInput label="Adres" id="address" v-model="studentData.address" />
			<FormInput label="Kod pocztowy" id="postalCode" v-model="studentData.postalCode" />
			<FormInput label="Miasto" id="city" v-model="studentData.city" />
			<FormInput label="Adres mailowy" id="email" type="email" v-model="studentData.email" />
			<FormInput label="Telefon komórkowy" id="phone" v-model="studentData.phone" />
			<Button v-if="!loading" label="Zapisz się" />
			<LoadingButton v-else label="Trwa zapisywanie" />
		</form>
		<ErrorAlert :communicate="info" />
	</Content>

	<Footer />
</template>
