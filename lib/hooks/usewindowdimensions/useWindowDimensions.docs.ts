import { Demo } from './useWindowDimensions.demo';

const title = 'useWindowDimensions';
const url = title.toLocaleLowerCase();

export const useWindowDimensionsPage = {
	url,
	title,
	description: 'Хук, позволяющий переключать состяние',
	demos: [
		{
			title: 'Example',
			description:
				'Пример использования хука. Измените размеры страницы для получения доступных значений',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/hooks/${url}/${title}.ts`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/hooks/${url}/${title}.demo.tsx`,
};
