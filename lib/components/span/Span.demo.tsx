/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Stack } from '../stack';
import { Span } from './Span';
import { EnumSpanVariants, ISpan } from './utils';

const Demo = () => (
	<Stack className="gap-y-3">
		{Object.keys(EnumSpanVariants).map((el, index) => (
			<Span key={index} variant={el as ISpan['variant']}>
				Это вариант текста: {el}
			</Span>
		))}
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-3">
		{Object.keys(EnumSpanVariants).map((el, index) => (
			<Span key={index} variant={el as ISpan['variant']}>
				Это вариант текста: {el}
			</Span>
		))}
	</Stack>
);`;

export { Demo };
