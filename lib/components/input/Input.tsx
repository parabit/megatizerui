import { cloneElement, ReactElement } from 'react';

import { cn } from '../../utils';
import { Div } from '../div';
import { IInput } from './utils';

export const Input = (props: IInput) => {
	const { className, variant, isInvalid, rightIcon, rightElement, ...rest } = props;

	const iconProps = {
		className: 'input-icon-right',
	};

	const icon = rightIcon ? cloneElement(rightIcon as ReactElement, iconProps) : undefined;

	return (
		<Div className={cn('input-wrap', className)}>
			<input className={cn('input', isInvalid ? 'error' : variant, className)} {...rest} />
			{icon}
			{rightElement}
		</Div>
	);
};
