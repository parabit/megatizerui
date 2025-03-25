/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Span } from '../span';
import { Stack } from '../stack';
import { Pressable } from './Pressable';

const Demo = () => (
	<Stack className="gap-y-6">
		<Span text="Это просто текст" />

		<Pressable onClick={() => alert('click!')}>
			<Span text="Это кликабельный текст" />
		</Pressable>
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-6">
		<Span text="Это просто текст" />

		<Pressable onClick={() => alert('click!')}>
			<Span text="Это кликабельный текст" />
		</Pressable>
	</Stack>
);`;

export { Demo };
