// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';

import { useOutsideClick } from '../../hooks';
import { Button } from '../button';
import { buttonColor } from '../button/utils';
import { Span } from '../span';
import { Stack } from '../stack';
import { Select } from './Select';
import { selectVariant, TypeSelectOptions } from './utils';

const options: TypeSelectOptions = [
	{
		value: 'default',
	},
	{
		value: 'primary',
	},
	{
		value: 'secondary',
	},
];

export const DemoFirst = () => {
	const [value, setValue] = useState('default');

	return (
		<Select
			value={value}
			options={options}
			onChange={setValue}
			variant={value === 'default' ? undefined : (value as keyof typeof selectVariant)}
		/>
	);
};

DemoFirst.html = `const DemoFirst = () => {
	const [value, setValue] = useState('default');

	return (
		<Select
			value={value}
			options={options}
			onChange={setValue}
			variant={value === 'default' ? undefined : (value as keyof typeof selectVariant)}
		/>
	);
};`;

export const DemoSecond = () => {
	const { ref, isOpen, onOpen, onClose } = useOutsideClick(undefined);

	const [value, setValue] = useState('default');

	const handleSelect = (variant: string) => {
		console.log(isOpen, 'handleSelect', variant);
		setValue(variant);
		onClose();
	};

	return (
		<Select
			value={value}
			onChange={setValue}
			{...{ ref, isOpen, onOpen, onClose }}
			variant={value === 'default' ? undefined : (value as keyof typeof selectVariant)}
		>
			<Stack className="gap-y-3">
				<Stack className="gap-y-1">
					<Span text="default" />
					<Button text="default" color="muted" onClick={() => handleSelect('default')} />
				</Stack>
				{Object.keys(selectVariant).map((variant, index) => (
					<Stack key={index} className="gap-y-1">
						<Span text={variant} />
						<Button
							text={variant}
							onClick={() => handleSelect(variant)}
							color={variant as keyof typeof buttonColor}
						/>
					</Stack>
				))}
			</Stack>
		</Select>
	);
};

DemoSecond.html = `const DemoSecond = () => {
	const { ref, isOpen, onOpen, onClose } = useOutsideClick(undefined);

	const [value, setValue] = useState('default');

	const handleSelect = (variant: string) => {
		console.log(isOpen, 'handleSelect', variant);
		setValue(variant);
		onClose();
	};

	return (
		<Select
			value={value}
			onChange={setValue}
			{...{ ref, isOpen, onOpen, onClose }}
			variant={value === 'default' ? undefined : (value as keyof typeof selectVariant)}
		>
			<Stack className="gap-y-3">
				<Stack className="gap-y-1">
					<Span text="default" />
					<Button text="default" color="muted" onClick={() => handleSelect('default')} />
				</Stack>
				{Object.keys(selectVariant).map((variant, index) => (
					<Stack key={index} className="gap-y-1">
						<Span text={variant} />
						<Button
							text={variant}
							onClick={() => handleSelect(variant)}
							color={variant as keyof typeof buttonColor}
						/>
					</Stack>
				))}
			</Stack>
		</Select>
	);
};`;
