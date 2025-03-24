import { Demo } from './Div.demo';

const title = 'Div';
const url = title.toLocaleLowerCase();

export const propsDiv = [
	{
		name: 'ref',
		type: 'Ref<HTMLButtonElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
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

const html = `const Demo = () => (
    <Div className="h-8 w-full bg-primary-blue">
		This is the Div
	</Div>
);`;

export const DivPage = {
	url,
	title,
	description: 'Базовый компонент, создаваемый на основе тега `<div />`',
	props: propsDiv,
	demos: [
		{
			title: 'Example',
			jsx: Demo,
			html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
