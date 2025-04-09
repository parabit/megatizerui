import { useEffect, useState } from 'react';

import { HStack, Span, Stack } from '@lib';

import LayoutBrand from '../components/LayoutBrand';
import LayoutButtons from '../components/LayoutButtons';

export const LayoutHomeScreen = () => {
	const [version, setVersion] = useState(undefined);

	useEffect(() => {
		fetch('https://registry.npmjs.org/@parabit/megatizerui/latest')
			.then((res) => res.json())
			.then((res) => setVersion(res?.version));
	}, []);

	return (
		<Stack className="max-w-[1152px] w-full overflow-x-hidden overflow-y-auto p-6 md:px-12 pt-32 2xl:pt-64 md:pb-12 md:pl-32 h-full justify-between">
			<Stack className="gap-y-16">
				<LayoutBrand />
				<LayoutButtons />
			</Stack>

			<HStack className="items-center gap-x-3 justify-center">
				<Span className="text-sm text-muted-light dark:text-muted-dark">
					Docs version: {APP_VERSION}
				</Span>
				<Span className="text-sm text-muted-light dark:text-muted-dark">|</Span>
				<Span className="text-sm text-muted-light dark:text-muted-dark">
					NPM version: {version}
				</Span>
			</HStack>
		</Stack>
	);
};
