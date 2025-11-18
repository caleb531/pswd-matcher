import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			exclude: ['build', '*.config.js', ...coverageConfigDefaults.exclude],
			reporter: ['text', 'lcov', 'html', 'text-summary']
		}
	}
});
