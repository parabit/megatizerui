import { Demo } from './Pressable.demo';

const title = 'Pressable';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLButtonElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
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
	{
		name: 'onClick',
		type: 'MouseEvent<HTMLButtonElement>',
		description: 'Событие, возникающе после нажатия на компонент',
	},
];

export const PressablePage = {
	url,
	title,
	description: 'Компонент, для добавления возможности обработки нажатя по любому компоненту',
	props,
	demos: [
		{
			title: 'Example',
			description: 'Пример использования компонента для обработки нажатия на текст',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
