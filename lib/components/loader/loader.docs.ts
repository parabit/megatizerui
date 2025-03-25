import { Demo } from './Loader.demo';

const title = 'Loader';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
];

export const LoaderPage = {
	url,
	title,
	description: 'Компонент, для отображения статуса загрузки',
	props,
	demos: [
		{
			title: 'Example',
			description:
				'Пример использования компонента для отображения статуса загрузки и блокировки взадимодействия с карточкой на время загрузки',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
