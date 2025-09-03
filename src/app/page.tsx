'use client';

import { useOverlayTriggerState } from 'react-stately';
import styles from './styles.module.scss';
import { useLanguageState } from '@/context/language';
import { UserIcon } from '@/components/icons';
import Button from '@/components/button';
import PasswordField from '@/components/passwordField';
import Modal from '@/components/modal';
import TextField from '@/components/textField';
import Nav from '@/components/nav';

export default function HomePage() {
	const { currentLanguageFile: lang } = useLanguageState();
	const testModalState = useOverlayTriggerState({});

	return (
		<div id={styles['wrapper']}>
			{testModalState.isOpen && (
				<Modal
					title="Test"
					state={testModalState}
					buttons={[
						{
							variant: 'primary',
							children: lang?.common?.ok,
						},
					]}
				>
					Test
				</Modal>
			)}

			<Nav />

			<main id={styles['content']}>
				<Button variant="primary" scheme="dark" icon={<UserIcon />}>
					Primary dark
				</Button>
				<Button variant="primary" scheme="light" icon={<UserIcon />}>
					Primary light
				</Button>
				<Button variant="outline" scheme="dark" icon={<UserIcon />}>
					Outline dark
				</Button>
				<Button variant="outline" scheme="light" icon={<UserIcon />}>
					Outline light
				</Button>
				<Button variant="ghost" scheme="dark" icon={<UserIcon />}>
					Ghost dark
				</Button>
				<Button variant="ghost" scheme="light" icon={<UserIcon />}>
					Ghost light
				</Button>
				<TextField label="Username" icon={<UserIcon />} placeholder="John123" />
				<PasswordField label="Password" />
			</main>
		</div>
	);
}
