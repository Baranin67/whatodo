'use client';

import { useRef } from 'react';
import { useModalOverlay } from 'react-aria';

import styles from './styles.module.scss';
import { ModalProps } from './types';

import { useLanguageState } from '@/context/language';
import Button from '@/components/button';
import { CrossIcon } from '../icons';

export default function Modal({
	state,
	buttons,
	cancelButton,
	children,
	title,
	...props
}: ModalProps) {
	const ref = useRef<HTMLInputElement>(null);
	const { underlayProps, modalProps } = useModalOverlay(props, state, ref);
	const { currentLanguageFile: lang } = useLanguageState();

	return (
		<div className={styles.underlay} {...underlayProps}>
			<div className={styles.modal}>
				<div className={styles.content} {...modalProps}>
					<header>
						<h2>{title}</h2>
					</header>
					{children}
				</div>

				<div className={styles.buttons}>
					{/* BUTTONS */}
					{buttons && buttons.map((btn, idx) => <Button key={idx} {...btn} />)}
					{/* CANCEL BUTTON */}
					<Button
						variant="outline"
						children={lang?.common?.cancel}
						icon={<CrossIcon />}
						onClick={_ => state.close()}
						{...cancelButton}
					/>
				</div>
			</div>
		</div>
	);
}
