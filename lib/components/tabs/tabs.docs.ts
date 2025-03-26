import { Demo } from './Tabs.demo';

const title = 'Tabs';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'children',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента',
	},
	{
		name: 'index',
		type: 'number',
		description: 'Значение индекса активной вкладки',
	},
	{
		name: 'onChange',
		type: '(index: number) => void',
		description: 'Обратны вызов при изменении активной вкладки',
	},
];

export const TabsPage = {
	url,
	title,
	description: 'Используется для размещения компонента переключения вкладок',
	props,
	demos: [
		{
			title: 'Example',
			description: 'Пример использования компонента',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
