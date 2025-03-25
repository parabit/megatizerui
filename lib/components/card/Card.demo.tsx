// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Button } from '../button';
import { Heading } from '../heading';
import { Span } from '../span';
import { Card } from './Card';

const Demo = () => (
	<Card className="p-4 gap-y-3 items-start">
		<Heading level="2">Заголовок</Heading>
		<Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
		<Button text="Кнопка" onClick={() => alert('click!')} />
	</Card>
);

Demo.html = `const Demo = () => (
	<Card className="p-4 gap-y-3 items-start">
		<Heading level="2">Заголовок</Heading>
		<Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
		<Button text="Кнопка" onClick={() => alert('click!')} />
	</Card>
);`;

export { Demo };
