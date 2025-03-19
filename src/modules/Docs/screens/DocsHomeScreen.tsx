import { GIT_REPO_URL } from '@constants';
import { cn, Div, Span, Stack } from '@lib';
import { Link } from '@modules/Elements';

const DocsHomeScreen = () => (
	<Stack className="w-full overflow-x-hidden overflow-y-auto gap-y-20 p-6 md:px-12 pt-32 2xl:pt-64 md:pb-24 md:pl-32">
		<Brand />
		<Buttons />
	</Stack>
);

export default DocsHomeScreen;

const Brand = () => (
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

const Buttons = () => (
	<Div className="gap-3 flex flex-row flex-wrap justify-center sm:justify-start">
		<Link
			to="/"
			//   to={getFirstComponentUrl()}
			className={cn(
				'rounded-full px-5 pt-2.5 pb-3 font-semibold !text-white hover:!no-underline dark:!text-white flex flex-row items-center gap-x-2 min-w-40 justify-center',
				'!bg-primary hover:!bg-primary/80',
			)}
		>
			<Span className="text-white">Get started</Span>
		</Link>
		<Link
			to={GIT_REPO_URL}
			target="_blank"
			className={cn(
				'rounded-full px-5 pt-2.5 pb-3 font-semibold !text-white hover:!no-underline dark:!text-white flex flex-row items-center gap-x-2 min-w-40 justify-center',
				'bg-slate-500 hover:bg-slate-500/80',
			)}
		>
			<Span className="text-white">View on GitHub</Span>
		</Link>
	</Div>
);

// const getFirstComponentUrl = (): string => {
//   if (docsCategories[1]?.items) {
//     return `${docsCategories[0]?.url}/${docsCategories[1]?.url}/${docsCategories[1]?.items[0]?.url}`;
//   }

//   return "/test";
// };
