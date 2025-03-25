import { Demo } from './Heading.demo';
import { headingLevels } from './utils';

const title = 'Heading';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLHeadingElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
	},
	{
		name: 'text',
		type: ['string', 'number'],
		description: 'Элемент отображемый внутри компонента',
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
	{
		name: 'level',
		type: Object.keys(headingLevels),
		description: '`string`',
		required: true,
	},
];

export const HeadingPage = {
	url,
	title,
	description: 'Компонент-заголовок, создаваемый на основе тега `<h* />`',
	props,
	demos: [
		{
			title: 'Example',
			description: 'Пример использования заголовка с компонентом `<Heading />`',
			jsx: Demo,
			html: Demo.html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
