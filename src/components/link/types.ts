import { AnchorHTMLAttributes, ReactNode } from 'react';
import { AriaLinkOptions } from 'react-aria';

export type LinkProps = {
	children: ReactNode;
	isExternal?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
	AriaLinkOptions;
