import { useEffect } from 'react';

import { useDisclose } from '../../hooks';
import { cn } from '../../utils';
import { Card } from '../card';
import DropdownOption from './DropdownOption';
import DropdownWrap from './DropdownWrap';
import { dropdownPlacement, IDropdown } from './utils';

export const Dropdown = (props: IDropdown) => {
	const {
		ref,
		isOpen,
		onClose,
		options,
		className,
		placement = 'bottom-left',
		variant,
		children,
	} = props;

	const DURATION = props.duration || 100; // ms

	const {
		isOpen: isOpenComponent,
		onOpen: onOpenComponent,
		onClose: onCloseComponent,
	} = useDisclose();

	const handleClose = () => {
		onCloseComponent();
		setTimeout(() => onClose(), DURATION);
	};

	useEffect(() => {
		if (isOpen) {
			onOpenComponent();
		} else if (isOpenComponent) {
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, isOpenComponent]);

	return (
		<Card
			ref={ref}
			{...(isOpenComponent ? { 'data-active': true } : null)}
			className={cn(
				'dropdown',
				isOpen ? 'open' : '',
				`duration-${DURATION}`,
				dropdownPlacement[placement],
				variant,
				className,
			)}
		>
			{options
				? options.map((option, index) => (
						<DropdownOption key={index} {...option} className={variant} onClose={onClose} />
					))
				: children
					? children
					: null}
		</Card>
	);
};

Dropdown.Wrap = DropdownWrap;
Dropdown.Item = DropdownOption;
Dropdown.Option = DropdownOption;
