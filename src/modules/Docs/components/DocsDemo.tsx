import { useLayoutEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useTheme } from '@hooks';
import { Card, Div, Heading, Span, Stack, Tabs } from '@lib';

import DocsProps from './DocsProps';

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>;

const DocsDemo = (props: TypeDocsDemo) => {
	const { theme } = useTheme();
	const [index, setIndex] = useState(0);

	useLayoutEffect(() => setIndex(0), []);

	const handleChangeIndex = (value: number) => setIndex(value);

	const Preview = () => {
		if (props.node) return props.node;
		if (props.jsx) return props.jsx();
		return null;
	};

	return (
		<Stack className="mt-6">
			<Header {...props} />

			<Tabs className="mt-6">
				<Tabs.TabList index={index} onChange={handleChangeIndex} className="w-full md:w-fit">
					<Tabs.Tab>Preview</Tabs.Tab>
					<Tabs.Tab>Code</Tabs.Tab>
				</Tabs.TabList>

				<Tabs.PanelList index={index}>
					<Tabs.Panel>
						<Card className="w-full items-start justify-start !p-6">
							<Preview />
						</Card>
					</Tabs.Panel>
					<Tabs.Panel>
						<Card className="code-highlighter relative w-full items-start justify-start !p-0 overflow-hidden">
							<CodeBlock theme={theme} html={props.html} />

							<Span
								variant="muted"
								text="typescript"
								className="text-sm absolute top-2 right-3"
							/>
						</Card>
					</Tabs.Panel>
				</Tabs.PanelList>
			</Tabs>

			{props.props ? <DocsProps props={props.props} /> : null}
		</Stack>
	);
};

export default DocsDemo;

const Header = (props: { title: string; description: string }) => (
	<Stack>
		<Heading level="4" className="font-semibold mb-2">
			{props.title}
		</Heading>

		<Div className="leading-8">
			<Markdown>{props.description}</Markdown>
		</Div>
	</Stack>
);

const CodeBlock = ({ theme, html }: { theme: string; html: string }) => (
	<SyntaxHighlighter
		children={html}
		language="typescript"
		style={theme === 'light' ? vs : vscDarkPlus}
		customStyle={{ width: '100%', margin: 0, border: 'none' }}
	/>
);
