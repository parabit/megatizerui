import { ReactNode } from 'react';

import { cn } from '../../utils';
import { Div } from '../div';
import { Span } from '../span';

interface ISwitch {
	value: boolean;
	onChange: (value: boolean) => void;
	className?: string;
	iconChecked?: ReactNode;
	iconUnChecked?: ReactNode;
}

export const Switch = (props: ISwitch) => (
	<Div
		className={cn('switch', { '!bg-switch-checked': props.value }, props.className)}
		onClick={() => props.onChange(!props.value)}
	>
		{props?.iconChecked ? <Div className="absolute left-2">{props?.iconChecked}</Div> : null}
		{props?.iconUnChecked ? <Div className="absolute right-2">{props?.iconUnChecked}</Div> : null}

		<Span className={cn('switch-toggler', { '!ml-6 !border-switch-checked': props.value })} />
	</Div>
);
