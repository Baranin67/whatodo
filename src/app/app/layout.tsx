import { ReactNode } from 'react';

import styles from './styles.module.scss';

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div id={styles['wrapper']}>
			<div id={styles['logo']}>LOGO</div>
			<div id={styles['top-bar']}>TOP BAR</div>
			<nav id={styles['nav']}>NAV</nav>
			<main id={styles['content']}>{children}</main>
		</div>
	);
}
