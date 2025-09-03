import { ReactNode } from 'react';

export type Language = 'en-EN';
export type LanguageFile = { [key: string]: any };

export type LanguageStateContextValues = {
	currentLanguage: Language;
	currentLanguageFile: LanguageFile | null;
};

export type LanguageProviderProps = {
	children: ReactNode;
};
