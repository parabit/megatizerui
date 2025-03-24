import { FormEvent, ReactNode } from 'react';

import { cn } from '../../utils';

interface IForm {
	onSubmit?: () => void;
	className?: string;
	children: ReactNode;
}

export const Form = ({ className, children, onSubmit, ...props }: IForm) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (onSubmit) onSubmit();
	};

	return (
		<form onSubmit={handleSubmit} className={cn('flex flex-col', className)} {...props}>
			{children}
		</form>
	);
};
