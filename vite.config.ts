import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			exclude: ['build', '.*'],
			reporter: ['text', 'lcov', 'html', 'text-summary']
		}
	}
});
