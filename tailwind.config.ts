import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				spacemono: ['Space Mono', 'sans-mono']
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
