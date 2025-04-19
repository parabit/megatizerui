import { DemoLoadingAndDisabled, DemoSize, DemoVariantsAndColors } from './Button.demo';
import { buttonColor, buttonSize, buttonVariant } from './utils';

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
		type: Object.keys(buttonVariant),
		description: '`string`',
		default: '`solid`',
	},
	{
		name: 'color',
		type: Object.keys(buttonColor),
		description: '`string`',
		default: '`primary`',
	},
	{
		name: 'size',
		type: Object.keys(buttonSize),
		description: '`string`',
		default: '`sm`',
	},
];

export const ButtonPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<button />`',
	props,
	demos: [
		{
			title: 'Variant & Color',
			description: 'Используйте свойство `variant` и `color` для изменения оформления кнопки',
			jsx: DemoVariantsAndColors,
			html: DemoVariantsAndColors.html,
		},
		{
			title: 'Size',
			description: 'Используйте свойство `size` для изменения размера кнопки',
			jsx: DemoSize,
			html: DemoSize.html,
		},

		{
			title: 'Loading & Disabled',
			description: 'Используйте свойство `loading` и `disabled` для изменения статуса кнопки',
			jsx: DemoLoadingAndDisabled,
			html: DemoLoadingAndDisabled.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
	gitStyles: `https://github.com/parabit/megatizerui/blob/main/lib/styles/${url}.css`,
};
