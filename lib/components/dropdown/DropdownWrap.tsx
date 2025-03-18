import { cn } from '../../utils';
import { Div, IDiv } from '../div';

const DropdownWrap = ({ className, children, ...props }: IDiv) => (
	<Div className={cn('relative inline-flex', className)} {...props}>
		{children}
	</Div>
);

export default DropdownWrap;
