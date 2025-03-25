import { Demo } from './Form.demo';

const title = 'Form';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'onSubmit',
		type: '() => void',
		description: 'Обратный вызов при срабатывании `submit` события',
	},
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
];

export const FormPage = {
	url,
	title,
	description:
		'Компонент для группировки компонентов формы, создаваемый на основе тега `<form />`',
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
