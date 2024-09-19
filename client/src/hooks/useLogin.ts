import { useState } from 'react';

import { LOGIN_MUTATION } from '../graphql/mutations';
import { client } from '@/graphql/graphqlClient';

export function useLogin() {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData(prev => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { email, password } = formData;

		try {
			const variables = { email, password };
			const data = await client.request(LOGIN_MUTATION, variables);
			console.log('Login successful:', data);

			localStorage.setItem('access_token', data.login.access_token);
			localStorage.setItem('refresh_token', data.login.refresh_token);
		} catch (error) {
			setError('Login failed');
			console.error('Error logging in:', error);
		}
	};

	return { formData, error, handleChange, handleSubmit };
}
