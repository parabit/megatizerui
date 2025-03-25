/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Span } from '../span';
import { Stack } from '../stack';
import { Divider } from './Divider';

const Demo = () => (
	<Stack className="gap-y-3">
		<Span>Это текст над раздилителем</Span>
		<Divider />
		<Divider className="border-2" />
		<Divider className="border-4" />
		<Divider className="border-8" />
		<Span>Это текст под раздилителем</Span>
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-3">
		<Span>Это текст над раздилителем</Span>
		<Divider />
		<Divider className="border-2" />
		<Divider className="border-4" />
		<Divider className="border-8" />
		<Span>Это текст под раздилителем</Span>
	</Stack>
);`;

export { Demo };
