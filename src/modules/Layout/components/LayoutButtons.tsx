import { GIT_REPO_URL } from '@constants';
import { cn, Div, Span } from '@lib';
import { router } from '@modules/Docs';
import { Link } from '@modules/Elements';

const LayoutButtons = () => (
	<Div className="gap-3 flex flex-row flex-wrap justify-center sm:justify-start">
		<Link
			to={router[0].pages[0].url}
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

export default LayoutButtons;
