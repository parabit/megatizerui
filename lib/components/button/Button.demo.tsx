// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { Div } from '../div';
import { Button } from './Button';
import { buttonVariants } from './utils';

const renderDemo = (variant: VariantProps<typeof buttonVariants>['variant']) => (
	<Button
		text={variant?.toString()}
		variant={variant}
		onClick={() => alert('click!')}
		className="w-full"
	/>
);

export const DemoVariant = () => (
	<Div className="flex flex-col md:flex-row gap-x-3 gap-y-6 w-full">
		{renderDemo('solid')}
		{renderDemo('ghost')}
		{renderDemo('link')}
		{renderDemo('outline')}
	</Div>
);
