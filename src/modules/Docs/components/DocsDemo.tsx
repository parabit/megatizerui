import { useLayoutEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useLocation } from 'react-router';

import { Card, Div, Heading, Span, Stack, Tabs } from '@lib';
import { CodeBlock } from '@modules/Elements';

import DocsProps from './DocsProps';

const DocsDemo = (props: TypeDocsDemo) => {
	const [index, setIndex] = useState(0);

	const { pathname } = useLocation();

	useLayoutEffect(() => {
		setIndex(0);
	}, [pathname]);

	const handleChangeIndex = (value: number) => setIndex(value);

	const Preview = () => {
		if (props.node) return props.node;
		if (props.jsx) return props.jsx();
		return null;
	};

	return (
		<Stack className="mt-6">
			<Header {...props} />

			{(props.node || props.jsx) && props.html ? (
				<Tabs className="mt-4">
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
								<CodeBlock value={props.html} />

								<Span
									variant="muted"
									text="typescript"
									className="text-sm absolute top-2 right-3"
								/>
							</Card>
						</Tabs.Panel>
					</Tabs.PanelList>
				</Tabs>
			) : null}

			{props.props ? <DocsProps props={props.props} /> : null}
		</Stack>
	);
};

export default DocsDemo;

const Header = (props: { title: string; description?: string }) => (
	<Stack>
		<Heading level="1" className="font-semibold mb-2">
			{props.title}
		</Heading>

		{props.description ? (
			<Div className="leading-8 text-muted-light dark:text-muted-dark">
				<Markdown>{props.description}</Markdown>
			</Div>
		) : null}
	</Stack>
);
