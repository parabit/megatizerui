import { Children, cloneElement } from 'react';

import { cn } from '../../utils';
import { Button } from '../button';
import { Div } from '../div';
import { HStack } from '../hstack';
import { Stack } from '../stack';
import { IPanel, IPanelList, ITab, ITabList, ITabs } from './utils';

const Tab = (props: ITab) => {
	const handleChange = () => {
		if (!props.onChange) return;
		props.onChange(props.index || 0);
	};

	return (
		<Button
			variant="ghost"
			onClick={handleChange}
			className={cn(
				'!py-2', //padding

				props.active ? '!bg-neutral-100' : '!bg-neutral-200', //bg light
				props.active ? '!text-neutral-600' : '!text-neutral-400', //text light

				props.active ? 'dark:!bg-neutral-600' : 'dark:!bg-card-bg-dark', //bg dark
				props.active ? 'dark:!text-neutral-200' : 'dark:!text-neutral-500', //text dark

				'hover:!border',
				props.active ? 'hover:!border-neutral-300' : 'hover:!border-neutral-300', //hover light
				props.active ? 'dark:hover:!border-neutral-500' : 'dark:hover:!border-neutral-700', //hover dark
			)}
		>
			{props.children}
		</Button>
	);
};

const TabList = (props: ITabList) => (
	<HStack className="dark:bg-card-bg-dark gap-x-1 self-start rounded-xl bg-neutral-200 p-1">
		{Array.isArray(props.children) &&
			Children.map(props.children, (child, index) =>
				cloneElement(child, {
					index: index,
					onChange: props.onChange,
					active: index === props.index,
				}),
			)}
	</HStack>
);

const Panel = (props: IPanel) => {
	if (!props.active) return null;
	return <Div>{props.children}</Div>;
};

const PanelList = (props: IPanelList) => (
	<Div>
		{Array.isArray(props.children) &&
			Children.map(props.children, (child, index) =>
				cloneElement(child, { active: index === props.index }),
			)}
	</Div>
);

const Tabs = (props: ITabs) => (
	<Stack className={cn('gap-y-3', props.className)}>{props.children}</Stack>
);

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.PanelList = PanelList;
Tabs.Panel = Panel;

export { Tabs };
