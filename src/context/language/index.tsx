'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
	LanguageStateContextValues,
	Language,
	LanguageFile,
	LanguageProviderProps,
} from './types';
import Module from 'module';

const LanguageStateContext = createContext<LanguageStateContextValues | null>(
	null
);

const languages: Language[] = ['en-EN'];
const defaultLanguage: Language = 'en-EN';

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const [currentLanguage, setCurrentLanguage] =
		useState<Language>(defaultLanguage);
	const [currentLanguageFile, setCurrentLanguageFile] =
		useState<LanguageFile | null>(null);

	useEffect(() => {
		let lang: Language = localStorage.getItem('lang') as Language;

		if (!languages.includes(lang)) lang = defaultLanguage;
		setCurrentLanguage(_ => lang);
	}, []);

	useEffect(() => {
		import(`@/lang/${currentLanguage}.json`).then((langFile: Module) => {
			setCurrentLanguageFile(langFile);
		});
	}, [currentLanguage]);

	const state: LanguageStateContextValues = {
		currentLanguage: currentLanguage,
		currentLanguageFile: currentLanguageFile,
	};

	return (
		<LanguageStateContext.Provider value={state}>
			{children}
		</LanguageStateContext.Provider>
	);
};

export function useLanguageState(): LanguageStateContextValues {
	const state = useContext(LanguageStateContext);

	if (state === null)
		throw new Error('useLanguageState must be used within a LanguageProvider');

	return state;
}
