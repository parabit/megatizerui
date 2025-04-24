import { propsDiv } from '../div/div.docs';
import { Demo } from './Card.demo';
import { cardVaraint } from './utils';

const title = 'Card';
const url = title.toLocaleLowerCase();

const props = [
	...propsDiv,
	{
		name: 'variant',
		type: Object.keys(cardVaraint),
		description: '`string`',
	},
];
export const CardPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе компонента `<Div />`',
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
