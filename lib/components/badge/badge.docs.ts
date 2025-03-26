import { Demo } from './Badge.demo';
import { EnumBadgeVariants } from './utils';

const title = 'Badge';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'children',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри кнопки',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'text',
		type: 'string',
		description: 'Текст отображемый на компоненте',
	},
	{
		name: 'variant',
		type: Object.keys(EnumBadgeVariants),
		description: '`string`',
		default: 'muted',
	},
];

export const BadgePage = {
	url,
	title,
	description: 'Компонент, для отображения статуса элемента',
	props,
	demos: [
		{
			title: 'Variants',
			description:
				'Используйте свойство `variant` для изменения оформления компонента: ' +
				Object.keys(EnumBadgeVariants)
					.map((el) => '`' + el + '`')
					.join(', '),
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
