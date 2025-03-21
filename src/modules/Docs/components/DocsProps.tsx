import Markdown from 'react-markdown';

import { cn, Heading, Stack } from '@lib';

const styleBorder = 'border border-neutral-300 dark:border-neutral-700';

const PropsComponentKeys = ['name', 'required', 'type', 'default', 'description'];

const DocsProps = (props: { props: TypeDocsArrayProps }) => {
	const items = props.props.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<Stack className="mt-6 gap-y-3">
			<Heading level="4" className="mb-4 font-bold">
				Props
			</Heading>

			<table className={cn('border-collapse', styleBorder)}>
				<PropsHead />

				<tbody>
					{items.map((tr, i) => (
						<PropsRow key={i} {...tr} />
					))}
				</tbody>
			</table>
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
	if (Array.isArray(value)) {
		return (
			<td className={cn('code-primary px-4 py-2 text-sm font-normal', styleBorder, className)}>
				<Markdown>{value.map((el) => '`' + el + '`').join(' | ')}</Markdown>
			</td>
		);
	}

	return (
		<td className={cn('code-primary px-4 py-2 text-sm font-normal', styleBorder, className)}>
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
						'px-4 py-2 text-start font-bold text-gray-500 capitalize dark:text-neutral-500',
						styleBorder,
					)}
				>
					{el}
				</th>
			))}
		</tr>
	</thead>
);
