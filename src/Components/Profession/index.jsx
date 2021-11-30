import React, { useContext, useEffect } from 'react';
import { Layout, Col, Row, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';

import './styles/Profession.scss';
import SkillChart from '../../Common/SkillChart';
import Languages from './images/languages.png';
const { Content } = Layout;

function Profession(props) {
	const [state, dispatch] = useContext(Context);
	const { pageInfo } = state;

	useEffect(() => {
		dispatch({
			type: SET_PAGE_INFO,
			payload: { ...pageInfo, defaultSelectedKeys: 'profession' },
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const contentStyle = {
		padding: '0px',
		color: '#fff',
		textAlign: 'justify',
		justifyInner: 'center',
		maxWidth: '700px',
	};

	const menu = (
		<Menu>
			<Menu.Item key="1" icon={<UserOutlined />}>
				<a
					href="https://en.wikipedia.org/wiki/Web_developer"
					target="_blank"
					rel="noreferrer"
				>
					Web developer
				</a>
			</Menu.Item>
			<Menu.Item key="2" icon={<UserOutlined />}>
				<a
					href="https://en.wikipedia.org/wiki/Web_design"
					target="_blank"
					rel="noreferrer"
				>
					Web Designer
				</a>
			</Menu.Item>
			<Menu.Item key="3" icon={<UserOutlined />}>
				<a
					href="https://www.w3schools.com/whatis/whatis_fullstack.asp"
					target="_blank"
					rel="noreferrer"
				>
					Full stack developer
				</a>
			</Menu.Item>
			<Menu.Item key="4" icon={<UserOutlined />}>
				<a
					href="https://en.wikipedia.org/wiki/Database_administrator"
					target="_blank"
					rel="noreferrer"
				>
					Database administrator
				</a>
			</Menu.Item>
			<Menu.Item key="5" icon={<UserOutlined />}>
				<a
					href="https://wiki2.org/en/Database_administrator"
					target="_blank"
					rel="noreferrer"
				>
					Database Administraror
				</a>
			</Menu.Item>
			<Menu.Item key="6" icon={<UserOutlined />}>
				<a
					href="https://en.wikipedia.org/wiki/Java_(programming_language)"
					target="_blank"
					rel="noreferrer"
				>
					Java programmer
				</a>
			</Menu.Item>
			<Menu.Item key="7" icon={<UserOutlined />}>
				<a
					href="https://en.wikipedia.org/wiki/Network_engineering"
					target="_blank"
					rel="noreferrer"
				>
					Network engineer
				</a>
			</Menu.Item>
			<Menu.Item key="8" icon={<UserOutlined />}>
				<a
					href="https://en.wikipedia.org/wiki/Computer_engineering"
					target="_blank"
					rel="noreferrer"
				>
					Computer engineer
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<Content style={{ padding: '0 50px', minHeight: '80vh' }}>
			<div className="site-layout-content">
				<Row>
					<Col
						xs={{ span: 24 }}
						md={{ span: 24 }}
						lg={{ span: 24 }}
						style={{ textAlign: 'right' }}
					>
						W3C Results:{' '}
						<a
							href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fapp-desn3203.herokuapp.com%2F"
							target="_blank"
							rel="noreferrer"
						>
							Document checking completed. No errors or warnings
							to show.
						</a>
					</Col>
				</Row>
				<Row
					gutter={16}
					className="row-custom dv-ms-su-mlp-3"
					style={{ padding: '30px' }}
				>
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
						<div className="row-custom-content">
							<div className="row-custom-content-main-div">
								<h2 style={contentStyle}>
									<div className="image-cropper-home">
										<img
											src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/239313767_6264035263614501_7635476100061483535_n.jpg?_nc_cat=104&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ivrnJESSqrUAX8BOon8&_nc_ht=scontent.fyyc3-1.fna&oh=5a26c485605992e1ae1b8699816b96c1&oe=61ABD96F"
											alt="External"
										/>
									</div>
									<span>My Profession</span>
									<p>
										Building state-of-the-art, easy to use,
										user-friendly websites and applications
										is truly a passion of mine and I
										actively seek out new technologies and
										stay up-to-date on industry trends and
										advancements. This has allowed me to
										stay ahead of the curve and deliver
										exceptional work to all of my employers,
										including those I've worked for on a
										project basis.
									</p>
								</h2>
							</div>
							<Dropdown
								className="menu-profession"
								overlay={menu}
							>
								<Button>
									Professions <DownOutlined />
								</Button>
							</Dropdown>
						</div>
					</Col>
				</Row>
				<Row gutter={16} className="row-expertise">
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
						<h1>The IT technologies</h1>
						<div className="img-wrapper-expertise">
							<img src={Languages} alt="Expertise" />
						</div>
					</Col>
				</Row>
				<Row gutter={16} className="row-experience">
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
						<div>
							<SkillChart />
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default Profession;
