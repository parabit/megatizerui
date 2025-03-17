import { Div, Stack } from '@lib';
import { Link, ThemeWidgetSwitch } from '@modules/Elements';

const DocsASide = () => (
	<Stack className="bg-card-bg-light dark:bg-card-bg-dark relitive flex-2 overflow-y-auto border-r border-r-border-light dark:border-r-border-dark justify-between px-8 max-w-[240px]">
		<Div className="flex sticky top-0 min-h-16 items-center justify-start border-b border-b-border-light dark:border-b-border-dark">
			<Link to="/test" className="text-primary font-bold text-xl">
				megatizerui 🚀
			</Link>
		</Div>

		<Div className="flex min-h-16 min-w-max items-center justify-start border-t border-t-border-light dark:border-t-border-dark">
			<ThemeWidgetSwitch />
		</Div>
	</Stack>
);

export default DocsASide;
