import { Demo } from './Span.demo';
import { EnumSpanVariants } from './utils';

const title = 'Span';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLSpanElement>',
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
		name: 'variant',
		type: Object.keys(EnumSpanVariants),
		description: '`string`',
		default: '`default`',
	},
];

export const SpanPage = {
	url,
	title,
	description: 'Компонент, для отображения текста создаваемый на основе тега `<span />`',
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
