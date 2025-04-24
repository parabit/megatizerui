import { cn } from '../../utils';
import { Div, IDiv } from '../div';

const DropdownWrap = ({ className, children, ...props }: IDiv) => (
	<Div className={cn('dropdown-wrap', className)} {...props}>
		{children}
	</Div>
);

export default DropdownWrap;
