import { cn } from '../../utils';
import { Div } from '../div';
import { IInput, inputDefaultStyle, inputInvalidtStyle } from './utils';

export const Input = ({ className, isInvalid, rightIcon, ...props }: IInput) => (
	<Div className={cn('relative w-full', className)}>
		<input
			className={cn(inputDefaultStyle, isInvalid && inputInvalidtStyle, className)}
			{...props}
		/>
		{rightIcon}
	</Div>
);
