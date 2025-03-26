import { Demo } from './useDisclose.demo';

const title = 'useDisclose';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'initState',
		type: 'boolean',
		description: 'Изначальное состояние',
	},
];

export const useDisclosePage = {
	url,
	title,
	description: 'Хук, позволяющий переключать состяние',
	props,
	demos: [
		{
			title: 'Example',
			description: 'Пример использования хука',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.ts`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
