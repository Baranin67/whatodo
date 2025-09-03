'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/context/language';
import { RouteGuardProvider } from '@/context/routeGuard';
import { UserProvider } from '@/context/user';

type ProvidersProps = {
	children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
	return (
		<LanguageProvider>
			<UserProvider>
				<RouteGuardProvider>{children}</RouteGuardProvider>
			</UserProvider>
		</LanguageProvider>
	);
}
