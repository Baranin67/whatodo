import { InputHTMLAttributes } from 'react';
import { AriaTextFieldProps } from 'react-aria';

export type PasswordInputProps = {
	label?: string;
} & InputHTMLAttributes<HTMLInputElement> &
	AriaTextFieldProps;
