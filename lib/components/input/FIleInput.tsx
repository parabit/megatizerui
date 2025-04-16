import { useRef } from 'react';

import { Div } from '../div';
import { Span } from '../span';
import { Input } from './Input';
import { IFileInput } from './utils';

export const FIleInput = ({ ref, text, children, ...props }: IFileInput) => {
	const innerRef = useRef<HTMLInputElement>(null);
	const inputRef = ref || innerRef;

	const handleSelectFile = () => inputRef?.current && inputRef.current.click();

	return (
		<Div>
			{children || (
				<button type="button" onClick={handleSelectFile} className="file-input">
					<ArrowUpTrayIcon />
					<Span text={text || 'Загрузить изображение'} />
				</button>
			)}
			<Input ref={ref || innerRef} type="file" className="hidden" {...props} />
		</Div>
	);
};

const ArrowUpTrayIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
		/>
	</svg>
);
