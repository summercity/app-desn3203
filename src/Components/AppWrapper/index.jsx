import React from 'react';
import PropTypes from 'prop-types';

import '../../App.scss';

function AppWrapper(props) {
	return <div className="app-wrapper">{props.children}</div>;
}

AppWrapper.propTypes = {
	children: PropTypes.element,
};

export default AppWrapper;
