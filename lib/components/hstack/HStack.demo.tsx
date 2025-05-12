/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Span } from '../span';
import { HStack } from './HStack';

const Demo = () => (
	<HStack className="min-h-8 w-full p-4 bg-primary-blue gap-x-3 bg-action-100">
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center bg-reaction-100">
			<Span text="Это Div" className="text-light" />
		</Div>
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center bg-reaction-100">
			<Span text="Это Div" className="text-light" />
		</Div>
	</HStack>
);

Demo.html = `const Demo = () => (
	<HStack className="min-h-8 w-full p-4 bg-primary-blue gap-x-3">
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
	</HStack>
);`;

export { Demo };
