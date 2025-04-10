import { createElement } from 'react';

import { IHeading } from './utils';

export const Heading = ({ level, text, children, ...props }: IHeading) => {
	return createElement(`h${level}`, props, text || children);
};
