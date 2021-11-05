import React, { useContext, useEffect, useState } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import {
	Layout,
	Breadcrumb,
	Col,
	Row,
	Button,
	Input,
	notification,
	Popconfirm,
	Alert,
} from 'antd';
import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';
import { Asc, Desc, Delete } from '../../Util/Array';

import './styles/ArrayManipulation.scss';
import {
	PlusSquareOutlined,
	BorderTopOutlined,
	BorderVerticleOutlined,
	BorderBottomOutlined,
	SortAscendingOutlined,
	SortDescendingOutlined,
	DeleteOutlined,
	CheckOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

let mockDataFruits = [
	{
		id: 1,
		name: 'Apple',
		duplicated: true,
	},
	{
		id: 2,
		name: 'Orange',
		duplicated: false,
	},
	{
		id: 3,
		name: 'Grapes',
		duplicated: false,
	},
	{
		id: 4,
		name: 'Apple',
		duplicated: false,
	},
];

const text = 'Are you sure to remove this fruit?';

function ArrayManipulation(props) {
	const [state, dispatch] = useContext(Context);
	const { pageInfo } = state;

	const [fruits, setFruits] = useState(mockDataFruits);
	const [fruit, setFruit] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [isEmptyBasket, setIsEmptyBasket] = useState(true);

	useEffect(() => {
		$('#sortable').sortable();

		dispatch({
			type: SET_PAGE_INFO,
			payload: { ...pageInfo, defaultSelectedKeys: 'array-manipulation' },
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getCurrentState = () => {
		let _fruits = [];
		$.each($('#sortable').find('li'), function () {
			_fruits.push({
				id: Date.now() + Math.random(),
				name: $(this).text(),
				duplicated: $(this).data('duplicated'),
			});
		});
		setFruits(_fruits);
	};

	$('#sortable').sortable({
		update: function () {
			getCurrentState();
		},
	});

	const handleOnChange = (e) => {
		if (e.target.value.trim() === '') {
			setIsEmptyBasket(true);
		} else {
			setIsEmptyBasket(false);
		}
		setFruit(capitalize(e.target.value));
	};

	const capitalize = (s) => {
		if (typeof s !== 'string') return '';
		return s.toLowerCase().charAt(0).toUpperCase() + s.slice(1);
	};

	const openNotificationWithIcon = ({ type, message, description }) => {
		notification[type]({
			message,
			description,
		});
	};

	const AddNewFruit = (position) => {
		if (isEmptyBasket) {
			openNotificationWithIcon({
				type: 'error',
				message: 'Invalid fruit name',
				description: 'Please enter the name of the fruit.',
			});
			return true;
		}
		setIsLoading(true);
		if (!isLoading) {
			const newFruits = [...fruits];

			$('.block-new-fruit')
				.toggle('slide', { direction: 'down' }, 800)
				.promise()
				.done(function () {
					setFruit('Empty Basket');
					const numberOfFruits = fruits.filter(
						(item) => item.name === fruit
					);
					const newFruit = {
						id: Date.now() + Math.random(),
						name: fruit,
						duplicated: numberOfFruits.length > 0,
					};

					if (position === 'top') {
						newFruits.unshift(newFruit);
					} else if (position === 'middle') {
						const spliceStart = Math.round(newFruits.length / 2);
						newFruits.splice(spliceStart, 0, newFruit);
					} else if (position === 'bottom') {
						newFruits.push(newFruit);
					} else {
						return true;
					}

					setFruit('');
					setFruits(newFruits);
					setIsEmptyBasket(true);
					setIsLoading(false);

					openNotificationWithIcon({
						type: 'success',
						message: 'Information',
						description: 'Your changes have been saved.',
					});
				});
			$('.block-new-fruit').toggle('slide', { direction: 'down' }, 150);
		}
	};

	const Sort = (sort) => {
		let sorted = [...fruits];
		if (sort === 'asc') {
			// sorted.sort((a, b) => parseFloat(b.name) < parseFloat(a.name));
			sorted.sort(Asc);
		} else {
			sorted.sort(Desc);
		}
		setFruits(sorted);
	};

	const Remove = (i) => {
		setFruits(Delete(fruits, i));
		openNotificationWithIcon({
			type: 'success',
			message: 'Information',
			description: 'Your changes have been saved.',
		});
	};

	return (
		<Content style={{ padding: '0 50px', minHeight: '80vh' }}>
			<Breadcrumb style={{ margin: '16px 20px' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>ArrayManipulation</Breadcrumb.Item>
			</Breadcrumb>
			<div className="site-layout-content array-manipulation">
				<Row gutter={16}>
					<Col span={24}>
						<h1
							style={{
								textAlign: 'center',
							}}
						>
							Array Manipulation
						</h1>
						<Alert
							className="alert"
							message="Informational Notes"
							description="You can also use Drag & Drop to arrange the order. The delete option is available for duplicated entries."
							type="info"
							showIcon
							closable
						/>
					</Col>
					<Col>
						<div className="input-fruit">
							<Input
								name="fruit"
								size="large"
								placeholder="Enter fruit name"
								prefix={<PlusSquareOutlined />}
								onChange={handleOnChange}
								value={fruit}
							/>
						</div>
						<div className="btn-control">
							<Button
								className="btn-control"
								type="primary"
								shape="round"
								icon={<BorderTopOutlined />}
								size="large"
								onClick={() => AddNewFruit('top')}
								loading={isLoading}
							>
								Add at the top of the list
							</Button>
							<Button
								className="btn-control"
								type="primary"
								shape="round"
								icon={<BorderVerticleOutlined />}
								size="large"
								onClick={() => AddNewFruit('middle')}
								loading={isLoading}
							>
								Add in the middle of the list
							</Button>
							<Button
								className="btn-control"
								type="primary"
								shape="round"
								icon={<BorderBottomOutlined />}
								size="large"
								onClick={() => AddNewFruit('bottom')}
								loading={isLoading}
							>
								Add at the end of the list
							</Button>

							<Button
								className="btn-control btn-sort"
								type="primary"
								shape="round"
								icon={<SortAscendingOutlined />}
								size="large"
								onClick={() => Sort('asc')}
								loading={isLoading}
							/>

							<Button
								className="btn-control btn-sort"
								type="primary"
								shape="round"
								icon={<SortDescendingOutlined />}
								size="large"
								onClick={() => Sort('desc')}
								loading={isLoading}
							/>
						</div>

						<div className="block-new-fruit">
							{isEmptyBasket ? 'Empty Basket' : fruit}
						</div>

						<ul id="sortable">
							{fruits?.map((item, i) => (
								<li
									className="ui-state-default"
									key={item.id}
									data-duplicated={item.duplicated}
								>
									{item.name}
									{item.duplicated ? (
										<Popconfirm
											placement="right"
											title={text}
											onConfirm={() => Remove(i)}
											okText="Yes"
											cancelText="No"
										>
											<span
												className="btn-delete-duplicate"
												type="primary"
											>
												<DeleteOutlined />
											</span>
										</Popconfirm>
									) : (
										<span
											className="look-good"
											type="primary"
										>
											<CheckOutlined />
										</span>
									)}
								</li>
							))}
						</ul>
					</Col>
				</Row>
			</div>
		</Content>
	);
}

export default ArrayManipulation;
