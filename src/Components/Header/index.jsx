import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { Context } from '../../context/ContextStore';

import './styles/Header.scss';

const { Header: DefaultHeader } = Layout;

function Header(props) {
	const [state] = useContext(Context);
	const { pageInfo } = state;

	return (
		<DefaultHeader className="header">
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
				{/* <Menu.Item key="profile">
					<a href="/profile">Profile</a>
				</Menu.Item>
				<Menu.Item key="professions">
					<a href="/professions">Professions</a>
				</Menu.Item> */}
				<Menu.Item key="form">
					<a href="/form">Registration</a>
				</Menu.Item>
				<Menu.Item key="fruits">
					<a href="/fruits">Fruits</a>
				</Menu.Item>
			</Menu>
		</DefaultHeader>
	);
}

export default Header;
