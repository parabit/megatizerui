import { Stack } from '@lib';

import DocsDemos from '../components/DocsDemos';
import DocsHeader from '../components/DocsHeader';
import DocsProps from '../components/DocsProps';
import DocsSource from '../components/DocsSource';

const DocsScreen = (props: TypeDocsComponent) => (
	<Stack className="w-full overflow-hidden p-4 sm:pl-12 sm:pt-8 pb-24 md:pr-24">
		<DocsHeader {...props} />
		{props.demos ? <DocsDemos items={props.demos} /> : null}
		{props.props ? <DocsProps props={props.props} /> : null}
		{props.gitSource || props.gitDemo ? <DocsSource {...props} /> : null}
	</Stack>
);

export default DocsScreen;
