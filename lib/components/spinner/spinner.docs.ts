import { Demo } from './Spinner.demo';
import { spinnerVariantsDictionary } from './utils';

const title = 'Spinner';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'variant',
		type: Object.keys(spinnerVariantsDictionary),
		description: '`string`',
		default: 'muted',
	},
];

export const SpinnerPage = {
	url,
	title,
	description: 'Компонент, для отображения анимированного `svg` спиннера',
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
