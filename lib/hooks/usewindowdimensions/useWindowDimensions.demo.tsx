/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';

import { Badge } from '../../components/badge';
import { Stack } from '../../components/stack/Stack';
import { useWindowDimensions } from './useWindowDimensions';

const Demo = () => {
	const { height, width, size, isMobile } = useWindowDimensions();

	return (
		<Stack className="gap-y-3 [&>td]:p-4">
			<table className="table-auto [&_td]:!p-2 text-light dark:text-dark">
				<tbody>
					<tr>
						<td>Height:</td>
						<td>
							<Badge text={height} variant="primary" />
						</td>
					</tr>
					<tr>
						<td>Width:</td>
						<td>
							<Badge text={width} variant="primary" />
						</td>
					</tr>

					<tr>
						<td>Size:</td>
						<td>
							<Badge text={size} variant="primary" />
						</td>
					</tr>

					<tr>
						<td>isMobile:</td>
						<td>
							<Badge text={isMobile.toString()} variant="primary" />
						</td>
					</tr>
				</tbody>
			</table>
		</Stack>
	);
};

Demo.html = `const Demo = () => {
	const { height, width, size, isMobile } = useWindowDimensions();

	return (
		<Stack className="gap-y-3 [&>td]:p-4">
			<table className="table-auto [&_td]:!p-2">
				<tbody>
					<tr>
						<td>Height:</td>
						<td>
							<Badge text={height} variant="primary" />
						</td>
					</tr>
					<tr>
						<td>Width:</td>
						<td>
							<Badge text={width} variant="primary" />
						</td>
					</tr>

					<tr>
						<td>Size:</td>
						<td>
							<Badge text={size} variant="primary" />
						</td>
					</tr>

					<tr>
						<td>isMobile:</td>
						<td>
							<Badge text={isMobile.toString()} variant="primary" />
						</td>
					</tr>
				</tbody>
			</table>
		</Stack>
	);
};`;

export { Demo };
