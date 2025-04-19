/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Heading } from '../heading';
import { HStack } from '../hstack';
import { Stack } from '../stack';
import { Badge } from './Badge';
import { badgeColor, badgeVariant } from './utils';

export const Demo = () => (
	<Div className="flex flex-col w-full gap-12 justify-between flex-wrap">
		{Object.keys(badgeVariant).map((variant, v) => (
			<Stack key={v} className="gap-y-3">
				<Heading level="1" text={variant} />
				<HStack className="gap-x-3 gap-y-6 flex-wrap">
					{Object.keys(badgeColor).map((color, c) => (
						<Badge
							key={c}
							text={color}
							color={color as keyof typeof badgeColor}
							variant={variant as keyof typeof badgeVariant}
						/>
					))}
				</HStack>
			</Stack>
		))}
	</Div>
);

Demo.html = `const Demo = () => (
	<Div className="flex flex-col w-full gap-12 justify-between flex-wrap">
		{Object.keys(badgeVariant).map((variant, v) => (
			<Stack key={v} className="gap-y-3">
				<Heading level="1" text={variant} />
				<HStack className="gap-x-3 gap-y-6 flex-wrap">
					{Object.keys(badgeColor).map((color, c) => (
						<Badge
							key={c}
							text={color}
							color={color as keyof typeof badgeColor}
							variant={variant as keyof typeof badgeVariant}
						/>
					))}
				</HStack>
			</Stack>
		))}
	</Div>
);`;
