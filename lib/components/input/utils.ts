import { InputHTMLAttributes, ReactNode, Ref, RefObject } from 'react';

export enum EnumInputVariants {
	primary = 'primary',
	secondary = 'secondary',
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	className?: string;
	isInvalid?: boolean;
	rightIcon?: ReactNode;
	variant?: keyof typeof EnumInputVariants;
}

export interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	isInvalid?: boolean;
	className?: string;
	variant?: keyof typeof EnumInputVariants;
}

export interface IFileInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement | null>;
	text?: string;
	children?: ReactNode;
	accept?: string;
}
