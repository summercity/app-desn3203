import React, { useContext, useEffect } from 'react';
import { Layout, Breadcrumb, Card, Col, Row, Tooltip, Button } from 'antd';
import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';

// import './styles/Professions.scss';

const { Content } = Layout;

function Professions(props) {
	const [state, dispatch] = useContext(Context);
	const { pageInfo } = state;

	useEffect(() => {
		dispatch({
			type: SET_PAGE_INFO,
			payload: { ...pageInfo, defaultSelectedKeys: 'professions' },
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Content style={{ padding: '0 50px', minHeight: '80vh' }}>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>Professions</Breadcrumb.Item>
			</Breadcrumb>
			<div className="site-layout-content">
				<Row gutter={16}>
					<Col span={24}>
						<h1
							style={{
								textAlign: 'center',
								color: '#001529',
							}}
						>
							My Kids Favorite Professions
						</h1>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
						<Tooltip
							placement="top"
							title="Strawberry"
							color="green"
						>
							<Card
								hoverable
								style={{ maxWidth: 340, margin: '0 auto' }}
								cover={
									<img
										alt="example"
										src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/strawberries-1296x728-feature.jpg?w=1155&h=1528"
									/>
								}
							>
								<p>
									The garden strawberry (or simply strawberry;
									is a widely grown hybrid species of the
									genus Fragaria, collectively known as the
									strawberries, which are cultivated worldwide
									for their fruit.
								</p>

								<p>
									The fruit is widely appreciated for its
									characteristic aroma, bright red color,
									juicy texture, and sweetness. It is consumed
									in large quantities, either fresh or in such
									prepared foods as jam, juice, pies, ice
									cream, milkshakes, and chocolates.
									Artificial strawberry flavorings and aromas
									are also widely used in products such as
									candy, soap, lip gloss, perfume, and many
									others.
								</p>
								<a
									href="https://www.britannica.com/plant/strawberry"
									target="_blank"
									rel="noreferrer"
								>
									<Button type="primary" ghost>
										More Information
									</Button>
								</a>
							</Card>
						</Tooltip>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
						<Tooltip placement="top" title="Grape" color="green">
							<Card
								hoverable
								style={{ maxWidth: 340, margin: '0 auto' }}
								cover={
									<img
										alt="example"
										src="https://images.everydayhealth.com/images/diet-nutrition/all-about-grapes-722x406.jpg"
									/>
								}
							>
								<p>
									A grape is a fruit, botanically a berry, of
									the deciduous woody vines of the flowering
									plant genus Vitis.
								</p>

								<p>
									Grapes can be eaten fresh as table grapes,
									used for making wine, jam, grape juice,
									jelly, grape seed extract, vinegar, and
									grape seed oil, or dried as raisins,
									currants and sultanas. Grapes are a
									non-climacteric type of fruit, generally
									occurring in clusters. The Middle East is
									generally described as the homeland of grape
									and the cultivation of this plant began
									there 6,000–8,000 years ago.
								</p>
								<a
									href="https://www.britannica.com/plant/grape"
									target="_blank"
									rel="noreferrer"
								>
									<Button type="primary" ghost>
										More Information
									</Button>
								</a>
							</Card>
						</Tooltip>
					</Col>
					<Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
						<Tooltip
							placement="top"
							title="Watermelon"
							color="green"
						>
							<Card
								hoverable
								style={{ maxWidth: 340, margin: '0 auto' }}
								cover={
									<img
										alt="example"
										src="https://crateandbasket.com/wp-content/uploads/2020/12/Ripe-juicy-watermelon-1024x597.jpg"
									/>
								}
							>
								<p>
									Watermelon (Citrullus lanatus) is a
									flowering plant species of the Cucurbitaceae
									family and the name of its edible fruit. A
									scrambling and trailing vine-like plant, it
									was originally domesticated in Africa. It is
									a highly cultivated fruit worldwide.
								</p>

								<p>
									Watermelon is grown in favorable climates
									from tropical to temperate regions worldwide
									for its large edible fruit, which is a berry
									with a hard rind and is botanically called a
									pepo. The sweet, juicy flesh is usually deep
									red to pink, although seedless varieties
									exist. The fruit can be eaten raw or
									pickled, and the rind is edible after
									cooking.
								</p>
								<a
									href="https://www.britannica.com/plant/watermelon"
									target="_blank"
									rel="noreferrer"
								>
									<Button type="primary" ghost>
										More Information
									</Button>
								</a>
							</Card>
						</Tooltip>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default Professions;
