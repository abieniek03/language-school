import groupOptions from '../assets/data/groupOptions';

const convertGroupName = (group: number) => {
	return groupOptions.find((_, index) => index === group);
};

export default convertGroupName;
