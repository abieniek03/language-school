const navigationItems: { label: string; path: string; cta?: boolean }[] = [
	{
		label: 'Strona główna',
		path: '/',
	},
	{
		label: 'Kontakt',
		path: '/kontakt',
	},
	{
		label: 'Administrator',
		path: '/administrator/logowanie',
	},
	{
		label: 'Zapisz się',
		path: '/zapisz-sie',
		cta: true,
	},
];

export default navigationItems;
