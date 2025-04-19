import { Demo } from './Badge.demo';
import { badgeColor, badgeVariant } from './utils';

const title = 'Badge';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'children',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'text',
		type: 'string',
		description: 'Текст отображемый внутри компонента',
	},
	{
		name: 'variant',
		type: Object.keys(badgeVariant),
		description: '`string`',
		default: '`solid`',
	},
	{
		name: 'color',
		type: Object.keys(badgeColor),
		description: '`string`',
		default: '`primary`',
	},
];

export const BadgePage = {
	url,
	title,
	description: 'Компонент, для отображения статуса компонента',
	props,
	demos: [
		{
			title: 'Variant & Color',
			description:
				'Используйте свойство `variant` и `color` для изменения оформления компонента',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
	gitStyles: `https://github.com/parabit/megatizerui/blob/main/lib/styles/${url}.css`,
};
