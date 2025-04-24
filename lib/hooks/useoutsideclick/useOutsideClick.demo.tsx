/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Badge } from '../../components/badge';
import { Card } from '../../components/card';
import { HStack } from '../../components/hstack';
import { Pressable } from '../../components/pressable';
import { Span } from '../../components/span';
import { Stack } from '../../components/stack/Stack';
import { useOutsideClick } from './useOutsideClick';

export const Demo = () => {
	const { ref, isOpen, onOpen } = useOutsideClick();

	return (
		<Stack className="gap-y-6">
			<HStack className="gap-x-3 items-center">
				<Span>Click inside:</Span>
				{isOpen ? <Badge text="true" color="success" /> : <Badge text="false" color="error" />}
			</HStack>

			<Pressable onClick={onOpen}>
				<Card ref={ref} className="min-32 !min-w-xs w-full border">
					<Span>Target click area</Span>
				</Card>
			</Pressable>
		</Stack>
	);
};

Demo.html = `const Demo = () => {
	const { ref, isOpen, onOpen } = useOutsideClick();

	return (
		<Stack className="gap-y-6">
			<HStack className="gap-x-3 items-center">
				<Span>Click inside:</Span>
				{isOpen ? <Badge text="true" color="success" /> : <Badge text="false" color="error" />}
			</HStack>

			<Pressable onClick={onOpen}>
				<Card ref={ref} className="min-32 !min-w-xs w-full border">
					<Span>Target click area</Span>
				</Card>
			</Pressable>
		</Stack>
	);
};`;
