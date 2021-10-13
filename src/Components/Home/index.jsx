import React, { useContext, useEffect } from 'react';
import { Layout, Col, Row, Carousel } from 'antd';
import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';

import './styles/Home.scss';

const { Content } = Layout;

function Home(props) {
	const [state, dispatch] = useContext(Context);
	const { pageInfo } = state;

	useEffect(() => {
		dispatch({
			type: SET_PAGE_INFO,
			payload: { ...pageInfo, defaultSelectedKeys: 'home' },
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const contentStyle = {
		padding: '90px',
		color: '#000',
		textAlign: 'justify',
		justifyInner: 'center',
	};

	return (
		<Content style={{ padding: '0 50px', minHeight: '80vh' }}>
			<div className="site-layout-content">
				<Row
					gutter={16}
					className="row-custom"
					style={{ padding: '30px' }}
				>
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
						<div className="row-custom-content">
							<div>
								<h2 style={contentStyle}>
									<span>Welcome!</span>
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
						</div>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
						{/* <img
							src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t31.18172-8/191580_200880043263417_2080176_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=S4xq_MylFngAX_IjCjH&_nc_ht=scontent.fyyc3-1.fna&oh=e6d98b0a1501f10112582ed2628f223c&oe=618A0B0E"
							alt="Profile Image"
						/> */}
						<div className="img-custom fb-pic-1">
							<img
								src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t31.18172-8/191580_200880043263417_2080176_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=S4xq_MylFngAX_IjCjH&_nc_ht=scontent.fyyc3-1.fna&oh=e6d98b0a1501f10112582ed2628f223c&oe=618A0B0E"
								alt="Success design"
							/>
						</div>
					</Col>
				</Row>
				<Row
					gutter={16}
					className="row-custom"
					style={{ background: '#81C784' }}
				>
					<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
						{/* <img
							src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t31.18172-8/191580_200880043263417_2080176_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=S4xq_MylFngAX_IjCjH&_nc_ht=scontent.fyyc3-1.fna&oh=e6d98b0a1501f10112582ed2628f223c&oe=618A0B0E"
							alt="Profile Image"
						/> */}
						<div className="img-custom">
							<img
								src="https://www.satanko.com/en/images/satanko_web.png"
								alt="Success design"
							/>
						</div>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
						<div className="row-custom-content">
							<div>
								<h2 style={contentStyle}>
									<span>
										Successful web design thanks to creative
										implementation
									</span>
									<p>
										An Internet presence is the digital
										billboard of your company. It
										contributes to the fact that prospective
										customers become new customers.
										Consumers mainly inform themselves about
										your services and products on the
										Internet.I design your website so that
										your company is optimally presented.
										With the conception, the graphics and
										the image selection as well as the
										programming I cover all areas to set up
										your individual website successfully.
									</p>
								</h2>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default Home;
