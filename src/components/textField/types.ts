import { InputHTMLAttributes, ReactNode } from 'react';
import { AriaTextFieldProps } from 'react-aria';
import { ButtonProps } from '@/components/button/types';

export type TextInputProps = {
	label?: string;
	icon?: ReactNode;
	button?: Partial<ButtonProps> & {
		icon: ButtonProps['icon'];
		onClick: ButtonProps['onClick'];
	};
} & InputHTMLAttributes<HTMLInputElement> &
	AriaTextFieldProps;
