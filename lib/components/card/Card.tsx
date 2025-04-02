import { cn } from '../../utils';
import { Div, IDiv } from '../div';

export const Card = ({ className, children, ...props }: IDiv) => (
	<Div className={cn('card', className)} {...props}>
		{children}
	</Div>
);
