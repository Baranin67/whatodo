'use client';

import { useState } from 'react';

import { PasswordInputProps } from './types';

import TextField from '@/components/textField';
import { EyeCrossedIcon, EyeIcon, KeyIcon } from '@/components/icons';

export default function PasswordField({ label, ...props }: PasswordInputProps) {
	const [isPasswordShown, showPassword] = useState(false);

	return (
		<TextField
			type={isPasswordShown ? 'text' : 'password'}
			placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
			label={label}
			button={{
				icon: isPasswordShown ? <EyeCrossedIcon /> : <EyeIcon />,
				onClick: () => showPassword(prev => !prev),
			}}
			icon={<KeyIcon />}
			{...props}
		/>
	);
}
