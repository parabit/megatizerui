import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useTheme } from '@hooks';

const SyntaxHighlighter = Prism as unknown as React.FC<SyntaxHighlighterProps>;

interface ICodeBlock {
	value: SyntaxHighlighterProps['children'];
	language?: SyntaxHighlighterProps['language'];
}

export const CodeBlock = ({ value, language = 'typescript' }: ICodeBlock) => {
	const { theme } = useTheme();

	return (
		<SyntaxHighlighter
			children={value}
			language={language}
			style={theme === 'light' ? vs : vscDarkPlus}
			customStyle={{ width: '100%', margin: 0, border: 'none' }}
		/>
	);
};
