import { Stack } from '@lib';

import DocsDemo from '../components/DocsDemo';
import DocsHeader from '../components/DocsHeader';
import DocsPagination from '../components/DocsPagination';
import DocsProps from '../components/DocsProps';
import DocsSource from '../components/DocsSource';

interface IDocsScreen extends TypeDocsComponent {
	prevPage?: {
		url: string;
		title: string;
	};
	nextPage?: {
		url: string;
		title: string;
	};
}

const DocsScreen = (props: IDocsScreen) => (
	<Stack className="w-full overflow-hidden p-4 sm:pl-12 sm:pt-8 pb-24 md:pr-24">
		<DocsHeader {...props} />

		{props.demos
			? props.demos.map((demo: TypeDocsDemo, index: number) => (
					<DocsDemo key={index} {...demo} />
				))
			: null}

		{props.props ? <DocsProps props={props.props} title={props.propsTitle} /> : null}
		{props.gitSource || props.gitDemo ? <DocsSource {...props} /> : null}
		{props.prevPage || props.nextPage ? <DocsPagination {...props} /> : null}
	</Stack>
);

export default DocsScreen;
