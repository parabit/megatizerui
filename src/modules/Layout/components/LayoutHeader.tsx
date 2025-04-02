import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router';

import noise from '@assets/noise.png';
import { GIT_REPO_URL, NPM_PCKG_URL } from '@constants';
import { cn, Div, HStack, Pressable } from '@lib';
import { GitHubIcon, Link, NPMIcon, ThemeWidgetSwitch } from '@modules/Elements';

const LayoutHeader = () => {
	const pathname = useLocation().pathname;

	const isHome = pathname === '/';

	const handleToggleASide = () => {
		document.body.dispatchEvent(new CustomEvent('toggle-aside'));
	};

	return (
		<nav
			className={cn(
				'fixed z-50 w-full h-16 bg-bg-light dark:bg-bg-dark',
				isHome ? '' : 'border-b border-neutral-300/80 dark:border-neutral-800',
			)}
		>
			<Div
				className={cn(
					'relative h-full w-full flex flex-row items-center justify-between sm:justify-end',
					isHome ? '!justify-end' : '',
				)}
			>
				{isHome ? null : (
					<Pressable onClick={handleToggleASide} className="min-[960px]:hidden ml-4 z-[100]">
						<Bars3CenterLeftIcon className="w-8 text-muted-light dark:text-muted-dark" />
					</Pressable>
				)}

				<HStack className="items-center gap-x-4 px-2 md:px-12 2xl:px-72 z-[51]">
					<ThemeWidgetSwitch />

					<HStack className="items-center gap-x-1 border-l border-border-light/80 dark:border-border-dark !pl-3">
						<Link to={GIT_REPO_URL} target="_blank">
							<GitHubIcon className="!text-neutral-400 dark:!text-neutral-400 hover:!text-neutral-900 hover:dark:!text-neutral-200" />
						</Link>
						<Link to={NPM_PCKG_URL} target="_blank">
							<NPMIcon className="!text-neutral-400 dark:!text-neutral-400 hover:!text-neutral-900 hover:dark:!text-neutral-200" />
						</Link>
					</HStack>
				</HStack>

				<Div
					style={{
						backgroundImage: `url(${noise})`,
						backgroundRepeat: 'repeat',
						backgroundSize: '109px',
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: 0,
						opacity: '0.06',
					}}
				/>
			</Div>
		</nav>
	);
};

export default LayoutHeader;
