'use client';

import { useRef } from 'react';
import { useLink } from 'react-aria';

import styles from './styles.module.scss';
import { LinkProps } from './types';

export default function Link({ children, ...props }: LinkProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	const { linkProps } = useLink(props, ref);

	return (
		<div className={styles.wrapper}>
			<a ref={ref} {...linkProps} {...props}>
				{children}
			</a>
		</div>
	);
}
