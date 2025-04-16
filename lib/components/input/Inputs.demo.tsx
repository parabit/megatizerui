/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { HStack } from '../hstack';
import { Span } from '../span';
import { FIleInput } from './FIleInput';
import { Input } from './Input';
import { InputPassword } from './InputPassword';

const DemoInput = () => (
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		<Div className="grid grid-cols-[30%_auto] md:grid-cols-[20%_auto] gap-3 items-center w-full">
			{/* default */}
			<Span text="default" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
				/>
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					onChange={() => {}}
				/>
			</HStack>

			{/* primary */}
			<Span text="primary" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					variant="primary"
				/>
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					variant="primary"
					onChange={() => {}}
				/>
			</HStack>

			{/* secondary */}
			<Span text="secondary" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					variant="secondary"
				/>
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					variant="secondary"
					onChange={() => {}}
				/>
			</HStack>

			{/* invalid */}
			<Span text="invalid" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					isInvalid={true}
				/>
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					isInvalid={true}
					onChange={() => {}}
				/>
			</HStack>

			{/* disabled */}
			<Span text="disabled" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					disabled
				/>
				<Input
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					disabled
					onChange={() => {}}
				/>
			</HStack>
		</Div>
	</Div>
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
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		<Div className="grid grid-cols-[30%_auto] md:grid-cols-[20%_auto] gap-3 items-center w-full">
			{/* default */}
			<Span text="default" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
				/>
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					onChange={() => {}}
				/>
			</HStack>

			{/* primary */}
			<Span text="primary" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					variant="primary"
				/>
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					variant="primary"
					onChange={() => {}}
				/>
			</HStack>

			{/* secondary */}
			<Span text="secondary" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					variant="secondary"
				/>
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					variant="secondary"
					onChange={() => {}}
				/>
			</HStack>

			{/* invalid */}
			<Span text="invalid" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					isInvalid={true}
				/>
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					isInvalid={true}
					onChange={() => {}}
				/>
			</HStack>

			{/* disabled */}
			<Span text="disabled" className="mr-6 text-right" />
			<HStack className="gap-3 flex-wrap md:flex-nowrap">
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					disabled
				/>
				<InputPassword
					placeholder="Введите текст..."
					autoComplete="new-password"
					className="max-w-xs"
					value="Пример текста"
					disabled
					onChange={() => {}}
				/>
			</HStack>
		</Div>
	</Div>
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
