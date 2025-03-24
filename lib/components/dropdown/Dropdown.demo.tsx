/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { useOutsideClick } from '../../hooks';
import { Button } from '../button';
import { Dropdown } from './Dropdown';

export const DemoFirst = () => {
	const { ref, isOpen, onClose, onToggle } = useOutsideClick();

	const options = [
		{
			value: 'Первый пункт',
			active: true,
		},
		{
			value: 'Второй пункт',
		},
		{
			value: 'Третий пункт',
		},
	];

	return (
		<Dropdown.Wrap ref={ref}>
			<Button onClick={onToggle} text="Открыть Dropdown #1" />

			<Dropdown {...{ isOpen, onClose, options }} />
		</Dropdown.Wrap>
	);
};

export const DemoSecond = () => {
	const { ref, isOpen, onClose, onToggle } = useOutsideClick();

	const options = [
		{
			value: 'Первый пункт',
			active: true,
		},
		{
			value: 'Второй пункт',
		},
		{
			value: 'Третий пункт',
		},
	];

	return (
		<Dropdown.Wrap ref={ref}>
			<Button onClick={onToggle} text="Открыть Dropdown #2" />

			<Dropdown {...{ isOpen, onClose }}>
				{options.map((option, index) => (
					<Dropdown.Option key={index} {...option} />
				))}
			</Dropdown>
		</Dropdown.Wrap>
	);
};
