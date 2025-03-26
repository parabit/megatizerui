/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { HStack } from '../hstack';
import { Badge } from './Badge';
import { badgeVariants, EnumBadgeVariants } from './utils';

const Demo = () => (
	<HStack className="gap-x-3 gap-y-6 flex-wrap">
		{Object.keys(EnumBadgeVariants).map((variant, index) => (
			<Badge
				key={index}
				text={variant}
				variant={variant as VariantProps<typeof badgeVariants>['variant']}
			/>
		))}
	</HStack>
);

Demo.html = `const Demo = () => (
	<HStack className="gap-x-3 gap-y-6 flex-wrap">
		{Object.keys(EnumBadgeVariants).map((variant, index) => (
			<Badge
				key={index}
				text={variant}
				variant={variant as VariantProps<typeof badgeVariants>['variant']}
			/>
		))}
	</HStack>
);`;

export { Demo };
