import { DemoFirst, DemoSecond } from './Select.demo';
import { selectVariant } from './utils';

const title = 'Select';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLDivElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
	},
	{
		name: 'isOpen',
		type: 'boolean',
		description: 'Статус состояния компонента (открыто или нет)',
		default: '`false`',
	},
	{
		name: 'onOpen',
		type: '() => void',
		description: 'Обратный вызов при открытии компонента',
	},
	{
		name: 'onClose',
		type: '() => void',
		description: 'Обратный вызов при закрытии компонента',
	},
	{
		name: 'value',
		type: 'string',
		description: 'Значение отображаемой на компоненте',
	},
	{
		name: 'options',
		type: 'TypeSelectOption[]',
		description: 'Массив дочерних элементов-кнопок',
	},
	{
		name: 'onChange',
		type: '(value: string) => void',
		description: 'Обратный вызов при нажатии на элемент в выпадающем списке',
	},
	{
		name: 'variant',
		type: Object.keys(selectVariant),
		description: '`string`',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'children',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри кнопки',
	},
];

export const SelectPage = {
	url,
	title,
	description: 'Компонент для отображения выпадающего списка',
	props,
	demos: [
		{
			title: 'Example #1',
			description: 'Пример использования компонента вместе с `options`',
			jsx: DemoFirst,
			html: DemoFirst.html,
		},
		{
			title: 'Example #2',
			description: 'Пример использования компонента вместе с `children`',
			jsx: DemoSecond,
			html: DemoSecond.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
	gitStyles: `https://github.com/parabit/megatizerui/blob/main/lib/styles/${url}.css`,
};
