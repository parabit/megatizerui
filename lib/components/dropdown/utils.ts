import { ReactNode, Ref } from 'react';

import { inputVariant } from '../input';

export const dropdownVariant = inputVariant;

export type TypeDropdownOption = {
	value: string;
	active?: boolean;
	onClose?: () => void;
	onClick?: (value: string) => void;
	divider?: boolean;
	icon?: ReactNode;
	className?: string;
};

export type TypeDropdownOptions = Array<TypeDropdownOption>;

export const dropdownPlacement = {
	'bottom-right': 'bottom-right',
	'bottom-left': 'bottom-left',
} as const;

export interface IDropdown {
	ref?: Ref<HTMLDivElement | null>;
	isOpen: boolean;
	onClose: () => void;
	options?: TypeDropdownOptions;
	className?: string;
	placement?: keyof typeof dropdownPlacement;
	duration?: number;
	variant?: keyof typeof dropdownVariant;
	children?: ReactNode;
}
