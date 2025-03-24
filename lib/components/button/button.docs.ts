import { DemoVariants } from './Button.demo';
import { EnumButtonVariants } from './utils';

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLButtonElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
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
		type: Object.keys(EnumButtonVariants),
		description: '`string`',
		default: 'solid',
	},
];

const html = `const DemoVariants = () => (
	<Div>
		{variants.map((variant, index) => (
			<Button
				key={index}
				text={variant}
				variant={variant}
				onClick={() => alert(variant)}
			/>
		))}
	</Div>
);`;

export const ButtonPage = {
	url: 'button',
	title: 'Button',
	description: 'Компонент, создаваемый на основе тега `<button />`',
	props,
	demos: [
		{
			title: 'Variants',
			description:
				'Используйте свойство `variant` для изменения оформления кнопки: ' +
				Object.keys(EnumButtonVariants)
					.map((el) => '`' + el + '`')
					.join(', '),
			jsx: DemoVariants,
			html,
		},
	],
	gitSource: 'https://github.com/parabit/megatizerui/blob/main/lib/components/button/Button.tsx',
	gitDemo:
		'https://github.com/parabit/megatizerui/blob/main/lib/components/button/Button.demo.tsx',
};
