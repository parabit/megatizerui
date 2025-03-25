/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Div } from './Div';

const Demo = () => <Div className="min-h-8 w-full p-4 bg-primary-blue">Это Div</Div>;

Demo.html = `const Demo = () => <Div className="min-h-8 w-full p-4 bg-primary-blue">Это Div</Div>;`;

export { Demo };
