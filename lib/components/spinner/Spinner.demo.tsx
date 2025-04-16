/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { HStack } from '../hstack';
import { Stack } from '../stack';
import { Spinner } from './Spinner';
import { EnumSpinnerVariants, ISpinner } from './utils';

const Demo = () => (
	<Stack className="gap-y-3">
		<HStack className="items-center gap-x-3">
			{Object.keys(EnumSpinnerVariants).map((el, index) => (
				<Spinner key={index} variant={el as ISpinner['variant']} size="md" />
			))}
		</HStack>
		<HStack className="items-center gap-x-3">
			{Object.keys(EnumSpinnerVariants).map((el, index) => (
				<Spinner key={index} variant={el as ISpinner['variant']} size="sm" />
			))}
		</HStack>
	</Stack>
);

Demo.html = `const Demo = () => (
	<Stack className="gap-y-3">
		<HStack className="items-center gap-x-3">
			{Object.keys(EnumSpinnerVariants).map((el, index) => (
				<Spinner key={index} variant={el as ISpinner['variant']} size="md" />
			))}
		</HStack>
		<HStack className="items-center gap-x-3">
			{Object.keys(EnumSpinnerVariants).map((el, index) => (
				<Spinner key={index} variant={el as ISpinner['variant']} size="sm" />
			))}
		</HStack>
	</Stack>
);`;

export { Demo };
