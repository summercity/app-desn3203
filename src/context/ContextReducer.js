import { SET_PAGE_INFO } from './constants';

const ContextReducer = (state, action) => {
	switch (action.type) {
		case SET_PAGE_INFO:
			return {
				...state,
				pageInfo: action.payload,
			};

		default:
			return state;
	}
};

export default ContextReducer;
