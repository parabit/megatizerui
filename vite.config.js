import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vite.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    if (mode === 'lib') {
        return {
            plugins: [
                react(),
                tailwindcss(),
                dts({
                    tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
                }),
            ],
            build: {
                lib: {
                    entry: resolve(__dirname, 'lib/main.ts'),
                    formats: ['es'],
                },
                outDir: 'dist-lib',
                copyPublicDir: false,
                rollupOptions: {
                    external: ['react', 'react/jsx-runtime'],
                },
            },
        };
    }
    if (mode === 'docs') {
        return {
            server: {
                port: 3000,
            },
            preview: {
                port: 3000,
            },
            plugins: [react(), tailwindcss()],
            build: {
                outDir: 'dist-docs',
            },
        };
    }
});
