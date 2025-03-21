import { Link, useLocation } from 'react-router';

import { cn, Divider, Span, Stack } from '@lib';

import { router } from '..';

const DocsASide = () => {
	const location = useLocation();

	return (
		<aside className="docs-aside bg-neutral-100 dark:bg-card-bg-dark">
			<Stack className="sticky top-0 h-16 justify-between w-full bg-neutral-100 dark:bg-card-bg-dark pt-4">
				<Link to="/" className="hidden md:flex flex-row gap-x-1 sidebar-logo-shadow ">
					<Span className="text-2xl font-bold gradient-text-logo ">megatizerui</Span>
					<Span className="text-2xl font-bold">🚀</Span>
				</Link>
				<Divider className="mt-4 border-neutral-300 dark:border-neutral-700/50" />
			</Stack>

			<Stack>
				{router.map((cat, i) => (
					<Stack key={i} className="pt-2.5">
						<Span className="py-1 text-sm font-bold">{cat.title}</Span>

						{cat.pages.map((page, j) => (
							<Link key={j} to={`/${page.url}`} className=" py-1 min-h-8 group">
								<Span
									variant="muted"
									className={cn(
										'text-sm font-medium group-hover:!text-primary-blue',
										location.pathname === `/${page.url}`
											? '!text-primary-blue dark:!text-primary-blue'
											: '',
									)}
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
};

export default DocsASide;
