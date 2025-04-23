/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { Fragment } from 'react';

import { Div } from '../div';
import { Span } from '../span';
import { Avatar } from './Avatar';
// @ts-ignore
import avatarExample from './avatar_example.jpg';
import { avatarSize } from './utils';

export const Demo = () => (
	<Div className="grid grid-cols-[10%_auto] gap-3 items-center w-full md:max-w-[45%]">
		{Object.keys(avatarSize)
			.reverse()
			.map((size, i) => (
				<Fragment key={i}>
					<Span text={size} />
					<Avatar online={true} src={avatarExample} size={size as keyof typeof avatarSize} />
				</Fragment>
			))}
	</Div>
);

Demo.html = `const Demo = () => (
	<Div className="grid grid-cols-[10%_auto] gap-3 items-center w-full md:max-w-[45%]">
		{Object.keys(avatarSize)
			.reverse()
			.map((size, i) => (
				<Fragment key={i}>
					<Span text={size} />
					<Avatar online={true} src={avatarExample} size={size as keyof typeof avatarSize} />
				</Fragment>
			))}
	</Div>
);`;
