/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { useState } from 'react';

import { Div } from '../div';
import { Span } from '../span';
import { Switch } from './Switch';

const Demo = () => {
	const [value1, onChange1] = useState(false);
	const [value2, onChange2] = useState(false);
	const [value3, onChange3] = useState(false);

	const iconSun = <Span text="☀️" className="text-xs" />;
	const iconMoon = <Span text="🌙" className="text-xs" />;

	return (
		<Div className="flex flex-row flex-wrap gap-3">
			<Switch value={value1} onChange={onChange1} />
			<Switch
				value={value2}
				onChange={onChange2}
				iconChecked={iconMoon}
				iconUnChecked={iconSun}
			/>
			<Switch value={value3} onChange={onChange3} iconToggler={value3 ? iconMoon : iconSun} />
		</Div>
	);
};

Demo.html = `const Demo = () => {
	const [value1, onChange1] = useState(false);
	const [value2, onChange2] = useState(false);
	const [value3, onChange3] = useState(false);

	const iconSun = <Span text="☀️" className="text-xs" />;
	const iconMoon = <Span text="🌙" className="text-xs" />;

	return (
		<Div className="flex flex-row flex-wrap gap-3">
			<Switch value={value1} onChange={onChange1} />
			<Switch
				value={value2}
				onChange={onChange2}
				iconChecked={iconMoon}
				iconUnChecked={iconSun}
			/>
			<Switch value={value3} onChange={onChange3} iconToggler={value3 ? iconMoon : iconSun} />
		</Div>
	);
};
`;

export { Demo };
