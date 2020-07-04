import React, { useContext } from 'react';
import getLocale from './getLocale';

export const DEFAULT_LOCALE = ['en-US', 'en'];

const LocaleContext = React.createContext(getLocale(DEFAULT_LOCALE));

export const LocaleContextProvider = LocaleContext.Provider;

export const useLocale = () => {
	const value = useContext(LocaleContext);
    
	return [value[0], value];
};
