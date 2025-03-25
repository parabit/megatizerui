import { AvatarPage } from '@lib/components/avatar/avatar.docs';
import { ButtonPage } from '@lib/components/button/button.docs';
import { CardPage } from '@lib/components/card/card.docs';
import { DivPage } from '@lib/components/div/div.docs';
import { DividerPage } from '@lib/components/divider/divider.docs';
import { DropdownPage } from '@lib/components/dropdown/dropdown.docs';
import { FormPage } from '@lib/components/form/form.docs';
import { HeadingPage } from '@lib/components/heading/heading.docs';
import { HStackPage } from '@lib/components/hstack/hstack.docs';
import { ImagePage } from '@lib/components/image/image.docs';
import { InputsPage } from '@lib/components/input/inputs.docs';
import { StackPage } from '@lib/components/stack/stack.docs';

export const pagesComponents: TypeDocsComponent[] = [
	AvatarPage,
	ButtonPage,
	DivPage,
	CardPage,
	DividerPage,
	DropdownPage,
	FormPage,
	HeadingPage,
	HStackPage,
	ImagePage,
	InputsPage,
	{
		url: 'loader',
		title: 'Loader',
		description: '',
	},
	{
		url: 'pressable',
		title: 'Pressable',
		description: '',
	},
	{
		url: 'span',
		title: 'Span',
		description: '',
	},
	{
		url: 'spinner',
		title: 'Spinner',
		description: '',
	},
	StackPage,
	{
		url: 'switch',
		title: 'Switch',
		description: '',
	},
	{
		url: 'tabs',
		title: 'Tabs',
		description: '',
	},
];
