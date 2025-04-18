import Markdown from 'react-markdown';

import { Div, Divider, Heading, HStack, Stack } from '@lib';

const DocsHeader = ({ title, description }: { title: string; description: string }) => (
	<Stack>
		<HStack className="items-end justify-between mb-2">
			<Heading level="1" className="font-bold">
				{title}
			</Heading>
		</HStack>
		<Div className="text-muted-light dark:text-muted-dark">
			<Markdown>{description}</Markdown>
		</Div>
		<Divider className="mt-3" />
	</Stack>
);

export default DocsHeader;
