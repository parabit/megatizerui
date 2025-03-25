/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { Div } from '../div';
import { Avatar } from './Avatar';
// @ts-ignore
import avatarExample from './avatar_example.jpg';
import { avatarVariants, EnumAvatarSizes } from './utils';

const Demo = () => (
	<Div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full">
		{Object.keys(EnumAvatarSizes).map((size, index) => (
			<Avatar
				key={index}
				src={avatarExample}
				online={true}
				size={size as VariantProps<typeof avatarVariants>['size']}
			/>
		))}
	</Div>
);

Demo.html = `const Demo = () => (
	<Div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full">
		{Object.keys(EnumAvatarSizes).map((size, index) => (
			<Avatar
				key={index}
				src={avatarExample}
				online={true}
				size={size as VariantProps<typeof avatarVariants>['size']}
			/>
		))}
	</Div>
);`;

export { Demo };
