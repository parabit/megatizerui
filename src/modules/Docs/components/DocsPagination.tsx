import { Link } from 'react-router';

import { cn, Div, Divider, Span, Stack } from '@lib';

interface IDocsPagination {
	prevPage?: {
		url: string;
		title: string;
	};
	nextPage?: {
		url: string;
		title: string;
	};
}

const DocsPagination = ({ prevPage, nextPage }: IDocsPagination) => (
	<Stack className="mt-6">
		<Divider />

		<Div
			className={cn(
				'mt-6 flex flex-col gap-y-3 sm:flex-row',
				prevPage && !nextPage
					? 'justify-start'
					: !prevPage && nextPage
						? 'justify-end'
						: 'justify-between',
			)}
		>
			{prevPage ? (
				<Link
					to={`/${prevPage.url}`}
					className="flex flex-col border border-border-light dark:border-border-dark px-4 py-1.5 rounded-lg min-w-[49%] hover:border-primary"
				>
					<Span variant="muted" className="font-semibold text-sm">
						Previous page
					</Span>
					<Span variant="primary" className="text-lg font-semibold">
						{prevPage.title}
					</Span>
				</Link>
			) : null}

			{nextPage ? (
				<Link
					to={`/${nextPage.url}`}
					className="flex flex-col items-end border border-border-light dark:border-border-dark px-4 py-1.5 rounded-lg min-w-[49%] hover:border-primary"
				>
					<Span variant="muted" className="font-semibold text-sm">
						Next page
					</Span>
					<Span variant="primary" className="text-lg font-semibold">
						{nextPage.title}
					</Span>
				</Link>
			) : null}
		</Div>
	</Stack>
);

export default DocsPagination;
