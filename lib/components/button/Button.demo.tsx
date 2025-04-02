// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Stack } from '../stack';
import { Button } from './Button';
import { EnumButtonColors, EnumButtonVariants } from './utils';

const Demo = () => (
	<Stack className="gap-y-6 w-full">
		{Object.keys(EnumButtonColors).map((color, i) => (
			<Div key={i} className="flex flex-col md:flex-row gap-x-3 gap-y-6 w-full">
				{Object.keys(EnumButtonVariants).map((variant, j) => (
					<Button
						key={j}
						text={variant}
						onClick={() => alert(variant)}
						color={color as EnumButtonColors}
						variant={variant as EnumButtonVariants}
					/>
				))}
			</Div>
		))}
	</Stack>
);

Demo.html = `const Demo = () => (
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
);`;

export { Demo };
