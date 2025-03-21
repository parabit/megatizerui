import Markdown from 'react-markdown';

import { Divider, Heading, HStack, Stack } from '@lib';

const DocsHeader = ({ title, description }: TypeDocsComponent) => {
	return (
		<Stack className="gap-y-3">
			<HStack className="items-end justify-between">
				<Heading level="2" className="font-bold">
					{title}
				</Heading>
			</HStack>
			<Markdown>{description}</Markdown>
			<Divider />
		</Stack>
	);
};

export default DocsHeader;
