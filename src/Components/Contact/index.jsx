import React, { useContext, useEffect, useState } from 'react';
import {
	Layout,
	Form,
	Input,
	Row,
	Col,
	Button,
	Breadcrumb,
	notification,
} from 'antd';

import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';

import './styles/Form.scss';
const { TextArea } = Input;

const { Content } = Layout;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

function Contact(props) {
	const [state, dispatch] = useContext(Context);
	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: '',
	});
	const { pageInfo } = state;

	useEffect(() => {
		dispatch({
			type: SET_PAGE_INFO,
			payload: { ...pageInfo, defaultSelectedKeys: 'contact' },
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const SendContactMessage = () => {
		console.log('payload', contact);
		fetch('https://desn3203-api.herokuapp.com/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(contact),
		})
			.then((response) => {
				return response.json();
			})
			.then((responseData) => {
				console.log(responseData);
				return responseData;
			})
			.then((data) => {
				console.log(data);
				if (data === true) {
					openNotificationWithIcon({
						type: 'success',
						message: 'Information',
						description: 'Message sent!',
					});
					form.resetFields();
				}
			})

			.catch((err) => {
				console.log('fetch error' + err);
			});
	};

	const onChange = (e) => {
		contact[e.target.name] = e.target.value;

		setContact(contact);
	};

	const openNotificationWithIcon = ({ type, message, description }) => {
		notification[type]({
			message,
			description,
		});
	};

	return (
		<Content
			className="registration-form-wrapper"
			style={{ minHeight: '80vh' }}
		>
			<Breadcrumb style={{ margin: '16px 20px' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>Contact</Breadcrumb.Item>
			</Breadcrumb>
			<div className="site-layout-content">
				<Row gutter={16}>
					<Col span={24}>
						<h1
							style={{
								textAlign: 'center',
								color: '#001529',
								fontSize: '50px',
							}}
						>
							Contact
						</h1>
					</Col>
				</Row>
			</div>
			<div className="custom-form">
				<Form
					{...formItemLayout}
					form={form}
					name="contact"
					onFinish={onFinish}
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '+1',
					}}
					scrollToFirstError
				>
					<Form.Item
						name="name"
						label="Name"
						tooltip="What is your full-name?"
						rules={[
							{
								required: true,
								message: 'Please input your name!',
								whitespace: true,
							},
							{
								pattern: new RegExp('^[a-zA-Z].*'),
								message: 'Name should not start with number',
							},
						]}
					>
						<Input name="name" onChange={onChange} value={'add'} />
					</Form.Item>
					<Form.Item
						name="email"
						label="Email"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input
							name="email"
							onChange={onChange}
							value={contact.email}
						/>
					</Form.Item>

					<Form.Item
						name="message"
						label="Message"
						rules={[
							{
								required: true,
								message: 'Please input a message!',
							},
						]}
					>
						<TextArea
							name="message"
							rows={4}
							onChange={onChange}
							value={contact.message}
						/>
					</Form.Item>

					<Form.Item {...tailFormItemLayout}>
						<Button
							type="primary"
							htmlType="submit"
							onClick={SendContactMessage}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Content>
	);
}

export default Contact;
