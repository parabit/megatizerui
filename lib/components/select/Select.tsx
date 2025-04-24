import { useEffect } from 'react';

import { useOutsideClick, useWindowDimensions } from '../../hooks';
import { cn } from '../../utils';
import { Card } from '../card';
import { Dropdown } from '../dropdown';
import { Input } from '../input';
import { Pressable } from '../pressable';
import { Span } from '../span';
import { ISelect } from './utils';

export const Select = (props: ISelect) => {
	const { ref, isOpen, onOpen, onClose, value, options, variant, onChange, children } = props;

	const {
		ref: innerRef,
		isOpen: innerIsOpen,
		onClose: innerOnClose,
		onOpen: innerOnOpen,
	} = useOutsideClick();
	const { isMobile } = useWindowDimensions();

	useEffect(() => {
		if (isMobile) {
			if (isOpen || innerIsOpen) {
				document.body.classList.add('dialog-open');
			} else {
				document.body.classList.remove('dialog-open');
			}
		}
	}, [isOpen, innerIsOpen, isMobile]);

	const handleOpen = () => {
		if (onOpen) return onOpen();
		innerOnOpen();
	};

	const handleClose = () => {
		if (onClose) return onClose();
		innerOnClose();
	};

	return (
		<Dropdown.Wrap ref={ref || innerRef}>
			<Pressable className={cn('select-input', isOpen ? 'open' : '')} onClick={handleOpen}>
				<Input
					readOnly
					value={value}
					variant={variant}
					className="flex flex-row items-center"
					rightIcon={<Span text="▼" variant={variant} />}
				/>
			</Pressable>

			{isMobile ? (
				<dialog onClick={handleClose} className={cn('select-dialog', isOpen ? 'open' : '')}>
					<Card variant={variant}>
						{options
							? options.map((option, index) => (
									<Dropdown.Option
										key={index}
										{...option}
										onClick={onChange}
										className={variant}
										onClose={handleClose}
									/>
								))
							: children
								? children
								: null}
					</Card>
				</dialog>
			) : (
				<Dropdown
					onClose={handleClose}
					className="!mt-[-1px]"
					isOpen={isOpen || innerIsOpen}
					{...{ options, onChange, variant, children }}
				/>
			)}
		</Dropdown.Wrap>
	);
};
