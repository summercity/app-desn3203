import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import ContextReducer from './ContextReducer';

const initialState = {
	pageInfo: {
		/** Sidenav properties */

		// Open and Close side navigation
		sideNavCollapse: false,

		// Open Menu with Submenu
		defaultOpenKeys: null,

		// Select active page
		defaultSelectedKeys: 'home',

		/** Breadcrumbs */
		breadcrumbs: [],

		/** Selected Project */
		activeProject: [],
	},
	contentLastUpdated: new Date(),

	/** Embedded Apllications */
	embeddedApplications: [],
};

const ContextStore = ({ children }) => {
	const [state, dispatch] = useReducer(ContextReducer, initialState);

	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	);
};

ContextStore.propTypes = {
	children: PropTypes.object,
};

export const Context = createContext(initialState);
export default ContextStore;
