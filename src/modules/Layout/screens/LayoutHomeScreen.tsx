import { Stack } from '@lib';

import LayoutBrand from '../components/LayoutBrand';
import LayoutButtons from '../components/LayoutButtons';

export const LayoutHomeScreen = () => (
	<Stack className="max-w-[1152px] w-full overflow-x-hidden overflow-y-auto gap-y-20 p-6 md:px-12 pt-32 2xl:pt-64 md:pb-24 md:pl-32 h-full">
		<LayoutBrand />
		<LayoutButtons />
	</Stack>
);
