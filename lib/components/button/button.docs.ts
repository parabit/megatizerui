import { Demo } from './Button.demo';
import { EnumButtonColors, EnumButtonSizes, EnumButtonVariants } from './utils';

const title = 'Button';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLButtonElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
	},
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
		description: 'Текст отображемый на кнопке',
	},
	{
		name: 'variant',
		type: Object.keys(EnumButtonVariants),
		description: '`string`',
		default: '`solid`',
	},
	{
		name: 'color',
		type: Object.keys(EnumButtonColors),
		description: '`string`',
		default: '`primary`',
	},
	{
		name: 'size',
		type: Object.keys(EnumButtonSizes),
		description: '`string`',
		default: '`md`',
	},
	{
		name: 'onClick',
		type: 'MouseEvent<HTMLButtonElement>',
		description: 'Событие, возникающе после нажатия на компонент',
	},
];

export const ButtonPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<button />`',
	props,
	demos: [
		{
			title: 'Example',
			description: 'Используйте свойство `variant` и `color` для изменения оформления кнопки',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
