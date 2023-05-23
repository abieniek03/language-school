import { IStudentData } from '../views/Join.vue';

const registerStudentFormValidation = (formData: IStudentData) => {
	if (
		formData.firstName.length < 3 ||
		formData.lastName.length < 3 ||
		formData.address.length < 3 ||
		formData.city.length < 3 ||
		(formData.postalCode.length < 5 && formData.postalCode.length > 6) ||
		formData.email.length < 3 ||
		!formData.email.includes('@') ||
		!formData.email.includes('.') ||
		formData.phone.length != 9
	) {
		sessionStorage.setItem('validation', 'false');
	} else {
		sessionStorage.setItem('validation', 'true');
	}
};

export default registerStudentFormValidation;
