import { DemoFIleInput, DemoInput, DemoInputPassword } from './Inputs.demo';

const title = 'Inputs';
const url = title.toLocaleLowerCase();

const propsInput = [
	{
		name: 'ref',
		type: 'Ref<HTMLInputElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'isInvalid',
		type: 'boolean',
		description:
			'Аттрибут указывающий на статус ошибки для отображения варианта оформления с границей красного цвета',
	},
	{
		name: 'rightIcon',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента справа',
	},
];

const propsInputPassword = [propsInput[0], propsInput[1], propsInput[2]];

const propsFIleInput = [
	propsInput[0],
	{
		name: 'text',
		type: 'string',
		description: 'Элемент отображемый внутри компонента',
	},
	{
		name: 'children',
		type: 'ReactNode',
		description: 'Элемент отображемый внутри компонента',
	},
	{
		name: 'accept',
		type: 'string',
		description: 'Указывает тип файлов доступных для выбора',
	},
];

export const InputsPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<ipnut />` для отображения поля ввода',
	demos: [
		{
			title: 'Input',
			description: 'Пример использования компонента `Input`',
			jsx: DemoInput,
			html: DemoInput.html,
			props: propsInput,
		},
		{
			title: 'InputPassword',
			description: 'Пример использования компонента `InputPassword`',
			jsx: DemoInputPassword,
			html: DemoInputPassword.html,
			props: propsInputPassword,
		},
		{
			title: 'FIleInput',
			description: 'Пример использования компонента `FIleInput`',
			jsx: DemoFIleInput,
			html: DemoFIleInput.html,
			props: propsFIleInput,
		},
	],
	gitSource: `https://github.com/parabit/megatizerui/blob/main/lib/components/input/Input.tsx`,
	gitDemo: `https://github.com/parabit/megatizerui/blob/main/lib/components/input/Inputs.demo.tsx`,
};
