/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Stack } from './Stack';

const Demo = () => (
	<Stack className="min-h-8 w-full p-4 bg-primary-blue gap-y-3">
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="min-h-8 w-full p-4 bg-primary-blue gap-y-3">
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
	</Stack>
);`;

export { Demo };
