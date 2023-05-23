import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://language-school-backend-dtq0tkstx-abieniek03.vercel.app/api',
});

export default instance;
