<script setup lang="ts">
import { ref, onMounted } from 'vue';

import Content from '../../components/layouts/Content.vue';
import Heading from '../../components/elements/Heading.vue';
import Student from '../../components/dashboard/Student.vue';
import FormInput from '../../components/formFields/FormInput.vue';
import FormSelect from '../../components/formFields/FormSelect.vue';

import groupOptions from '../../assets/data/groupOptions';
import { navigateToLogin } from '../../utils/navigateAdmin';

import axios from '../../axiosInstance';
import router from '../../router';
import Link from '../../components/buttons/Link.vue';

const students = ref();
const searchTerm = ref<string>('');
const groupID = ref<number | string>();

const logout = () => {
	localStorage.removeItem('login-token');
	router.push('/administrator/logowanie');
};

const getStudents = () => {
	if (searchTerm.value === '') {
		if (groupID.value === undefined || groupID.value === 'Wszystkie') {
			axios
				.get('/students')
				.then((res) => (students.value = res.data.allStudents))
				.catch((error) => (students.value = error.response.data.communicate));
		} else {
			axios
				.get(`/students-group/${groupID.value}`)
				.then((res) => (students.value = res.data.students))
				.catch((error) => (students.value = error.response.data.communicate));
		}
	} else {
		if (groupID.value === undefined || groupID.value === 'Wszystkie') {
			axios
				.get(`/students-name/${searchTerm.value}`)
				.then((res) => (students.value = res.data.students))
				.catch((error) => (students.value = error.response.data.communicate));
		} else {
			axios
				.get(`/students-name-group/${searchTerm.value}/${groupID.value}`)
				.then((res) => (students.value = res.data.students))
				.catch((error) => (students.value = error.response.data.communicate));
		}
	}
};
onMounted(() => {
	getStudents();
	navigateToLogin();
});
</script>

<template>
	<Content>
		<div
			class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mb-2 pb-2 border-bottom"
		>
			<div>
				<Heading title="Panel administratora" type="h1" />
				<Link path="/" label="Strona główna" styles="d-inline-flex mt-2 mx-lg-3 my-2 px-2" />
			</div>
			<button @click="logout" class="btn btn-primary align-self-start mx-3 my-2">Wyloguj się</button>
		</div>
		<div class="py-2">
			<p>Tutaj znajdziesz wszystkich zapisanych uczniów oraz informacje o nich.</p>
			<div class="mb-3 border-bottom">
				<FormInput label="Wyszukaj..." id="search" styles="search" v-model="searchTerm" />
			</div>
			<div>
				<FormSelect label="Wyszukaj po grupie" placeholder="Wszystkie" :options="groupOptions" v-model="groupID" />
			</div>

			<div>
				<p v-if="!students" class="text-center">Nie znaleziono żadnego ucznia.</p>
				<Student
					v-else
					v-for="el of students"
					:name="`${el.firstName} ${el.lastName}`"
					:group="el.group"
					:id="el._id"
				/>
			</div>
		</div>
	</Content>
</template>

<style scoped></style>
