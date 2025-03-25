/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Stack } from '../stack';
import { Span } from './Span';
import { spanVariantsDictionary } from './utils';

const Demo = () => (
	<Stack className="gap-y-3">
		<Span text="Это вариант текста по-умолчанию" />

		{Object.keys(spanVariantsDictionary).map((el, index) => (
			<Span key={index} variant={el as keyof typeof spanVariantsDictionary}>
				Это вариант текста: {el}
			</Span>
		))}
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-3">
		<Span text="Это вариант текста по-умолчанию" />

		{variants.map((variant, index) => (
			<Span key={index} variant={variant}>
				Это текст варианта: {variant}
			</Span>
		))}
	</Stack>
);`;

export { Demo };
