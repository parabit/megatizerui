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
			name="tax_0"
			value={value}
			options={options}
			onChange={setValue}
			className="w-full max-w-[400px]"
			variant={value === 'default' ? undefined : (value as keyof typeof selectVariant)}
		/>
	);
};

DemoFirst.html = `const DemoFirst = () => {};`;

export const DemoSecond = () => {
	const { ref, isOpen, onOpen, onClose } = useOutsideClick(undefined);

	const [value, setValue] = useState('default');

	const handleSelect = (variant: string) => {
		setValue(variant);
		onClose();
	};

	return (
		<Select
			value={value}
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

DemoSecond.html = `const DemoSecond = () => {};`;
