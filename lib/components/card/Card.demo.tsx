// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Button } from '../button';
import { Heading } from '../heading';
import { Span } from '../span';
import { Stack } from '../stack';
import { Card } from './Card';
import { cardVaraint } from './utils';

export const Demo = () => (
	<Stack className="gap-y-6">
		<Card className="p-4 gap-y-3 items-start">
			<Heading level="2">Заголовок</Heading>
			<Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
			<Button text="Кнопка" onClick={() => alert('click!')} />
		</Card>

		{Object.keys(cardVaraint).map((variant, index) => (
			<Card
				key={index}
				className="p-4 gap-y-3 items-start"
				variant={variant as keyof typeof cardVaraint}
			>
				<Heading level="2">Заголовок</Heading>
				<Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
				<Button text="Кнопка" onClick={() => alert('click!')} />
			</Card>
		))}
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-6">
		<Card className="p-4 gap-y-3 items-start">
			<Heading level="2">Заголовок</Heading>
			<Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
			<Button text="Кнопка" onClick={() => alert('click!')} />
		</Card>

		{Object.keys(cardVaraint).map((variant, index) => (
			<Card
				key={index}
				className="p-4 gap-y-3 items-start"
				variant={variant as keyof typeof cardVaraint}
			>
				<Heading level="2">Заголовок</Heading>
				<Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
				<Button text="Кнопка" onClick={() => alert('click!')} />
			</Card>
		))}
	</Stack>
);
`;
