import { Demo } from './Avatar.demo';
import { avatarSize } from './utils';

const title = 'Avatar';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'size',
		type: Object.keys(avatarSize),
		description: '`string`',
		default: 'md',
	},
	{
		name: 'online',
		type: 'boolean',
		description: 'Отображение статуса `online`',
		default: 'false',
	},
];

export const AvatarPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<img />`',
	props,
	demos: [
		{
			title: 'Sizes',
			description: 'Используйте свойство `size` для изменения размера компонента',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
	gitStyles: `https://github.com/parabit/megatizerui/blob/main/lib/styles/${url}.css`,
};
