import { cn } from '../../utils';
import { Div } from '../div';
import { badgeVariants, IBadge } from './utils';

export const Badge = ({ variant, color, className, text, children, ...props }: IBadge) => (
	<Div className={cn(badgeVariants({ variant, color }), className)} {...props}>
		{text || children}
	</Div>
);
