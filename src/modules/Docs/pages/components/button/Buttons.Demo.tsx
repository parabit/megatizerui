import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from 'lib/components/button/utils';

import { Button, HStack } from '@lib';

const renderDemo = (variant: VariantProps<typeof buttonVariants>['variant']) => (
	<Button text={variant?.toString()} variant={variant} onClick={() => alert('click!')} />
);

export const DemoVariant = () => (
	<HStack className="gap-x-3 gap-y-6 flex-wrap">
		{renderDemo('solid')}
		{renderDemo('ghost')}
		{renderDemo('link')}
		{renderDemo('outline')}
	</HStack>
);
