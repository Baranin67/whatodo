'use client';

import { useRef } from 'react';
import { useTextField } from 'react-aria';

import fieldStyles from '@/styles/Field.module.scss';
import { TextInputProps } from './types';

import Button from '@/components/button';

export default function TextField({
	label,
	icon,
	button,
	children,
	...props
}: TextInputProps) {
	const ref = useRef<HTMLInputElement>(null);
	const { inputProps, labelProps } = useTextField(props, ref);

	return (
		<div className={fieldStyles.wrapper}>
			{/* LABEL */}
			{label && (
				<label {...labelProps} htmlFor={inputProps.id}>
					{label}
				</label>
			)}

			<div className={fieldStyles['input-wrapper']}>
				{/* ICON */}
				{icon && <div className={fieldStyles['icon-wrapper']}>{icon}</div>}

				{/* INPUT */}
				<input ref={ref} {...inputProps} {...props} />

				{/* BUTTON */}
				{button && <Button variant="input" {...button} />}
			</div>
		</div>
	);
}
