import { Suspense } from 'react';
import { Link, Outlet } from 'react-router';

import { Div, Divider, Span, Stack } from '@lib';

import './docs.css';

import { router } from '.';

const DocsLayout = () => (
	<Div className="w-full h-full">
		<DocsASide />

		<Div className="docs-outlet">
			<Suspense>
				<Outlet />
			</Suspense>
		</Div>
	</Div>
);

export default DocsLayout;

const DocsASide = () => (
	<aside className="docs-aside bg-neutral-100 dark:bg-card-bg-dark">
		<Stack className="sticky top-0 h-16 justify-between w-full bg-neutral-100 dark:bg-card-bg-dark pt-4">
			<Link to="/megatizerui" className="hidden md:flex flex-row gap-x-1">
				<Span className="text-2xl font-bold gradient-text-logo">megatizerui</Span>
				<Span className="text-2xl font-bold">🚀</Span>
			</Link>
			<Divider className="mt-4 border-neutral-300 dark:border-neutral-700/50" />
		</Stack>

		<Stack className="">
			{router.map((cat, i) => (
				<Stack key={i} className="pt-2.5">
					<Span className="py-1 text-sm font-bold">{cat.title}</Span>

					{cat.pages.map((page, j) => (
						<Link key={j} to={`/megatizerui/${page.url}`} className=" py-1 min-h-8 group">
							<Span
								variant="muted"
								className="text-sm font-medium group-hover:!text-primary-blue"
							>
								{page.title}
							</Span>
						</Link>
					))}

					{i + 1 < router.length ? (
						<Divider className="border-neutral-300 dark:border-neutral-700/50 mt-6" />
					) : null}
				</Stack>
			))}
		</Stack>
	</aside>
);
