import { DemoFirst, DemoSecond } from './Dropdown.demo';
import { dropdownPlacement, dropdownVariant } from './utils';

const title = 'Dropdown';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLDivElement>',
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
		name: 'isOpen',
		type: 'boolean',
		description: 'Статус состояния компонента (открыто или нет)',
		default: '`false`',
		required: true,
	},
	{
		name: 'onClose',
		type: '() => void',
		description: 'Обратный вызов при закрытии компонента',
		required: true,
	},
	{
		name: 'options',
		type: 'TypeDropdownOption[]',
		description: 'Массив дочерних элементов-кнопок',
	},
	{
		name: 'placement',
		type: Object.keys(dropdownPlacement),
		description: '`string`',
		default: '`bottom-left`',
	},
	{
		name: 'variant',
		type: Object.keys(dropdownVariant),
		description: '`string`',
	},
	{
		name: 'duration',
		type: '`number`',
		description: 'Продолжительность анимации компонента `ms`',
	},
];

const propsOption = [
	{
		name: 'value',
		type: 'string',
		description: 'Значение элемента',
		required: true,
	},
	{
		name: 'valueSelected',
		type: 'string',
		description: 'Значение активного элемента',
	},
	{
		name: 'onClose',
		type: '() => void',
		description: 'Обратный вызов при закрытии `Dropdown`',
	},
	{
		name: 'onClick',
		type: '(value: string) => void',
		description: 'Обратный вызов при нажатии на компонент',
	},
	{
		name: 'divider',
		type: 'boolean',
		description: 'Отображение разделителя',
	},
	{
		name: 'icon',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
];

export const DropdownPage = {
	url,
	title,
	description: 'Компонент для отображения выпадающего списка',
	props,
	propsTitle: 'Props Dropdown',
	demos: [
		{
			title: 'Example #1 - options',
			description: 'Пример использования при помощи свойства `options` и хука `useOutsideClick`',
			jsx: DemoFirst,
			html: DemoFirst.html,
		},
		{
			title: 'Example #2 - Dropdown.Option',
			description:
				'Пример использования при помощи передачи компонентов `Dropdown.Option` и хука `useOutsideClick`',
			jsx: DemoSecond,
			html: DemoSecond.html,
		},
		{
			title: 'Dropdown.Option descriptions',
			description: 'Описание `Dropdown.Option`',
			props: propsOption,
			propsTitle: 'Props Dropdown.Option',
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
	gitStyles: `https://github.com/parabit/megatizerui/blob/main/lib/styles/${url}.css`,
};
