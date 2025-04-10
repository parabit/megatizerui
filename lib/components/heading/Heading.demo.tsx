/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Stack } from '../stack';
import { Heading } from './Heading';
import { headingLevels } from './utils';

const Demo = () => (
	<Stack className="gap-y-1">
		{headingLevels.map((el, index) => (
			<Heading key={index} level={el as unknown as typeof headingLevels}>
				Это заголовок {el} уровня
			</Heading>
		))}
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-1">
		{headingLevels.map((el, index) => (
			<Heading key={index} level={el}>
				Это заголовок {el} уровня
			</Heading>
		))}
	</Stack>
);`;

export { Demo };
