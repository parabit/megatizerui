import { Fragment } from 'react/jsx-runtime';

import { COLOR_PALETTE } from '@constants';
import { cn, Div, Span, Stack } from '@lib';

import DocsHeader from '../components/DocsHeader';
import DocsPagination from '../components/DocsPagination';

interface IDocsColorPaletteScreen {
	prevPage?: {
		url: string;
		title: string;
	};
	nextPage?: {
		url: string;
		title: string;
	};
}

const numbers = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

const DocsColorPaletteScreen = (props: IDocsColorPaletteScreen) => (
	<Stack className="w-full overflow-hidden p-4 sm:pl-12 sm:pt-8 pb-24 md:pr-24">
		<DocsHeader
			title="Color Palette"
			description="Цветовая палитра `megatizerui` для вашего проекта"
		/>

		<Div className="grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4 mt-6">
			<Header />

			{COLOR_PALETTE.map((el, index) => (
				<Row key={index} {...el} />
			))}
		</Div>

		<DocsPagination {...props} />
	</Stack>
);

export default DocsColorPaletteScreen;

const Header = () => (
	<Fragment>
		<Div className="sticky">&nbsp;</Div>

		<Div className="sticky col-start-2 grid grid-cols-11 justify-center items-center gap-1.5 font-medium max-sm:py-1 sm:gap-4 text-center">
			{numbers.map((value, index) => (
				<Span key={index}>{value}</Span>
			))}
		</Div>
	</Fragment>
);

interface IRow {
	variant: string;
	colors: string[];
}

const Row = (props: IRow) => (
	<Fragment>
		<Span className="font-medium sm:pr-12">{props.variant}</Span>

		<Div className="grid grid-cols-11 gap-1.5 sm:gap-4">
			{props.colors.map((value, index) => (
				<Div key={index} className={cn(value, 'w-12 h-12 rounded-xl mx-auto')} />
			))}
		</Div>
	</Fragment>
);
