import { cn } from '../../utils';
import { Spinner } from '../spinner';
import { buttonVariants, IButton } from './utils';

export const Button = (props: IButton) => {
	const { className, text, children, variant, color, size, iconLeft, loading, ...rest } = props;

	return (
		<button className={cn(buttonVariants({ variant, color, size }), className)} {...rest}>
			<>
			{iconLeft}
		</>
			{loading ? <Spinner size="sm" /> : null}
			<>
			{text || children}
		</>
		</button>
	);
};
