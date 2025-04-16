import { cn } from '../../utils';
import { Spinner } from '../spinner';
import { buttonVariants, IButton } from './utils';

export const Button = (props: IButton) => {
	const { className, text, children, variant, color, size, iconLeft, loading, ...rest } = props;

	const child = loading ? (
		<Spinner size="sm" />
	) : (
		<>
			{iconLeft}
			{text || children}
		</>
	);

	return (
		<button className={cn(buttonVariants({ variant, color, size }), className)} {...rest}>
			{child}
		</button>
	);
};
