// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { Div } from '../div';
import { Button } from './Button';
import { buttonVariants, EnumButtonVariants } from './utils';

export const DemoVariants = () => (
	<Div className="flex flex-col md:flex-row gap-x-3 gap-y-6 w-full">
		{Object.keys(EnumButtonVariants).map((variant, index) => (
			<Button
				key={index}
				text={variant}
				onClick={() => alert(variant)}
				variant={variant as VariantProps<typeof buttonVariants>['variant']}
			/>
		))}
	</Div>
);
