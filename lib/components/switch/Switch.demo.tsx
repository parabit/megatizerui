/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React, { useState } from 'react';

import { Switch } from './Switch';

const Demo = () => {
	const [value, onChange] = useState(false);

	return <Switch value={value} onChange={onChange} />;
};

Demo.html = `const Demo = () => {
	const [value, onChange] = useState(false);

	return <Switch value={value} onChange={onChange} />;
};`;

export { Demo };
