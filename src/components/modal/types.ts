import { AriaModalOverlayProps } from 'react-aria';
import { OverlayTriggerState } from '@react-stately/overlays';
import { ButtonProps } from '@/types/button';
import { ReactNode } from 'react';

export type ModalProps = {
	title: string;
	state: OverlayTriggerState;
	buttons: ButtonProps[];
	cancelButton?: Partial<ButtonProps>;
	children: ReactNode;
} & AriaModalOverlayProps;
