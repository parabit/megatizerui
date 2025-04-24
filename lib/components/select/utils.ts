import { ReactNode, Ref } from 'react';

import { TypeDropdownOption } from '../dropdown';
import { inputVariant } from '../input';

export type TypeSelectOption = TypeDropdownOption;

export type TypeSelectOptions = TypeSelectOption[];

export const selectVariant = inputVariant;

export interface ISelect {
	ref?: Ref<HTMLDivElement | null>;
	isOpen?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	value?: string;
	options?: TypeSelectOptions;
	onChange?: (value: string) => void;
	variant?: keyof typeof selectVariant;
	children?: ReactNode;
}
