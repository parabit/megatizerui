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
				'!py-1 w-full',

				props.active ? '!bg-card-bg-light' : '!bg-neutral-200', //bg light
				props.active ? '!text-neutral-600' : '!text-neutral-400', //text light

				props.active ? 'dark:!bg-neutral-600' : 'dark:!bg-neutral-800', //bg dark
				props.active ? 'dark:!text-neutral-200' : 'dark:!text-neutral-500', //text dark

				props.active ? 'hover:!text-neutral-900' : 'hover:!text-neutral-500', // hover text
				props.active ? 'dark:hover:!text-neutral-400' : 'dark:hover:!text-neutral-400', // hover text dark
			)}
		>
			{props.children}
		</Button>
	);
};

const TabList = (props: ITabList) => (
	<HStack
		className={cn(
			'dark:bg-neutral-800 gap-x-1 rounded-xl bg-neutral-200 p-0.5 w-fit',
			props.className,
		)}
	>
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
	<Stack className={cn('gap-y-3 w-auto', props.className)}>{props.children}</Stack>
);

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.PanelList = PanelList;
Tabs.Panel = Panel;

export { Tabs };
