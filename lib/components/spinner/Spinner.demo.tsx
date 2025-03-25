/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { HStack } from '../hstack';
import { Spinner } from './Spinner';

const Demo = () => (
	<HStack className="gap-x-3">
		<Spinner variant="muted" />
		<Spinner variant="primary" />
	</HStack>
);

Demo.html = `const Demo = () => (
	<HStack className="gap-x-3">
		<Spinner variant="muted" />
		<Spinner variant="primary" />
	</HStack>
);`;

export { Demo };
