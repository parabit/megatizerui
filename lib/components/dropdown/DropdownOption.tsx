import { MouseEvent } from 'react';

import { cn } from '../../utils';
import { Span } from '../span';
import { TypeDropdownOption } from './utils';

const DropdownOption = (props: TypeDropdownOption) => {
	const { value, active, onClick = () => {}, onClose = () => {}, icon, className } = props;

	const handleClick = () => {
		if (onClick) onClick(value);
		if (onClose) onClose();
	};

	return (
		<a
			onClick={handleClick}
			className={cn('dropdown-option', className)}
			onMouseDown={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
		>
			{icon ? icon : null}
			<Span
				text={value}
				className={cn('dropdown-option-text', className, active ? 'active' : '')}
			/>
		</a>
	);
};

export default DropdownOption;
