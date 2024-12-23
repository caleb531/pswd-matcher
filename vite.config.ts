import { sveltekit } from '@sveltejs/kit/vite';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	// Fix vitest under Svelte 5, per
	// <https://github.com/sveltejs/svelte/issues/11394#issuecomment-2085747668>
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},
	// Even though we are using Vite 6 for the application, Vitest still uses Vite
	// 5 internally (because it technically does not support Vite 6 yet); this
	// fortunately does not create any incompatibilities since Vitest does not
	// require Vite as a peer dependency, however when we run the tests, we still
	// see the Sass deprecation warning due to Vite 5's use of the legacy Sass
	// API; to fix this, we simply force the use of the modern sass API for both
	// the Vite 5 and Vite 6 instances
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
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
