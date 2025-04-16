// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Div } from '../div';
import { Span } from '../span';
import { Button } from './Button';

const Demo = () => (
	<Div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between flex-wrap">
		{/* solid, md, primary */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="solid, md, primary" />
			<Span text="normal" className="mr-6 text-right" />
			<Button size="md" text="ДАЛЕЕ" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled />
		</Div>

		{/* solid, md, secondary */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="solid, md, secondary" />
			<Span text="normal" className="mr-6 text-right" />
			<Button size="md" text="ДАЛЕЕ" color="secondary" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading color="secondary" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled color="secondary" />
		</Div>

		{/* solid, md, muted */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="solid, md, muted" />
			<Span text="normal" className="mr-6 text-right" />
			<Button size="md" text="ДАЛЕЕ" color="muted" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading color="muted" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled color="muted" />
		</Div>

		{/* ghost, md, muted */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="ghost, md, muted" />
			<Span text="normal" />
			<Button size="md" text="ДАЛЕЕ" variant="ghost" color="muted" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading variant="ghost" color="muted" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled variant="ghost" color="muted" />
		</Div>

		{/* ghost, md, primary */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="ghost, md, primary" />
			<Span text="normal" />
			<Button size="md" text="ДАЛЕЕ" variant="ghost" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading variant="ghost" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled variant="ghost" />
		</Div>

		{/* ghost, md, secondary */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="ghost, md, secondary" />
			<Span text="normal" />
			<Button size="md" text="ДАЛЕЕ" variant="ghost" color="secondary" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading variant="ghost" color="secondary" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled variant="ghost" color="secondary" />
		</Div>

		{/* outline, md, primary" */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="outline, md, primary" />
			<Span text="normal" />
			<Button size="md" text="ДАЛЕЕ" variant="outline" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading variant="outline" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled variant="outline" />
		</Div>

		{/* outline, md, secondary */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="outline, md, secondary" />
			<Span text="normal" />
			<Button size="md" text="ДАЛЕЕ" variant="outline" color="secondary" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading variant="outline" color="secondary" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled variant="outline" color="secondary" />
		</Div>

		{/* outline, md, muted */}
		<Div className="grid grid-cols-[20%_auto] gap-3 items-center w-full md:max-w-[45%]">
			<Div>&nbsp;</Div>
			<Span className="font-semobild text-center" text="outline, md, muted" />
			<Span text="normal" />
			<Button size="md" text="ДАЛЕЕ" variant="outline" color="muted" />
			<Span text="loading" />
			<Button size="md" text="ДАЛЕЕ" loading variant="outline" color="muted" />
			<Span text="disabled" />
			<Button size="md" text="ДАЛЕЕ" disabled variant="outline" color="muted" />
		</Div>
	</Div>
);

Demo.html = `const Demo = () => (
	<Div className="flex flex-col md:flex-row gap-x-3 gap-y-6 w-full">
		{Object.keys(EnumButtonVariants).map((variant, index) => (
			<Button
				key={index}
				text={variant}
				onClick={() => alert(variant)}
				variant={variant as VariantProps<typeof buttonVariants>['variant']}
			/>
		))}
	</Div>
);`;

export { Demo };
