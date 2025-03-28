import { InputHTMLAttributes, ReactNode, Ref, RefObject } from 'react';

export const inputDefaultStyle =
	'block w-full rounded-lg border border-[#e5e7eb] bg-neutral-100 px-4 py-3 text-sm placeholder:text-neutral-500 focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900';

export const inputInvalidtStyle = '!border-red-500 focus:!border-red-500 dark:!border-red-500';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	className?: string;
	isInvalid?: boolean;
	rightIcon?: ReactNode;
}

export interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement | null>;
	isInvalid?: boolean;
	className?: string;
}

export interface IFileInput extends InputHTMLAttributes<HTMLInputElement> {
	ref?: RefObject<HTMLInputElement | null>;
	text?: string;
	children?: ReactNode;
	accept?: string;
}
