import { cn } from '../../utils';
import { Div } from '../div';
import { IInput } from './utils';

export const Input = (props: IInput) => {
	const { className, variant, isInvalid, rightIcon, ...rest } = props;
	return (
		<Div className={cn('relative w-full', className)}>
			<input className={cn('input', isInvalid ? 'error' : variant, className)} {...rest} />
			{rightIcon}
		</Div>
	);
};
