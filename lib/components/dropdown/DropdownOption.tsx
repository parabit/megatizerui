import { MouseEvent } from 'react';

import { cn } from '../../utils';
import { Span } from '../span';
import { TypeDropdownOption } from './utils';

const DropdownOption = (props: TypeDropdownOption) => {
	const { value, onClick = () => {}, onClose = () => {}, icon, active, className } = props;

	const handleClick = () => {
		onClick();
		onClose();
	};

	return (
		<a
			onClick={handleClick}
			className={cn(
				'flex cursor-pointer items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm',
				'hover:bg-gray-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-300',
				'focus:bg-gray-100 focus:outline-none dark:focus:bg-neutral-700',
				active
					? 'text-primary-light dark:text-primary-dark'
					: 'text-gray-800 dark:text-neutral-400',
				className,
			)}
			onMouseDown={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
		>
			{icon ? icon : null}
			<Span text={value} className="truncate text-nowrap" />
		</a>
	);
};

export default DropdownOption;
