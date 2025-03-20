import { Span, Stack } from '@lib';
import { Link } from '@modules/Elements';

const LayoutBrand = () => (
	<Stack>
		<Span>
			<Span className="text-3xl md:text-6xl font-bold gradient-text-logo">megatizerui </Span>
			<Span className="text-2xl md:text-6xl font-bold">🚀</Span>
		</Span>
		<Span className="!text-dark dark:!text-white text-2xl md:text-4xl font-bold mt-6">
			UI Component Library for React
		</Span>
		<Span className="!text-dark dark:!text-white text-2xl md:text-4xl font-bold mt-1">
			Based on TypeScript + Tailwind CSS
		</Span>
		<Span className="!text-muted-light dark:!text-muted-dark text-xl font-medium mt-6">
			library of components of the{' '}
			<Link
				to="https://megatizer.ru/"
				target="_blank"
				className="!text-primary-pink hover:underline"
			>
				megatizer.ru
			</Link>
		</Span>
	</Stack>
);

export default LayoutBrand;
