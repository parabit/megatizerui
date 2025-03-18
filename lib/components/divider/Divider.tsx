import { cn } from '../../utils';

export const Divider = ({ className }: { className?: string }) => (
	<hr className={cn('!text-border-light dark:!text-border-dark !min-h-[1px] w-full', className)} />
);
