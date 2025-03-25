/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Image } from './Image';
// @ts-ignore
import imageExample from './image_example.jpg';

export const Demo = () => (
	<Div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full">
		<Image className="min-w-32 h-32 rounded-lg" alt="Пример битой ссылки" />
		<Image className="min-w-32 h-32 rounded-lg" src={imageExample} />
	</Div>
);
