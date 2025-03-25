import { Demo } from './Image.demo';

const title = 'Image';
const url = title.toLocaleLowerCase();

export const propsDiv = [
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

const html = `const Demo = () => (
    <Div className="flex flex-row flex-wrap gap-x-3 gap-y-6 w-full">
		<Image className="min-w-32 h-32 rounded-lg" alt="Пример битой ссылки" />
		<Image className="min-w-32 h-32 rounded-lg" src={imageExample} />
	</Div>
);`;

export const ImagePage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе тега `<img />` для отображения изображений',
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
