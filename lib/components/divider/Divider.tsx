import { cn } from '../../utils';

export const Divider = ({ className }: { className?: string }) => (
	<hr
		className={cn('border-t border-card-border-light dark:border-card-border-dark', className)}
	/>
);
