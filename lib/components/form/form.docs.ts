import { Demo } from './Form.demo';

const title = 'Form';
const url = title.toLocaleLowerCase();

export const propsDiv = [
	{
		name: 'onSubmit',
		type: '() => void',
		description: 'Обратный вызов при срабатывании `submit` события',
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

const html = `const Demo = () => {
    const [value, setValue] = useState('');

    const handleSubmit = () => alert('submit value: ' + (value.length ? value : '<пусто>'));

    return (
        <Form className="gap-y-3" onSubmit={handleSubmit}>
            <Input
                value={value}
                placeholder="Введите текст..."
                onChange={(e) => setValue(e.target.value)}
            />
            <Button text="Сохранить" type="submit" />
        </Form>
    );
};`;

export const FormPage = {
	url,
	title,
	description:
		'Компонент для группировки компонентов формы, создаваемый на основе тега `<form />`',
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
