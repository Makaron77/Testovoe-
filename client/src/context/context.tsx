
import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
	auth: string;
	setAuth: (item: string) => void;
}

export const UserContext = createContext<UserContextType>({
	auth: '',
	setAuth: () => { },

});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {
const [auth, setAuth] = useState('')





	return (
		<UserContext.Provider
			value={{auth, setAuth}}
		>
			{children}
		</UserContext.Provider>
	);
};
