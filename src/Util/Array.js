const Desc = (a, b) => {
	if (a.name < b.name) {
		return 1;
	}
	if (a.name > b.name) {
		return -1;
	}
	return 0;
};

const Asc = (a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
};

const Delete = (array, index) => {
	const newSet = [...array];
	if (index > -1) {
		newSet.splice(index, 1);
	}
	return newSet;
};

export { Asc, Desc, Delete };
