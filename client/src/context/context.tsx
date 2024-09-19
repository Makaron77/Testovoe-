
import React, { createContext, ReactNode, useRef, useState } from 'react';

interface UserContextType {

}

export const UserContext = createContext<UserContextType>({

});

interface UserAppContextProps {
	children: ReactNode;
}

export const UserAppContext = ({ children }: UserAppContextProps) => {






	return (
		<UserContext.Provider
			value={{}}
		>
			{children}
		</UserContext.Provider>
	);
};
