import { Children, cloneElement } from 'react';

import { cn } from '../../utils';
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
		<button onClick={handleChange} className={props.active ? 'tab active' : 'tab'}>
			{props.children}
		</button>
	);
};

const TabList = (props: ITabList) => (
	<HStack className={cn('tab-list', props.className)}>
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
	<Stack className={cn('tabs', props.className)}>{props.children}</Stack>
);

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.PanelList = PanelList;
Tabs.Panel = Panel;

export { Tabs };
