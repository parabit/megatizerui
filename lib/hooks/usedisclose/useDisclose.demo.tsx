/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Badge } from '../../components/badge';
import { Button } from '../../components/button';
import { HStack } from '../../components/hstack';
import { Span } from '../../components/span';
import { Stack } from '../../components/stack/Stack';
import { useDisclose } from './useDisclose';

export const Demo = () => {
	const { isOpen, onClose, onOpen, onToggle } = useDisclose();

	return (
		<Stack className="gap-y-6">
			<HStack className="gap-x-3 items-center">
				<Span>Status:</Span>
				{isOpen ? <Badge text="true" color="success" /> : <Badge text="false" color="error" />}
			</HStack>

			<HStack className="gap-x-3 gap-y-6 flex-wrap">
				<Button text="Open" onClick={onOpen} />
				<Button text="Close" onClick={onClose} />
				<Button text="Toggle" onClick={onToggle} />
			</HStack>
		</Stack>
	);
};

Demo.html = `const Demo = () => {
	const { isOpen, onClose, onOpen, onToggle } = useDisclose();

	return (
		<Stack className="gap-y-6">
			<HStack className="gap-x-3 items-center">
				<Span>Status:</Span>
				{isOpen ? <Badge text="true" color="success" /> : <Badge text="false" color="error" />}
			</HStack>

			<HStack className="gap-x-3 gap-y-6 flex-wrap">
				<Button text="Open" onClick={onOpen} />
				<Button text="Close" onClick={onClose} />
				<Button text="Toggle" onClick={onToggle} />
			</HStack>
		</Stack>
	);
};`;
