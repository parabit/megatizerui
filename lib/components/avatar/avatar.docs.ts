import { DemoSizes } from './Avatar.demo';
import { EnumAvatarSizes } from './utils';

const props = [
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'size',
		type: Object.keys(EnumAvatarSizes),
		description: '`string`',
		default: 'md',
	},
	{
		name: 'online',
		type: 'boolean',
		description: 'Отображение статуса `online`',
		default: 'false',
	},
];

const html = `const DemoSizes = () => (
	<Div>
		{sizes.map((size, index) => <Avatar key={index} size={size} online={true} />)}
	</Div>
);`;

export const AvatarPage = {
	url: 'avatar',
	title: 'Avatar',
	description: 'Компонент, создаваемый на основе тега `<img />`',
	props,
	demos: [
		{
			title: 'Sizes',
			description:
				'Используйте свойство `size` для изменения размера компонента: ' +
				Object.keys(EnumAvatarSizes)
					.map((el) => '`' + el + '`')
					.join(', '),
			jsx: DemoSizes,
			html,
		},
	],
	gitSource: 'https://github.com/parabit/megatizerui/blob/main/lib/components/avatar/Avatar.tsx',
	gitDemo:
		'https://github.com/parabit/megatizerui/blob/main/lib/components/avatar/Avatar.demo.tsx',
};
