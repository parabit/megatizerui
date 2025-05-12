/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { useState } from 'react';

import { useOutsideClick } from '../../hooks';
import { Button } from '../button';
import { Span } from '../span';
import { Stack } from '../stack';
import { Dropdown } from './Dropdown';

const DemoFirst = () => {
	const [value, setValue] = useState('Первый пункт');
	const { ref, isOpen, onClose, onToggle } = useOutsideClick();

	const options = [
		{
			value: 'Первый пункт',
			onClick: () => setValue('Первый пункт'),
		},
		{
			value: 'Второй пункт',
			onClick: () => setValue('Второй пункт'),
		},
		{
			value: 'Третий пункт',
			onClick: () => setValue('Третий пункт'),
		},
	];

	return (
		<Stack className="gap-y-3">
			<Span text={`Значение: ${value}`} />
			<Dropdown.Wrap ref={ref}>
				<Button onClick={onToggle} text="Открыть Dropdown #1" />
				<Dropdown {...{ isOpen, onClose, options }} />
			</Dropdown.Wrap>
		</Stack>
	);
};

DemoFirst.html = `const DemoFirst = () => {
	const options = [
		{
			value: 'Первый пункт',
			onClick: () => setValue('Первый пункт'),
		},
		{
			value: 'Второй пункт',
			onClick: () => setValue('Второй пункт'),
		},
		{
			value: 'Третий пункт',
			onClick: () => setValue('Третий пункт'),
		},
	];

	const [value, setValue] = useState(options[0].value);
	const { ref, isOpen, onClose, onToggle } = useOutsideClick();

	return (
		<Stack className="gap-y-3">
			<Span text={Значение: {value}} />
			<Dropdown.Wrap ref={ref}>
				<Button onClick={onToggle} text="Открыть Dropdown #1" />
				<Dropdown {...{ isOpen, onClose, options }} />
			</Dropdown.Wrap>
		</Stack>
	);
};`;

const DemoSecond = () => {
	const [value, setValue] = useState('Первый пункт');
	const { ref, isOpen, onClose, onToggle } = useOutsideClick();

	const options = [
		{
			value: 'Первый пункт',
			onClick: () => setValue('Первый пункт'),
		},
		{
			value: 'Второй пункт',
			onClick: () => setValue('Второй пункт'),
		},
		{
			value: 'Третий пункт',
			onClick: () => setValue('Третий пункт'),
		},
	];

	return (
		<Stack className="gap-y-3">
			<Span text={`Значение: ${value}`} />
			<Dropdown.Wrap ref={ref}>
				<Button onClick={onToggle} text="Открыть Dropdown #2" />
				<Dropdown {...{ isOpen, onClose }}>
					{options.map((option, index) => (
						<Dropdown.Option key={index} onClose={onClose} {...option} />
					))}
				</Dropdown>
			</Dropdown.Wrap>
		</Stack>
	);
};

DemoSecond.html = `const DemoSecond = () => {
	const options = [
		{
			value: 'Первый пункт',
			onClick: () => setValue('Первый пункт'),
		},
		{
			value: 'Второй пункт',
			onClick: () => setValue('Второй пункт'),
		},
		{
			value: 'Третий пункт',
			onClick: () => setValue('Третий пункт'),
		},
	];

	const [value, setValue] = useState(options[0].value);
	const { ref, isOpen, onClose, onToggle } = useOutsideClick();

	return (
		<Stack className="gap-y-3">
			<Span text={Значение: {value}} />
			<Dropdown.Wrap ref={ref}>
				<Button onClick={onToggle} text="Открыть Dropdown #2" />
				<Dropdown {...{ isOpen, onClose }}>
					{options.map((option, index) => (
						<Dropdown.Option key={index} {...option} />
					))}
				</Dropdown>
			</Dropdown.Wrap>
		</Stack>
	);
};`;

export { DemoFirst, DemoSecond };
