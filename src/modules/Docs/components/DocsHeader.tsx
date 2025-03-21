import Markdown from 'react-markdown';

import { Divider, Heading, HStack, Stack } from '@lib';
import { GitHubIcon, Link } from '@modules/Elements';

const DocsHeader = ({ title, description, git }: TypeDocsComponent) => {
	return (
		<Stack className="gap-y-3">
			<HStack className="items-end justify-between">
				<Heading level="2">{title}</Heading>
				{git ? (
					<Link to={git} target="_blank">
						<GitHubIcon />
					</Link>
				) : null}
			</HStack>
			<Markdown>{description}</Markdown>
			<Divider />
		</Stack>
	);
};

export default DocsHeader;
