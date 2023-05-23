<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';

import Content from '../../components/layouts/Content.vue';
import Navbar from '../../components/elements/Navbar.vue';
import Heading from '../../components/elements/Heading.vue';
import Student from '../../components/dashboard/Student.vue';
import FormInput from '../../components/formFields/FormInput.vue';
import FormSelect from '../../components/formFields/FormSelect.vue';

import languageOptions from '../../assets/data/languageOptions';
import { navigateToLogin } from '../../utils/navigateAdmin';

import axios from '../../axiosInstance';

const students = ref();
const searchTerm = ref<string>('');
const languageID = ref<number | string>();

const getStudents = () => {
	if (searchTerm.value === '') {
		if (languageID.value === undefined || languageID.value === 'Wszystkie') {
			axios
				.get('/students')
				.then((res) => (students.value = res.data.allStudents))
				.catch((error) => (students.value = error.response.data.communicate));
		} else {
			axios
				.get(`/students-language/${languageID.value}`)
				.then((res) => (students.value = res.data.students))
				.catch((error) => (students.value = error.response.data.communicate));
		}
	} else {
		if (languageID.value === undefined || languageID.value === 'Wszystkie') {
			axios
				.get(`/students-name/${searchTerm.value}`)
				.then((res) => (students.value = res.data.students))
				.catch((error) => (students.value = error.response.data.communicate));
		} else {
			axios
				.get(`/students-name-language/${searchTerm.value}/${languageID.value}`)
				.then((res) => (students.value = res.data.students))
				.catch((error) => (students.value = error.response.data.communicate));
		}
	}
};
onMounted(() => {
	navigateToLogin();
});

watchEffect(() => {
	getStudents();
});
</script>

<template>
	<Navbar />
	<Content>
		<div
			class="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mt-4 mb-2 py-4 border-bottom"
		>
			<Heading title="Panel administratora" type="h1" />
		</div>
		<div class="py-2">
			<p>Tutaj znajdziesz wszystkich zapisanych uczniów oraz informacje o nich.</p>
			<div class="mb-3 border-bottom">
				<FormInput label="Wyszukaj..." id="search" styles="search" v-model="searchTerm" />
			</div>
			<div>
				<FormSelect
					label="Wyszukaj po grupie"
					placeholder="Wszystkie"
					:options="languageOptions"
					v-model="languageID"
				/>
			</div>

			<div>
				<p v-if="!students" class="text-center">Nie znaleziono żadnego ucznia.</p>
				<Student
					v-else
					v-for="el of students"
					:name="`${el.firstName} ${el.lastName}`"
					:language="el.language"
					:id="el._id"
				/>
			</div>
		</div>
	</Content>
</template>

<style scoped></style>
