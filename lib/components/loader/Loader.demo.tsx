/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { useDisclose } from '../../hooks';
import { Button } from '../button';
import { Card } from '../card';
import { Divider } from '../divider';
import { Heading } from '../heading';
import { Span } from '../span';
import { Stack } from '../stack';
import { Loader } from './Loader';

const Demo = () => {
	const { isOpen, onToggle } = useDisclose();

	return (
		<Stack className="gap-y-6">
			<Button onClick={onToggle} text="Переключить Loader" />

			<Stack className="relative rounded-xl overflow-hidden">
				<Card className="gap-y-3">
					<Heading level="2" text="Заголовок" />
					<Span text="Пример текста" className="text-muted" />
					<Divider />
					<Button text="Кнопка" />
				</Card>

				{isOpen ? <Loader className="backdrop-blur-[3px]" /> : null}
			</Stack>
		</Stack>
	);
};

Demo.html = `const Demo = () => {
	const { isOpen, onToggle } = useDisclose();

	return (
		<Stack className="gap-y-6">
			<Button onClick={onToggle} text="Переключить Loader" />

			<Stack className="relative rounded-xl overflow-hidden">
				<Card className="gap-y-3">
					<Heading level="2" text="Заголовок" />
					<Span text="Пример текста" className="text-muted" />
					<Divider />
					<Button text="Кнопка" />
				</Card>

				{isOpen ? <Loader /> : null}
			</Stack>
		</Stack>
	);
};`;

export { Demo };
