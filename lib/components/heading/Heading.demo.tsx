/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Stack } from '../stack';
import { Heading } from './Heading';
import { headingLevels, IHeading } from './utils';

const Demo = () => (
	<Stack className="gap-y-1">
		{headingLevels.map((el, index) => (
			<Heading key={index} level={el as IHeading['level']}>
				Это заголовок {el} уровня
			</Heading>
		))}
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-1">
		{headingLevels.map((el, index) => (
			<Heading key={index} level={el as IHeading['level']}>
				Это заголовок {el} уровня
			</Heading>
		))}
	</Stack>
);`;

export { Demo };
