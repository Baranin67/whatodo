import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AriaButtonProps } from 'react-aria';

export type ButtonProps = {
	variant: 'primary' | 'outline' | 'ghost' | 'input';
	scheme?: 'dark' | 'light';
	icon?: ReactNode;
	iconPos?: 'left' | 'right';
} & ButtonHTMLAttributes<HTMLButtonElement> &
	AriaButtonProps;
