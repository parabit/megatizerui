import { cn } from '../../utils';
import { Div } from '../div';
import { Spinner } from '../spinner';

export const Loader = ({ className }: { className?: string }) => (
	<Div
		className={cn(
			'absolute flex h-full min-w-full items-center justify-center bg-neutral-200/50 dark:bg-neutral-500/50',
			className,
		)}
	>
		<Spinner />
	</Div>
);
