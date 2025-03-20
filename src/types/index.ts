import { JSX } from 'react';

export type TypePage = {
	url: string;
	title: string;
	description?: string;
	Component?: () => JSX.Element;
};

export type TypeRoute = {
	title: string;
	pages: TypePage[];
};

export type TypeRouter = TypeRoute[];
