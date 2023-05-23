import { ref } from 'vue';
import axios from '../axiosInstance';
import convertGroupName from './convertLanguageID';

export const id = ref<string>(window.location.href.split('/')[4]);
export const fullName = ref<string>('');
export const group = ref<string>();
export const profileData = ref<{ label: string; value: string }[]>();

export const getStudentProfileData = () => {
	axios
		.get(`/student-profile/${id.value}`)
		.then((res) => {
			fullName.value = `${res.data.firstName} ${res.data.lastName}`;
			group.value = convertGroupName(Number(res.data.group));
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
