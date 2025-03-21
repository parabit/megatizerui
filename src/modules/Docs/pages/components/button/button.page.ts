import { DemoVariant } from './Buttons.Demo';

const props: TypeDocsArrayProps = [
	{
		name: 'ref',
		type: 'Ref<HTMLButtonElement>',
	},
	{
		name: 'children',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри кнопки',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'text',
		type: 'string',
		description: 'Текст отображемый на кнопке',
	},
	{
		name: 'variant',
		type: ['solid', 'ghost', 'link'],
		description: 'type is `string`',
		default: 'solid',
	},
];

const html = `import { Button } from 'megatizerui';\n
<Button text="solid" variant="solid" onClick={() => alert('click!')} />
<Button text="ghost" variant="ghost" onClick={() => alert('click!')} />
<Button variant="link" onClick={() => alert('click!')}>link</Button>
<Button variant="outline" onClick={() => alert('click!')}>link</Button>`;

export const ButtonPage: TypeDocsComponent = {
	url: 'button',
	title: 'Button',
	description: 'Компонент, создаваемый на основе тега `<button />`',
	git: 'https://github.com/parabit/megatizerui/blob/main/lib/components/button/Button.tsx',
	props,
	demos: [
		{
			title: 'Variants',
			description:
				'Используйте свойство `variant` для изменения оформления кнопки: `default`, `ghost`, `link`',
			jsx: DemoVariant,
			html,
		},
	],
};
