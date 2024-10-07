
import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
	auth: string;
	setAuth: (item: string) => void;
	burgerActiveMenu: boolean;
	setBurgerActiveMenu: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
	auth: '',
	setAuth: () => {},
	burgerActiveMenu: false,
	setBurgerActiveMenu: () => {},
});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {
const [auth, setAuth] = useState('')
const [burgerActiveMenu, setBurgerActiveMenu]= useState(false);




	return (
		<UserContext.Provider
			value={{ auth, setAuth, burgerActiveMenu, setBurgerActiveMenu }}
		>
			{children}
		</UserContext.Provider>
	);
};
