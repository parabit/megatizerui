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
	const {
		ref,
		isOpen,
		onOpen,
		onClose,
		value,
		options,
		variant,
		onChange,
		className,
		children,
		...rest
	} = props;

	const {
		ref: innerRef,
		isOpen: innerIsOpen,
		onClose: innerOnClose,
		onOpen: innerOnOpen,
	} = useOutsideClick();
	const { isMobile } = useWindowDimensions();

	const refValue = ref || innerRef;
	const isOpenValue = isOpen || innerIsOpen;

	useEffect(() => {
		if (isMobile) {
			if (isOpenValue) {
				document.body.classList.add('dialog-open');
			} else {
				document.body.classList.remove('dialog-open');
			}
		}
	}, [isMobile, isOpenValue]);

	const handleOpen = () => {
		if (onOpen) return onOpen();
		innerOnOpen();
	};

	const handleClose = () => {
		if (onClose) return onClose();
		innerOnClose();
	};

	return (
		<Dropdown.Wrap ref={refValue} className={className}>
			<Pressable
				onClick={handleOpen}
				className={cn('select-input', isOpenValue ? 'open' : '', className)}
			>
				<Input
					readOnly
					value={value}
					variant={variant}
					className="flex flex-row items-center"
					rightIcon={<Span text="▼" variant={variant} />}
					{...rest}
				/>
			</Pressable>

			{isMobile ? (
				<dialog
					onClick={handleClose}
					className={cn('select-dialog', isOpenValue ? 'open' : '')}
				>
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
					isOpen={isOpenValue}
					onClose={handleClose}
					{...{ options, onChange, variant, children }}
				/>
			)}
		</Dropdown.Wrap>
	);
};
