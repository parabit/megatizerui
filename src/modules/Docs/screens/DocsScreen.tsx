import { Stack } from '@lib';

import DocsDemos from '../components/DocsDemos';
import DocsHeader from '../components/DocsHeader';
import DocsProps from '../components/DocsProps';

const DocsScreen = (props: TypeDocsComponent) => (
	<Stack className="w-full overflow-x-hidden overflow-y-auto p-8 md:pr-24 md:pb-24">
		<DocsHeader {...props} />
		{props.demos ? <DocsDemos items={props.demos} /> : null}
		{props.props ? <DocsProps props={props.props} /> : null}
	</Stack>
);

export default DocsScreen;
