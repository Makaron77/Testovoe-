import { useContext, useEffect } from 'react';
import { UserContext } from '@/context/context';

export function useAuth() {
	const { auth, setAuth } = useContext(UserContext);

	useEffect(() => {
		const storedToken = localStorage.getItem('access_token');
		if (storedToken) {
			setAuth(storedToken);
		}
	}, []);

	return auth;
}
