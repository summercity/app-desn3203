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
	DatePicker,
} from 'antd';

import { Context } from '../../context/ContextStore';
import { SET_PAGE_INFO } from '../../context/constants';

import './styles/Form.scss';

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

function Employee(props) {
	const [state, dispatch] = useContext(Context);
	const [employee, setEmployee] = useState({
		firstName: '',
		lastName: '',
		birthday: '',
		profession: '',
		salary: '',
		company: '',
	});
	const { pageInfo } = state;

	useEffect(() => {
		dispatch({
			type: SET_PAGE_INFO,
			payload: { ...pageInfo, defaultSelectedKeys: 'employee' },
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const register = () => {
		console.log('payload', employee);
		if (
			employee.firstName === '' ||
			employee.lastName === '' ||
			employee.birthday === '' ||
			employee.profession === '' ||
			employee.salary === '' ||
			employee.company === ''
		) {
			console.log('Please enter required fields...');
		} else {
			fetch('https://desn3203-api.herokuapp.com/api/employee', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(employee),
			})
				.then((response) => {
					return response.json();
				})
				.then((responseData) => {
					console.log('res', responseData);
					return responseData;
				})
				.then((data) => {
					console.log('data', data);
					// if (data === true) {
					openNotificationWithIcon({
						type: 'success',
						message: 'Information',
						description: 'Successfully saved!',
					});
					form.resetFields();
					//}
				})

				.catch((err) => {
					console.log('fetch error' + err);
				});
		}
	};

	const onChange = (e) => {
		employee[e.target.name] = e.target.value;

		// if (e.target.name === 'birthday') {
		// 	employee[e.target.name] = moment(e.target.value).format(
		// 		'mm/dd/yyy'
		// 	);
		// }

		setEmployee(employee);
	};

	const openNotificationWithIcon = ({ type, message, description }) => {
		notification[type]({
			message,
			description,
		});
	};

	function onChangeDate(date, dateString) {
		console.log(date, dateString);
		employee.birthday = dateString;
		setEmployee(employee);
	}

	return (
		<Content
			className="registration-form-wrapper"
			style={{ minHeight: '80vh' }}
		>
			<Breadcrumb style={{ margin: '16px 20px' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>Employee</Breadcrumb.Item>
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
							Employee
						</h1>
					</Col>
				</Row>
			</div>
			<div className="custom-form">
				<Form
					{...formItemLayout}
					form={form}
					name="employee"
					onFinish={onFinish}
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '+1',
					}}
					scrollToFirstError
				>
					<Form.Item
						name="firstName"
						label="First Name"
						tooltip="What is your first name?"
						rules={[
							{
								required: true,
								message: 'Please input your last name!',
								whitespace: true,
							},
							{
								pattern: new RegExp('^[a-zA-Z].*'),
								message: 'Name should not start with number',
							},
						]}
					>
						<Input
							name="firstName"
							onChange={onChange}
							value={'add'}
						/>
					</Form.Item>

					<Form.Item
						name="lastName"
						label="Last Name"
						tooltip="What is your last name?"
						rules={[
							{
								required: true,
								message: 'Please input your last name!',
								whitespace: true,
							},
							{
								pattern: new RegExp('^[a-zA-Z].*'),
								message: 'Name should not start with number',
							},
						]}
					>
						<Input
							name="lastName"
							onChange={onChange}
							value={'add'}
						/>
					</Form.Item>

					<Form.Item
						name="birthday"
						label="DatePicker"
						rules={[
							{
								required: true,
								message: 'Please input your birthday!',
							},
						]}
					>
						<DatePicker name="birthday" onChange={onChangeDate} />
					</Form.Item>

					<Form.Item
						name="profession"
						label="Profession"
						rules={[
							{
								required: true,
								message: 'Please input a profession!',
							},
						]}
					>
						<Input
							name="profession"
							rows={4}
							onChange={onChange}
							value={employee.profession}
						/>
					</Form.Item>

					<Form.Item
						name="salary"
						label="Salary"
						rules={[
							{
								required: true,
								message: 'Please input your salary!',
								whitespace: true,
							},
						]}
					>
						<Input
							name="salary"
							onChange={onChange}
							value={'add'}
						/>
					</Form.Item>

					<Form.Item
						name="company"
						label="Company Name"
						rules={[
							{
								required: true,
								message: 'Please input your last name!',
								whitespace: true,
							},
						]}
					>
						<Input
							name="company"
							onChange={onChange}
							value={employee.company}
						/>
					</Form.Item>

					<Form.Item {...tailFormItemLayout}>
						<Button
							type="primary"
							htmlType="submit"
							onClick={register}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Content>
	);
}

export default Employee;
