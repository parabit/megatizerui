import { Demo } from './useOutsideClick.demo';

const title = 'useOutsideClick';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref',
		description: 'Ref-ссылка на `<div />` элемент-область для обработки нажатия',
	},
];

export const useOutsideClickPage = {
	url,
	title,
	description: 'Хук, позволяющий обрабатывать нажатия вне указанной области',
	props,
	demos: [
		{
			title: 'Example',
			description: 'Пример использования хука',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/hooks/${url}/${title}.ts`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/hooks/${url}/${title}.demo.tsx`,
};
