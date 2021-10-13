import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../PageWrapper';

import '../../App.scss';
function AppWrapper(props) {
	return (
		<div className="app-wrapper">
			<PageWrapper>{props.children}</PageWrapper>
		</div>
	);
}

AppWrapper.propTypes = {
	children: PropTypes.element,
};

export default AppWrapper;
