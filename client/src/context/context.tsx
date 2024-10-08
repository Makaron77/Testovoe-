import { IUser } from '@/types/styles';
import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
	auth: string;
	setAuth: (item: string) => void;
	userData: IUser;
	setUserData: (user: IUser) => void;
	burgerActiveMenu: boolean;
	setBurgerActiveMenu: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
	auth: '',
	setAuth: () => {},
	userData: { id: '', name: '', avatar: '' },
	setUserData: () => {},
	burgerActiveMenu: false,
	setBurgerActiveMenu: () => {},
});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {
	const [auth, setAuth] = useState<string>('');
	const [userData, setUserData] = useState<IUser>({
		id: '',
		name: '',
		avatar: '',
	});
	const [burgerActiveMenu, setBurgerActiveMenu] = useState(false);

	return (
		<UserContext.Provider
			value={{
				auth,
				setAuth,
				userData,
				setUserData,
				burgerActiveMenu,
				setBurgerActiveMenu,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
