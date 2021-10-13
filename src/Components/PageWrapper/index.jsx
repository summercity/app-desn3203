import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import ContextStore from '../../context/ContextStore';
import Header from '../Header';

const { Footer } = Layout;

function PageWrapper(props) {
	return (
		<ContextStore>
			<Layout className="layout">
				<Header />
				{props.children}
				<Footer
					style={{
						minHeight: '20vh',
						textAlign: 'center',
						background: '#000',
						color: '#fff',
					}}
				>
					©2021 Created by Jan Dave Arce
					<p>Bow Valley College</p>
					<p>jandave.arce@gmail.com</p>
				</Footer>
			</Layout>
		</ContextStore>
	);
}

PageWrapper.propTypes = {
	children: PropTypes.element,
};

export default PageWrapper;
