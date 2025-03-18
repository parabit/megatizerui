import { useEffect } from 'react';

import { useDisclose } from '../../hooks';
import { cn } from '../../utils';
import { Card } from '../card';
import DropdownOption from './DropdownOption';
import DropdownWrap from './DropdownWrap';
import { IDropdown, stylePlacement } from './utils';

const DURATION = 100; // ms

export const Dropdown = (props: IDropdown) => {
	const { ref, isOpen, onClose, options, className, placement = 'bottom left', children } = props;

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
				isOpen ? 'flex' : 'hidden',
				'absolute z-100 flex-col space-y-0.5',
				`transition-all transition-discrete duration-${DURATION}`,
				'opacity-0 data-active:opacity-100',
				'top-full mt-2 min-h-10 overflow-hidden',
				'min-w-full rounded-xl shadow-xl dark:shadow-neutral-900',
				options ? '!p-1' : '!p-0',
				stylePlacement[placement],
				className,
			)}
		>
			{options
				? options.map((option, index) => (
						<DropdownOption key={index} {...option} onClose={handleClose} />
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
