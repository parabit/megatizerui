import { GIT_REPO_URL } from '@constants';
import { cn, HStack, Span, Stack } from '@lib';
import { Link } from '@modules/Elements';

const DocsHomeScreen = () => (
	<Stack className="w-full overflow-x-hidden overflow-y-auto gap-y-20 p-12 pt-32 md:pb-24">
		<Brand />
		<Buttons />
	</Stack>
);

export default DocsHomeScreen;

const Brand = () => (
	<Stack>
		<Span className="!text-primary text-6xl font-bold">megatizerui 🚀</Span>
		<Span className="!text-dark dark:!text-white text-4xl font-bold mt-6 max-w-2xl">
			a ui components library for React, based on TypeScript + Tailwind CSS
		</Span>
		<Span className="!text-muted-light dark:!text-muted-dark text-xl font-medium mt-2">
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
	<HStack className="gap-x-3">
		<Link
			to="/"
			//   to={getFirstComponentUrl()}
			className={cn(
				'rounded-full px-5 pt-2.5 pb-3 font-semibold !text-white hover:!no-underline dark:!text-white',
				'!bg-primary hover:!bg-primary/80',
			)}
		>
			Get started
		</Link>
		<Link
			to={GIT_REPO_URL}
			target="_blank"
			className={cn(
				'rounded-full px-5 pt-2.5 pb-3 font-semibold !text-white hover:!no-underline dark:!text-white',
				'bg-slate-500 hover:bg-slate-500/80',
			)}
		>
			View on GitHub
		</Link>
	</HStack>
);

// const getFirstComponentUrl = (): string => {
//   if (docsCategories[1]?.items) {
//     return `${docsCategories[0]?.url}/${docsCategories[1]?.url}/${docsCategories[1]?.items[0]?.url}`;
//   }

//   return "/test";
// };
