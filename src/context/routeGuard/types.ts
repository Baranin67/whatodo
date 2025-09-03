import { ReactNode } from 'react';

export type RouteGuardStateContextValues = {
	redirect: (url: string) => void;
};

export type RouteGuardProviderProps = {
	children: ReactNode;
};
