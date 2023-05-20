import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Join from '../views/Join.vue';
import WelcomeNewStudent from '../views/WelcomeNewStudent.vue';

import AdminLoginPanel from '../views/admin/LoginPanel.vue';
import AdminRegisterPanel from '../views/admin/RegisterPanel.vue';
import AdminDashboard from '../views/admin/Dashboard.vue';
import StudentProfile from '../views/admin/StudentProfile.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/kontakt', component: Contact },
	{ path: '/zapisz-sie', component: Join },
	{ path: '/powitanie', component: WelcomeNewStudent },
	{ path: '/administrator/logowanie', component: AdminLoginPanel },
	{ path: '/administrator/rejestracja', component: AdminRegisterPanel },
	{ path: '/uczniowie', component: AdminDashboard },
	{ path: '/uczen/:id', component: StudentProfile },
	{ path: '/nieznaleziono', component: NotFound },
	{ path: '/:catchAll(.*)', redirect: '/nieznaleziono' },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
