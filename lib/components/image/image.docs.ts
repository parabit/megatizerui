import { Demo } from './Image.demo';

const title = 'Image';
const url = title.toLocaleLowerCase();

const props = [
	{
		name: 'ref',
		type: 'Ref<HTMLImageElement>',
		description:
			'Изменяемый объект, ссылку на который React сохраняет между повторными рендерингами',
	},
	{
		name: 'className',
		type: 'string',
		description: 'Набор стилей Tailwind CSS v.4',
	},
	{
		name: 'src',
		type: 'ImgHTMLAttributes<T>.src',
		description: 'Аттрибут указывающий путь к изображению',
	},
	{
		name: 'alt',
		type: 'ImgHTMLAttributes<T>.alt',
		description: 'Альтернативный текст для изображения',
	},
];

export const ImagePage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<img />` для отображения изображений',
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
