import { Heading, HStack, Span, Stack } from '@lib';
import { Link } from '@modules/Elements';

interface IDocsSource {
	gitSource?: string;
	gitDemo?: string;
}

const DocsSource = (props: IDocsSource) => (
	<Stack className="mt-6">
		<Heading level="4" className="font-semibold" text="Source" />

		<HStack className="mt-2 gap-x-1.5">
			{props.gitSource ? (
				<Link to={props.gitSource} target="_blank" className="text-lg">
					Source
				</Link>
			) : null}
			{props.gitDemo ? (
				<HStack className="gap-x-1.5">
					<Span>•</Span>
					<Link to={props.gitDemo} target="_blank" className="text-lg">
						Demo
					</Link>
				</HStack>
			) : null}
		</HStack>
	</Stack>
);

export default DocsSource;
