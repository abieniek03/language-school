import router from '../router';

export const navigateAdminToDashboard = () => {
	if (localStorage.getItem('login-token')) {
		router.push('/uczniowie');
	}
};

export const navigateToLogin = () => {
	if (!localStorage.getItem('login-token')) {
		router.push('/administrator/logowanie');
	}
};
