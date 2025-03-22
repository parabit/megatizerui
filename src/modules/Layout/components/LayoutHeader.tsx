import { useLocation } from 'react-router';

import noise from '@assets/noise.png';
import { GIT_REPO_URL, NPM_PCKG_URL } from '@constants';
import { cn, Div, HStack } from '@lib';
import { GitHubIcon, Link, NPMIcon, ThemeWidgetSwitch } from '@modules/Elements';

const LayoutHeader = () => {
	const location = useLocation();

	return (
		<nav
			className={cn(
				'fixed z-50 w-full h-16 bg-bg-light dark:bg-bg-dark',
				location.pathname === '/'
					? ''
					: 'border-b border-neutral-300/80 dark:border-neutral-800',
			)}
		>
			<Div className="relative h-full w-full flex flex-row items-center justify-end">
				<HStack className="items-center gap-x-4 px-2 md:px-12 2xl:px-72 z-[51]">
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
