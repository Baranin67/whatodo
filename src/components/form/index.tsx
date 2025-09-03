'use client';

import styles from './styles.module.scss';
import { FormProps } from './types';

import Button from '@/components/button';
import Link from '@/components/link';

export default function From({
	title,
	children,
	submitButton,
	extraLinks,
	extraButtons,
	...props
}: FormProps) {
	return (
		<div className={styles.wrapper}>
			<header>
				<h2>{title}</h2>
			</header>

			{/* FORM */}
			<form {...props}>
				{children}
				{/* submit button */}
				{submitButton && <Button variant="primary" {...submitButton} />}
			</form>

			{/* EXTRA BUTTONS */}
			<div className={styles['extra-buttons']}>
				{extraButtons &&
					extraButtons.map((btn, idx) => <Button key={idx} {...btn} />)}
			</div>

			{/* EXTRA LINKS */}
			<div className={styles['extra-links']}>
				{extraLinks &&
					extraLinks.map(({ prefix, ...link }, idx) => (
						<span key={idx}>
							{prefix}
							<Link {...link} />
						</span>
					))}
			</div>
		</div>
	);
}
