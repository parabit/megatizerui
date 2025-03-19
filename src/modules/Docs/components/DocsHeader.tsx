import { GIT_REPO_URL, NPM_PCKG_URL } from '@constants';
import { HStack, Span } from '@lib';
import { GitHubIcon, Link, NPMIcon, ThemeWidgetSwitch } from '@modules/Elements';

const DocsHeader = () => {
	return (
		<HStack className="fixed z-50 w-full h-16 px-2 md:px-12 2xl:px-72 items-center justify-end md:justify-between">
			<Link to="/megatizerui" className="hidden md:flex">
				<Span className="text-2xl font-bold gradient-text-logo">megatizerui </Span>
				<Span className="text-2xl font-bold">🚀</Span>
			</Link>

			<HStack className="items-center gap-x-4">
				<ThemeWidgetSwitch />

				<HStack className="items-center gap-x-1 border-l border-neutral-400 dark:border-neutral-600 !pl-3">
					<Link to={GIT_REPO_URL} target="_blank">
						<GitHubIcon className="!text-neutral-400 dark:!text-neutral-600 hover:!text-primary" />
					</Link>
					<Link to={NPM_PCKG_URL} target="_blank">
						<NPMIcon className="!text-neutral-400 dark:!text-neutral-600 hover:!text-rose-900" />
					</Link>
				</HStack>
			</HStack>
		</HStack>
	);
};

export default DocsHeader;
