import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import styles from './styles.module.scss';
import Nav from '@/components/nav';

export const metadata: Metadata = {
	title: 'Whatodo - Register a new account',
	description: 'Register a new Whatodo account',
};

type RegisterLayoutProps = {
	children: ReactNode;
};

export default function RegisterLayout({ children }: RegisterLayoutProps) {
	return (
		<div id={styles['wrapper']}>
			<Nav />
			{children}
		</div>
	);
}
