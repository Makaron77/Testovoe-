import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
	auth: string;
	setAuth: (item: string) => void;
	userData: object;
	setUserData: (object: object) => void;
	burgerActiveMenu: boolean;
	setBurgerActiveMenu: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
	auth: '',
	setAuth: () => {},
	userData: {},
	setUserData: () => {},
	burgerActiveMenu: false,
	setBurgerActiveMenu: () => {},
});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {
	const [auth, setAuth] = useState('');
	const [userData, setUserData] = useState({
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
