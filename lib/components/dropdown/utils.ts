import { ReactNode, Ref } from 'react';

export type TypeDropdownOption = {
	value: string;
	onClose?: () => void;
	onClick?: () => void;
	divider?: boolean;
	icon?: ReactNode;
	active?: boolean;
	className?: string;
};

export type TypeDropdownOptions = Array<TypeDropdownOption>;

export interface IDropdown {
	ref?: Ref<HTMLDivElement | null>;
	isOpen: boolean;
	onClose: () => void;
	options?: TypeDropdownOptions;
	className?: string;
	placement?: 'bottom left' | 'bottom right';
	children?: ReactNode;
}

export const stylePlacement = {
	'bottom right': 'right-0',
	'bottom left': 'left-0',
};
