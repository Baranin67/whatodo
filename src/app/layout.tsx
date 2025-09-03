import { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/styles/global.scss';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'Whatodo | Home',
	description: 'Check out Whatodo task management app!',
};

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
