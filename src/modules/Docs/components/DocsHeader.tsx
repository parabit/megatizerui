import Markdown from 'react-markdown';

import { Divider, Heading, HStack, Stack } from '@lib';

const DocsHeader = ({ title, description }: TypeDocsComponent) => (
	<Stack>
		<HStack className="items-end justify-between mb-2">
			<Heading level="2" className="font-bold">
				{title}
			</Heading>
		</HStack>
		<Markdown>{description}</Markdown>
		<Divider className="mt-3 border-neutral-300" />
	</Stack>
);

export default DocsHeader;
