import { useEffect, useState } from 'react';

import { HStack, Span, Stack } from '@lib';

import LayoutBrand from '../components/LayoutBrand';
import LayoutButtons from '../components/LayoutButtons';

export const LayoutHomeScreen = () => {
	const [npm, setNPM] = useState('-.-.-');
	const [gitHub, setGitHub] = useState('-.-.-');

	useEffect(() => {
		fetch('https://registry.npmjs.org/@parabit/megatizerui/latest')
			.then((res) => res.json())
			.then((res) => setNPM(res?.version));

		fetch('https://raw.githubusercontent.com/parabit/megatizerui/HEAD/package.json')
			.then((res) => res.json())
			.then((res) => setGitHub(res?.version));
	}, []);

	return (
		<Stack className="max-w-[1152px] w-full overflow-x-hidden overflow-y-auto p-6 md:px-12 pt-32 2xl:pt-64 md:pb-12 md:pl-32 h-full justify-between">
			<Stack className="gap-y-16">
				<LayoutBrand />
				<LayoutButtons />
			</Stack>

			<HStack className="items-center gap-x-3 justify-center">
				<Span className="text-sm" variant="muted">
					Docs version: {APP_VERSION}
					{import.meta.env.DEV ? ' (dev)' : ''}
				</Span>
				<Span className="text-sm" variant="muted" text="|" />
				<Span className="text-sm" variant="muted">
					GitHub version: {gitHub}
				</Span>
				<Span className="text-sm" variant="muted" text="|" />
				<Span className="text-sm" variant="muted">
					NPM version: {npm}
				</Span>
			</HStack>
		</Stack>
	);
};
