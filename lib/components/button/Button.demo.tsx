// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { Fragment } from 'react';

import { Div } from '../div';
import { Span } from '../span';
import { Button } from './Button';
import { buttonColor, buttonSize, buttonVariant } from './utils';

export const DemoVariantsAndColors = () => (
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		{Object.keys(buttonVariant).map((variant, v) => (
			<Div
				key={v}
				className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]"
			>
				{Object.keys(buttonColor).map((color, c) => (
					<Fragment key={c}>
						<Span text={color} />
						<Button
							text={variant}
							variant={variant as keyof typeof buttonVariant}
							color={color as keyof typeof buttonColor}
						/>
					</Fragment>
				))}
			</Div>
		))}
	</Div>
);

DemoVariantsAndColors.html = `const DemoColors = () => (
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		{Object.keys(buttonVariant).map((variant, v) => (
			<Div
				key={v}
				className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]"
			>
				{Object.keys(buttonColor).map((color, c) => (
					<Fragment key={c}>
						<Span text={color} />
						<Button
							text={variant}
							variant={variant as keyof typeof buttonVariant}
							color={color as keyof typeof buttonColor}
						/>
					</Fragment>
				))}
			</Div>
		))}
	</Div>
);`;

export const DemoSize = () => (
	<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
		{Object.keys(buttonSize).map((size, i) => (
			<Fragment key={i}>
				<Span text={size} />
				<Button text={size} size={size as keyof typeof buttonSize} />
			</Fragment>
		))}
	</Div>
);

DemoSize.html = `const DemoSize = () => (
	<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
		{Object.keys(buttonSize).map((size, i) => (
			<Fragment key={i}>
				<Span text={size} />
				<Button text={size} size={size as keyof typeof buttonSize} />
			</Fragment>
		))}
	</Div>
);`;

export const DemoLoadingAndDisabled = () => (
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			{Object.keys(buttonVariant).map((variant, i) => (
				<Fragment key={i}>
					<Span text="loading" />
					<Button loading text={variant} variant={variant as keyof typeof buttonVariant} />
				</Fragment>
			))}
		</Div>
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			{Object.keys(buttonVariant).map((variant, i) => (
				<Fragment key={i}>
					<Span text="disabled" />
					<Button disabled text={variant} variant={variant as keyof typeof buttonVariant} />
				</Fragment>
			))}
		</Div>
	</Div>
);

DemoLoadingAndDisabled.html = `const DemoLoadingAndDisabled = () => (
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			{Object.keys(buttonVariant).map((variant, i) => (
				<Fragment key={i}>
					<Span text="loading" />
					<Button loading text={variant} variant={variant as keyof typeof buttonVariant} />
				</Fragment>
			))}
		</Div>
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			{Object.keys(buttonVariant).map((variant, i) => (
				<Fragment key={i}>
					<Span text="disabled" />
					<Button disabled text={variant} variant={variant as keyof typeof buttonVariant} />
				</Fragment>
			))}
		</Div>
	</Div>
);`;
