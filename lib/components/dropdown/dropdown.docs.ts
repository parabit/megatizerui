import { DemoFirst, DemoSecond } from './Dropdown.demo';

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
		default: 'false',
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
		type: ['bottom left', 'bottom right'],
		description: '`string`',
		default: 'bottom left',
	},
];

export const DropdownPage = {
	url,
	title,
	description: 'Компонент для отображения выпадающего списка',
	props,
	demos: [
		{
			title: 'Example #1',
			description: 'Пример использования при помощи свойства `options` и хука `useOutsideClick`',
			jsx: DemoFirst,
			html: DemoFirst.html,
		},
		{
			title: 'Example #2',
			description:
				'Пример использования при помощи передачи компонентов `Dropdown.Option` и хука `useOutsideClick`',
			jsx: DemoSecond,
			html: DemoSecond.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
