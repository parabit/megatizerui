import { ReactNode } from 'react';

import { cn } from '../../utils';
import { Div } from '../div';

interface ISwitch {
	value: boolean;
	onChange: (value: boolean) => void;
	className?: string;
	iconToggler?: ReactNode;
	iconChecked?: ReactNode;
	iconUnChecked?: ReactNode;
}

export const Switch = (props: ISwitch) => (
	<Div
		className={cn('switch', { checked: props.value }, props.className)}
		onClick={() => props.onChange(!props.value)}
	>
		{props?.iconChecked ? <Div className="switch-icon-checked">{props?.iconChecked}</Div> : null}
		{props?.iconUnChecked ? (
			<Div className="switch-icon-unchecked">{props?.iconUnChecked}</Div>
		) : null}

		<Div className={cn('switch-toggler', { checked: props.value })}>{props.iconToggler}</Div>
	</Div>
);
