import { MouseEvent } from 'react';

import { cn } from '../../utils';
import { Span } from '../span';
import { TypeDropdownOption } from './utils';

const DropdownOption = (props: TypeDropdownOption) => {
	const { value, valueSelected, onClick = () => {}, onClose = () => {}, icon, className } = props;

	const active = valueSelected ? valueSelected === value : false;

	const handleClick = () => {
		console.log('handleClick');
		if (onClick) onClick(value);
		if (onClose) onClose();
	};

	return (
		<a
			onClick={handleClick}
			className={cn(active ? 'dropdown-option active' : 'dropdown-option', className)}
			onMouseDown={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
		>
			{icon ? icon : null}
			<Span text={value} className="truncate text-nowrap" />
		</a>
	);
};

export default DropdownOption;
