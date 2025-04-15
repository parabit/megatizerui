import { cn } from '../../utils';
import { Div } from '../div';
import { IInput } from './utils';

export const Input = ({ className, isInvalid, rightIcon, ...props }: IInput) => (
	<Div className={cn('relative w-full', className)}>
		<input className={cn('input', isInvalid && 'invalid', className)} {...props} />
		{rightIcon}
	</Div>
);
