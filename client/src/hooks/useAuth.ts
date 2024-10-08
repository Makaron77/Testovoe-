import { useContext, useEffect } from 'react';
import { UserContext } from '@/context/context';
import { GraphQLClient } from 'graphql-request';
import { UserQuery } from '@/graphql/mutations';


export function useAuth() {
	const { auth, setAuth, userData, setUserData } = useContext(UserContext);


	useEffect(() => {
		const storedToken = localStorage.getItem('access_token');
		if (storedToken) {
			setAuth(storedToken);
			const fetchUserProfile = async token => {
				const client = new GraphQLClient('https://api.escuelajs.co/graphql', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				try {
					const data = await client.request(UserQuery);
					setUserData(data.myProfile);
				} catch (error) {
					console.error('Ошибка при получении данных профиля:', error);
				}
			};
			fetchUserProfile(storedToken);
		}
	}, [auth]);

	return auth;
}
