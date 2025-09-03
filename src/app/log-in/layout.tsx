import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import styles from './styles.module.scss';
import Nav from '@/components/nav';

export const metadata: Metadata = {
	title: 'Whatodo - Log into your account',
	description: 'Log into a Whatodo account',
};

type LoginLayoutProps = {
	children: ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
	return (
		<div id={styles['wrapper']}>
			<Nav />
			{children}
		</div>
	);
}
