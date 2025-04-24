import { cn } from '../../utils';
import { Div } from '../div';
import { ICard } from './utils';

export const Card = ({ className, variant, children, ...props }: ICard) => (
	<Div className={cn('card', variant, className)} {...props}>
		{children}
	</Div>
);
