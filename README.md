# megatizerui 🚀

UI Component Library for React Based on TypeScript + Tailwind CSS

### Install

```bash
npm i @parabit/megatizerui
```

```bash
yarn add @parabit/megatizerui
```

### Peer dependencies

- [react: "^19.0.0"](https://react.dev/)
- [react-dom: "^19.0.0"](https://react.dev/)
- [tailwindcss: "^"4.0.14"](https://tailwindcss.com/)

# Usage

Create and import `index.css`

```css
@import 'tailwindcss';

@theme {
	--color-primary-light: var(--color-blue-600);
	--color-primary-dark: var(--color-blue-400);

	--color-text-light: var(--color-neutral-700);
	--color-text-dark: var(--color-neutral-200);

	--color-muted-light: var(--color-neutral-500);
	--color-muted-dark: var(--color-neutral-500);

	--color-bg-light: var(--color-neutral-100);
	--color-bg-dark: var(--color-neutral-900);

	--color-card-bg-light: var(--color-white);
	--color-card-bg-dark: var(--color-neutral-800);
	--color-card-border-light: var(--color-neutral-200);
	--color-card-border-dark: var(--color-neutral-700);

	--color-error: var(--color-red-600);
	--color-success: var(--color-green-600);
}

@custom-variant dark (&:where(.dark, .dark *));

html.light {
	color: var(--color-text-light);
	background-color: var(--color-bg-light);
}

html.dark {
	color: var(--color-text-dark);
	background-color: var(--color-bg-dark);
}
```
