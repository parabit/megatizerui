import { useLayoutEffect, useState } from 'react';

const KEY_STORAGE = 'theme';

type ThemeVariants = 'light' | 'dark';

export const useTheme = () => {
	const [theme, setTheme] = useState<ThemeVariants>('dark');

	useLayoutEffect(() => {
		document.body.addEventListener('toggle-theme', handleToggleThemeValue);

		return () => {
			document.body.removeEventListener('toggle-theme', handleToggleThemeValue);
		};
	}, []);

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

		document.body.dispatchEvent(new CustomEvent('toggle-theme'));
	};

	const handleToggleThemeValue = () => {
		const value = localStorage.getItem('theme');
		if (value === 'light' || value === 'dark') setTheme(value);
	};

	const onToggleTheme = () => handleSetTheme(theme === 'light' ? 'dark' : 'light');

	return { theme, onToggleTheme };
};
