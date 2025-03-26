import { cn } from '../../utils';
import { Div } from '../div';
import { Stack } from '../stack';
import { badgeVariants, IBadge } from './utils';

export const Badge = ({ variant, className, text, children, ...props }: IBadge) => (
	<Div className={cn(badgeVariants({ variant }), className)} {...props}>
		<Stack>{text || children}</Stack>
	</Div>
);
