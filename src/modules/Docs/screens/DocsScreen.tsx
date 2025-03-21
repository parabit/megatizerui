import { Link } from 'react-router';

import { Heading, HStack, Span, Stack } from '@lib';

import DocsDemos from '../components/DocsDemos';
import DocsHeader from '../components/DocsHeader';
import DocsProps from '../components/DocsProps';

const DocsScreen = (props: TypeDocsComponent) => (
	<Stack className="w-full overflow-hidden p-4 xs:pl-8 pb-24 md:pr-24">
		<DocsHeader {...props} />
		{props.demos ? <DocsDemos items={props.demos} /> : null}
		{props.props ? <DocsProps props={props.props} /> : null}

		{props.gitSource || props.gitDemo ? (
			<Stack className="mt-6">
				<Heading level="4" className="font-semibold" text="Source" />

				<HStack className="mt-3 gap-x-1.5">
					{props.gitSource ? (
						<Link
							to={props.gitSource}
							target="_blank"
							className="text-primary-blue text-lg hover:underline"
						>
							Source
						</Link>
					) : null}
					{props.gitDemo ? (
						<HStack className="gap-x-1.5">
							<Span>•</Span>
							<Link
								to={props.gitDemo}
								target="_blank"
								className="text-primary-blue text-lg hover:underline"
							>
								Demo
							</Link>
						</HStack>
					) : null}
				</HStack>
			</Stack>
		) : null}
	</Stack>
);

export default DocsScreen;
