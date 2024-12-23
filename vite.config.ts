import { sveltekit } from '@sveltejs/kit/vite';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	// Fix vitest under Svelte 5, per
	// <https://github.com/sveltejs/svelte/issues/11394#issuecomment-2085747668>
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			exclude: ['build', '*.config.js', ...coverageConfigDefaults.exclude],
			reporter: ['text', 'lcov', 'html', 'text-summary']
		}
	}
}));
