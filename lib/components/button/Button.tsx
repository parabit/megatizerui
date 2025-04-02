import { cn } from '../../utils';
import { buttonVariants, IButton } from './utils';

export const Button = (props: IButton) => {
	const { className, text, children, variant, color, iconLeft, ...rest } = props;

	return (
		<button className={cn(buttonVariants({ variant, color }), className)} {...rest}>
			{iconLeft}
			{text || children}
		</button>
	);
};
