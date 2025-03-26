/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { useState } from 'react';

import { Card } from '../card';
import { Span } from '../span';
import { Tabs } from './Tabs';

const Demo = () => {
	const [index, setIndex] = useState(0);

	const handleChangeIndex = (value: number) => setIndex(value);

	return (
		<Tabs>
			<Tabs.TabList index={index} onChange={handleChangeIndex} className="w-full md:w-fit">
				<Tabs.Tab>First tab</Tabs.Tab>
				<Tabs.Tab>Second tab</Tabs.Tab>
				<Tabs.Tab>Third tab</Tabs.Tab>
			</Tabs.TabList>

			<Tabs.PanelList index={index}>
				<Tabs.Panel>
					<Card className="w-full items-start justify-start !p-6">
						<Span>First tab</Span>
					</Card>
				</Tabs.Panel>

				<Tabs.Panel>
					<Card className="w-full items-start justify-start !p-6">
						<Span>Second tab</Span>
					</Card>
				</Tabs.Panel>

				<Tabs.Panel>
					<Card className="w-full items-start justify-start !p-6">
						<Span>Third tab</Span>
					</Card>
				</Tabs.Panel>
			</Tabs.PanelList>
		</Tabs>
	);
};

Demo.html = `const Demo = () => {
	const [index, setIndex] = useState(0);

	const handleChangeIndex = (value: number) => setIndex(value);

	return (
		<Tabs>
			<Tabs.TabList index={index} onChange={handleChangeIndex} className="w-full md:w-fit">
				<Tabs.Tab>First tab</Tabs.Tab>
				<Tabs.Tab>Second tab</Tabs.Tab>
				<Tabs.Tab>Third tab</Tabs.Tab>
			</Tabs.TabList>

			<Tabs.PanelList index={index}>
				<Tabs.Panel>
					<Card className="w-full items-start justify-start !p-6">
						<Span>First tab</Span>
					</Card>
				</Tabs.Panel>

				<Tabs.Panel>
					<Card className="w-full items-start justify-start !p-6">
						<Span>Second tab</Span>
					</Card>
				</Tabs.Panel>

				<Tabs.Panel>
					<Card className="w-full items-start justify-start !p-6">
						<Span>Third tab</Span>
					</Card>
				</Tabs.Panel>
			</Tabs.PanelList>
		</Tabs>
	);
};`;

export { Demo };
