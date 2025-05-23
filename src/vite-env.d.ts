/// <reference types="vite/client" />

declare const APP_VERSION: string;

type TypeDocsProps = {
	name: string;
	type?: string | string[];
	default?: string;
	description?: string;
	required?: boolean;
};

type TypeDocsArrayProps = Array<TypeDocsProps>;

type TypeDocsDemo = {
	title: string;
	description?: string;
	jsx?: () => JSX.Element;
	node?: ReactNode;
	html?: string;
	props?: TypeDocsArrayProps;
	propsTitle?: string;
};

type TypeDocsArrayDemo = Array<TypeDocsDemo>;

type TypeDocsComponent = {
	url: string;
	title: string;
	description: string;
	demos?: TypeDocsArrayDemo;
	props?: TypeDocsArrayProps;
	propsTitle?: string;
	gitSource?: string;
	gitDemo?: string;
};

type TypeDocsComponent = {
	url: string;
	title: string;
	description: string;
	git?: string;
	demos?: TypeDocsArrayDemo;
	props?: TypeDocsArrayProps;
};

type TypeRoute = {
	title: string;
	pages: TypeDocsComponent[];
};
