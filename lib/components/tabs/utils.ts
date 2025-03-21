import { ReactNode } from 'react';

////////////////////////////////////

export interface ITab {
	index?: number;
	onChange?: (index: number) => void;
	active?: boolean;
	children: ReactNode;
}

export interface ITabList {
	index: number;
	onChange: (index: number) => void;
	children: ReactNode;
	className?: string;
}

////////////////////////////////////

export interface IPanel {
	active?: boolean;
	children: ReactNode;
}

export interface IPanelList {
	index: number;
	children: ReactNode;
}

////////////////////////////////////

export interface ITabs {
	className?: string;
	children: ReactNode;
}
