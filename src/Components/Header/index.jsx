import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { Context } from '../../context/ContextStore';

import './styles/Header.scss';

const { Header: DefaultHeader } = Layout;

function Header(props) {
	const [state] = useContext(Context);
	const { pageInfo } = state;

	return (
		<DefaultHeader className="header header-fixed">
			<div id="header" className="logo">
				JDA
			</div>
			<Menu
				theme="dark"
				mode="horizontal"
				// Open Menu with Submenu
				//openKeys={openKeys}

				// Select active page
				selectedKeys={[pageInfo.defaultSelectedKeys]}
			>
				<Menu.Item key="home">
					<a href="/">Home</a>
				</Menu.Item>
				<Menu.Item key="profession">
					<a href="/profession">My Profession</a>
				</Menu.Item>
				<Menu.Item key="form">
					<a href="/form">Registration</a>
				</Menu.Item>
				<Menu.Item key="fruits">
					<a href="/fruits">Fruits</a>
				</Menu.Item>
				<Menu.Item key="array-manipulation">
					<a href="/array-manipulation">Array Manipulation</a>
				</Menu.Item>
				<Menu.Item key="contact">
					<a href="/contact">Contact</a>
				</Menu.Item>
				<Menu.Item key="employee">
					<a href="/employee">Employee</a>
				</Menu.Item>
			</Menu>
		</DefaultHeader>
	);
}

export default Header;
