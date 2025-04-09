import { Demo } from './Switch.demo';

const title = 'Switch';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'value',
		type: 'boolean',
		description: 'Значание состояния',
		required: true,
	},
	{
		name: 'onChange',
		type: '(value: boolean) => void',
		description: 'Обратный вызова при изменения состояния компонента',
		required: true,
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'iconToggler',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента-переключателя.',
	},
	{
		name: 'iconChecked',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента (слева) при активном состоянии.',
	},
	{
		name: 'iconUnChecked',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента (справа) при неактивном состоянии.',
	},
];

export const SwitchPage = {
	url,
	title,
	description: 'Используется для размещения компонента переключателя состояния',
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
