import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
	if (mode === 'lib') {
		return {
			plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' }), tailwindcss()],
			build: {
				lib: {
					entry: resolve(__dirname, 'lib/index.ts'),
					fileName: 'index',
					formats: ['es'],
				},
				outDir: 'dist',
				copyPublicDir: false,
				rollupOptions: {
					external: ['react', 'react/jsx-runtime', 'tailwindcss'],
				},
			},
		};
	}

	return {
		server: {
			port: 3000,
		},
		preview: {
			port: 3000,
		},
		plugins: [react(), tailwindcss(), tsconfigPaths()],
		base: '/megatizerui',
		build: {
			outDir: 'dist-docs',
		},
	};
});
