/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { useState } from 'react';

import { Button } from '../button';
import { Input } from '../input';
import { Form } from './Form';

const Demo = () => {
	const [value, setValue] = useState('');

	const handleSubmit = () => alert('submit value: ' + (value.length ? value : '<пусто>'));

	return (
		<Form className="gap-y-3" onSubmit={handleSubmit}>
			<Input
				value={value}
				placeholder="Введите текст..."
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button text="Сохранить" type="submit" />
		</Form>
	);
};

Demo.html = `const Demo = () => {
	const [value, setValue] = useState('');

	const handleSubmit = () => alert('submit value: ' + (value.length ? value : '<пусто>'));

	return (
		<Form className="gap-y-3" onSubmit={handleSubmit}>
			<Input
				value={value}
				placeholder="Введите текст..."
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button text="Сохранить" type="submit" />
		</Form>
	);
};`;

export { Demo };
