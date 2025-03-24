import { propsDiv } from '../div/div.docs';
import { Demo } from './Card.demo';

const title = 'Card';
const url = title.toLocaleLowerCase();

const html = `const Demo = () => (
    <Card className="p-4 gap-y-3 items-start">
        <Heading level="2">Заголовок</Heading>
        <Span>Базовая карточка, содержащая заголовок, содержание и кнопку.</Span>
        <Button text="Кнопка" onClick={() => alert('click!')} />
    </Card>
);`;

export const CardPage = {
	url,
	title,
	description: 'Компонент, создаваемый на основе компонента `<Div />`',
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
