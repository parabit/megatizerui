import { Demo } from './Divider.demo';

const title = 'Divider';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
];

const html = `const Demo = () => (
    <Stack className="gap-y-3">
        <Span>Это текст над раздилителем</Span>
        <Divider />
        <Divider className="border-2" />
        <Divider className="border-4" />
        <Divider className="border-8" />
        <Span>Это текст под раздилителем</Span>
    </Stack>
);`;

export const DividerPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<hr />`',
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
