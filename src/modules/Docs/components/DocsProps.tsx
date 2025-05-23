import Markdown from 'react-markdown';

import { cn, Div, Heading, Stack } from '@lib';

const styleBorder = 'border border-neutral-300 dark:border-neutral-700';

const PropsComponentKeys = ['name', 'required', 'type', 'default', 'description'];

const DocsProps = (props: { props: TypeDocsArrayProps; title?: string }) => {
	const items = props.props.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<Stack className="mt-6">
			<Heading level="1" className="font-bold">
				{props.title || 'Props'}
			</Heading>

			<Div className="overflow-x-auto w-full mt-4">
				<table className={cn('border-collapse w-full', styleBorder)}>
					<PropsHead />

					<tbody>
						{items.map((tr, i) => (
							<PropsRow key={i} {...tr} />
						))}
					</tbody>
				</table>
			</Div>
		</Stack>
	);
};

export default DocsProps;

type TypePropsTD = {
	value?: string;
	className?: string;
	type?: string;
};

const PropsTD = ({ value, className, type }: TypePropsTD) => {
	const style =
		'code-primary px-3 py-1.5 text-sm font-normal max-w-xs !text-wrap leading-7 text-light dark:text-dark';

	if (Array.isArray(value)) {
		return (
			<td className={cn(style, styleBorder, className)}>
				<Markdown>{value.map((el) => '`' + el + '`').join(' ')}</Markdown>
			</td>
		);
	}

	return (
		<td className={cn(style, styleBorder, className)}>
			<Markdown>{type === 'type' ? '`' + value + '`' : value}</Markdown>
		</td>
	);
};

const PropsRow = (props: TypeDocsProps) => (
	<tr className="odd:bg-neutral-200 dark:odd:bg-neutral-800">
		{PropsComponentKeys.map((el: string, i) => {
			if (el === 'required') {
				return <PropsTD key={i} value={props?.required ? 'true' : '-'} />;
			} else {
				return (
					<PropsTD
						key={i}
						type={el}
						value={props[el as keyof TypeDocsProps] as string}
						className={el === 'type' ? 'whitespace-nowrap' : ''}
					/>
				);
			}
		})}
	</tr>
);

const PropsHead = () => (
	<thead>
		<tr>
			{PropsComponentKeys.map((el, i) => (
				<th
					key={i}
					scope="col"
					className={cn(
						'px-4 py-2 text-start font-semibold text-muted-light capitalize dark:text-muted-dark',
						styleBorder,
					)}
				>
					{el === 'required' ? 'req' : el}
				</th>
			))}
		</tr>
	</thead>
);
