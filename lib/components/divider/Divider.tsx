import { cn } from '../../utils';

export const Divider = ({ className }: { className?: string }) => (
	<hr className={cn('divider', className)} />
);
