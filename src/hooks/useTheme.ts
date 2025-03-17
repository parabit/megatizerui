import { useLayoutEffect, useState } from 'react';

const KEY_STORAGE = 'theme';

type ThemeVariants = 'light' | 'dark';

export const useTheme = () => {
	const [theme, setTheme] = useState<ThemeVariants>('dark');

	useLayoutEffect(() => {
		const localStoreValue = (localStorage.getItem(KEY_STORAGE) as ThemeVariants) || null;
		handleSetTheme(localStoreValue);
	}, []);

	const handleSetTheme = (value: ThemeVariants | null) => {
		if (value === 'light') {
			setTheme(value);
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			localStorage.setItem(KEY_STORAGE, value);
		} else {
			setTheme('dark');
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			localStorage.setItem(KEY_STORAGE, 'dark');
		}
	};

	const onToggleTheme = () => handleSetTheme(theme === 'light' ? 'dark' : 'light');

	return { theme, onToggleTheme };
};
