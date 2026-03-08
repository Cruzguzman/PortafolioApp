// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				navy:        'var(--color-navy)',
				'navy-mid':  'var(--color-navy-mid)',
				'navy-dark': 'var(--color-navy-dark)',
				gold:        'var(--color-gold)',
				'gold-light':'var(--color-gold-light)',
				cream:       'var(--color-cream)',
				gray:        'var(--color-gray)',
			},
			fontFamily: {
				display: 'var(--font-display)',
				body:    'var(--font-body)',
				mono:    'var(--font-mono)',
			},
		}
	},
	plugins: [],
}
