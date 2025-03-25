import { Demo } from './Stack.demo';

const title = 'Stack';
const url = title.toLocaleLowerCase();

export const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLDivElement>',
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
    <Stack className="min-h-8 w-full p-4 bg-primary-blue gap-y-3">
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
		<Div className="w-36 h-12 bg-primary-pink p-4 flex items-center">Div</Div>
	</Stack>
);`;

export const StackPage = {
	url,
	title,
	description: 'Используется для размещения дочерних элементов в вертикальном стеке',
	props,
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
