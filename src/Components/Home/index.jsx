import React, { useContext, useEffect } from 'react';
import { Layout, Col, Row } from 'antd';
import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';
import SkillChart from '../../Common/SkillChart';

import './styles/Home.scss';
import Languages from './images/languages.png';
import LogoIntro from './images/intro-logo-black.png';
import Intro from './videos/my-intro.mp4';
import SucessRow from './images/success-img.png';
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
		padding: '0px',
		color: '#fff',
		textAlign: 'justify',
		justifyInner: 'center',
		maxWidth: '700px',
	};

	return (
		<Content style={{ padding: '0 50px', minHeight: '80vh' }}>
			<div className="site-layout-content">
				<video className="video-intro" loop autoPlay="autoplay" muted>
					<source src={Intro} type="video/mp4" />
				</video>
				<Row id="intro" gutter={16} className="row-intro">
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
						<div className="img-intro-wrapper">
							<img src={LogoIntro} alt="Intro" />
						</div>
						<div className="text-intro-wrapper">
							<h1 className="intro-title">
								DESN3203 WEB DESIGN AND DEVELOPMENT
							</h1>
							<hr className="intro-title-hr" />
							<p className="intro-title-p">
								“Simplicity is the soul of efficiency.” –{' '}
								<span>Austin Freeman</span>
							</p>
						</div>
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
									<div className="image-cropper">
										<img
											src="https://scontent.fyyc3-1.fna.fbcdn.net/v/t31.18172-8/191580_200880043263417_2080176_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=S4xq_MylFngAX_IjCjH&_nc_ht=scontent.fyyc3-1.fna&oh=e6d98b0a1501f10112582ed2628f223c&oe=618A0B0E"
											alt="External"
										/>
									</div>
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
					<Col
						xs={{ span: 24 }}
						md={{ span: 24 }}
						lg={{ span: 12 }}
					></Col>
				</Row>
				<Row gutter={16} className="row-custom row-success-web-design">
					<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
						<div className="img-custom">
							<img src={SucessRow} alt="Success design" />
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
				<Row gutter={16} className="row-expertise">
					<Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
						<h1>EXPERTISE</h1>
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

export default Home;
