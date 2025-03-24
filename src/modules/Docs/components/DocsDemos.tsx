import { Stack } from '@lib';

import DocsDemo from './DocsDemo';

const DocsDemos = ({ items }: { items: TypeDocsDemo[] }) => (
	<Stack>
		{items.map((demo: TypeDocsDemo, index: number) => (
			<DocsDemo key={index} {...demo} />
		))}
	</Stack>
);

export default DocsDemos;
