import { Divider, Stack } from '@lib';

import DocsDemo from './DocsDemo';

const DocsDemos = ({ items }: { items: TypeDocsDemo[] }) => (
	<Stack>
		{items.map((demo: TypeDocsDemo, index: number) => (
			<Stack key={index}>
				<DocsDemo {...demo} />
				{items.length - 1 > index ? <Divider /> : null}
			</Stack>
		))}
	</Stack>
);

export default DocsDemos;
