import { createElement } from 'react';

import { cn } from '../../utils';
import { headingVariants, IHeading } from './utils';

export const Heading = ({ level, className, text, children, ...props }: IHeading) => {
	return createElement(
		`h${level}`,
		{ className: cn(headingVariants({ level }), className), ...props },
		text || children,
	);
};
