<script setup lang="ts">
import { ref, onMounted } from 'vue';

import Content from '../../components/layouts/Content.vue';
import Heading from '../../components/elements/Heading.vue';
import ProfileData from '../../components/dashboard/ProfileData.vue';
import AcceptModal from '../../components/modals/AcceptModal.vue';

import convertLanguageID from '../../utils/convertLanguageID';
import { navigateToLogin } from '../../utils/navigateAdmin';

import axios from '../../axiosInstance';

const id = ref<string>(window.location.href.split('/')[4]);
const fullName = ref<string>('');
const language = ref<string>();
const profileData = ref<{ label: string; value: string }[]>();

const getStudentProfileData = () => {
	axios
		.get(`/student-profile/${id.value}`)
		.then((res) => {
			fullName.value = `${res.data.firstName} ${res.data.lastName}`;
			language.value = convertLanguageID(Number(res.data.language));
			profileData.value = [
				{
					label: 'Adres zamieszkania',
					value: res.data?.address,
				},
				{
					label: 'Kod pocztowy',
					value: res.data.postalCode,
				},
				{
					label: 'Miasto',
					value: res.data.city,
				},
				{
					label: 'Adres mailowy',
					value: res.data.email,
				},
				{
					label: 'Telefon',
					value: `${res.data.phone.slice(0, 3)} ${res.data.phone.slice(3, 6)} ${res.data.phone.slice(6, 9)}`,
				},
			];
		})
		.catch((error) => console.log(error));
};

onMounted(() => {
	getStudentProfileData();
	navigateToLogin();
});
</script>

<template>
	<Content>
		<div class="border-bottom d-flex flex-column flex-md-row justify-content-between">
			<div>
				<Heading type="h1" :title="fullName" />

				<p class="fw-bold mx-3 mt-4 mt-lg-3">Język {{ language }}</p>
			</div>
			<div>
				<AcceptModal label="Usuń ucznia" />
			</div>
		</div>
		<div class="p-3">
			<ProfileData v-for="el in profileData" :label="el.label" :value="el.value" />
		</div>
	</Content>
</template>
