import languageOptions from '../assets/data/languageOptions';

const convertLanguageID = (language: number) => {
	return languageOptions.find((_, index) => index === language);
};

export default convertLanguageID;
