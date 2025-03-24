import { Demo } from './Heading.demo';
import { headingLevels } from './utils';

const title = 'Heading';
const url = title.toLocaleLowerCase();

export const propsDiv = [
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

const html = `const Demo = () => (
    <Stack className="gap-y-1">
        {levels.map((level, index) => (
            <Heading key={index} level={level}>
                Это заголовок {level} уровня
            </Heading>
        ))}
    </Stack>
)`;

export const HeadingPage = {
	url,
	title,
	description: 'Компонент-заголовок, создаваемый на основе тега `<h* />`',
	props: propsDiv,
	demos: [
		{
			title: 'Example',
			description: 'Пример использования заголовка с компонентом `<Heading />`',
			jsx: Demo,
			html,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/${url}/${title}.demo.tsx`,
};
