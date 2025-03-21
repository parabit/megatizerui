import { Divider, Stack } from '@lib';

import DocsDemo from './DocsDemo';

const DocsDemos = ({ items }: { items: TypeDocsDemo[] }) => (
	<Stack className="gap-y-4">
		{items.map((demo: TypeDocsDemo, index: number) => (
			<Stack key={index} className="gap-y-12">
				<DocsDemo {...demo} />
				{items.length - 1 > index ? <Divider /> : null}
			</Stack>
		))}
	</Stack>
);

export default DocsDemos;
