import { useLocation } from 'react-router';

import { GIT_REPO_URL, NPM_PCKG_URL } from '@constants';
import { cn, HStack } from '@lib';
import { GitHubIcon, Link, NPMIcon, ThemeWidgetSwitch } from '@modules/Elements';

const LayoutHeader = () => {
	const location = useLocation();

	return (
		<nav
			className={cn(
				'flex flex-row fixed z-50 w-full h-16 px-2 md:px-12 2xl:px-72 items-center justify-end',
				location.pathname === '/megatizerui'
					? ''
					: 'border-b border-neutral-300/80 dark:border-neutral-800',
			)}
		>
			<HStack className="items-center gap-x-4">
				<ThemeWidgetSwitch />

				<HStack className="items-center gap-x-1 border-l border-neutral-300/80 dark:border-neutral-700 !pl-3">
					<Link to={GIT_REPO_URL} target="_blank">
						<GitHubIcon className="!text-neutral-400 dark:!text-neutral-400 hover:!text-neutral-900 hover:dark:!text-neutral-200" />
					</Link>
					<Link to={NPM_PCKG_URL} target="_blank">
						<NPMIcon className="!text-neutral-400 dark:!text-neutral-400 hover:!text-neutral-900 hover:dark:!text-neutral-200" />
					</Link>
				</HStack>
			</HStack>
		</nav>
	);
};

export default LayoutHeader;
