import { useContext, useState } from 'react';
import { message } from 'antd';
import { LoginMutation } from '../graphql/mutations';
import { client } from '@/graphql/graphqlClient';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/context/context';

export function useLogin() {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const { setAuth } = useContext(UserContext);

	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData(prev => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { email, password } = formData;

		try {
			const variables = { email, password };
			const data = await client.request(LoginMutation, variables);
			console.log('Navigating to /');
			await setAuth(data.login.access_token);
			localStorage.setItem('access_token', data.login.access_token);
			localStorage.setItem('refresh_token', data.login.refresh_token);
			navigate('/')
		} catch (error) {

			message.error('Login failed');
	
		}
	};

	return { formData, handleChange, handleSubmit };
}
