import { ReactNode } from 'react';

import { cn } from '../../utils';

interface IForm {
	onSubmit?: () => void;
	className?: string;
	children: ReactNode;
}

export const Form = ({ className, children, ...props }: IForm) => (
	<form className={cn('flex flex-col', className)} {...props}>
		{children}
	</form>
);
