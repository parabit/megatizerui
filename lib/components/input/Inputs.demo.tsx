/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Stack } from '../stack';
import { FIleInput } from './FIleInput';
import { Input } from './Input';
import { InputPassword } from './InputPassword';

const DemoInput = () => (
	<Stack className="gap-y-3">
		<Input placeholder="Введите текст..." autoComplete="new-password" className="max-w-xs" />
		<Input
			placeholder="Введите текст..."
			autoComplete="new-password"
			className="max-w-xs"
			isInvalid={true}
		/>
	</Stack>
);

DemoInput.html = `const DemoInput = () => (
	<Stack className="gap-y-3">
		<Input placeholder="Введите текст..." autoComplete="new-password" className="max-w-xs" />
		<Input
			placeholder="Введите текст..."
			autoComplete="new-password"
			className="max-w-xs"
			isInvalid={true}
		/>
	</Stack>
);`;

const DemoFIleInput = () => <FIleInput />;

DemoFIleInput.html = `const DemoFIleInput = () => <FIleInput />;`;

const DemoInputPassword = () => (
	<Stack className="gap-y-3">
		<InputPassword
			placeholder="Введите текст..."
			autoComplete="new-password"
			className="max-w-xs"
		/>
		<InputPassword
			placeholder="Введите текст..."
			autoComplete="new-password"
			className="max-w-xs"
			isInvalid={true}
		/>
	</Stack>
);

DemoInputPassword.html = `const DemoInputPassword = () => (
	<Stack className="gap-y-3">
		<InputPassword
			placeholder="Введите текст..."
			autoComplete="new-password"
			className="max-w-xs"
		/>
		<InputPassword
			placeholder="Введите текст..."
			autoComplete="new-password"
			className="max-w-xs"
			isInvalid={true}
		/>
	</Stack>
);`;

export { DemoInput, DemoFIleInput, DemoInputPassword };
