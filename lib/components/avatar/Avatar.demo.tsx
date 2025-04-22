/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Avatar } from './Avatar';
// @ts-ignore
import avatarExample from './avatar_example.jpg';
import { avatarSize } from './utils';

export const Demo = () => (
	<Div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full">
		{Object.keys(avatarSize).map((size, index) => (
			<Avatar
				key={index}
				online={true}
				src={avatarExample}
				size={size as keyof typeof avatarSize}
			/>
		))}
	</Div>
);

Demo.html = `const Demo = () => (
	<Div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full">
		{Object.keys(avatarSize).map((size, index) => (
			<Avatar
				key={index}
				online={true}
				src={avatarExample}
				size={size as keyof typeof avatarSize}
			/>
		))}
	</Div>
);`;
