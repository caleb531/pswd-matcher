import { sveltekit } from '@sveltejs/kit/vite';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [sveltekit()],
	// Fix vitest under Svelte 5, per
	// <https://github.com/sveltejs/svelte/issues/11394#issuecomment-2085747668>
	resolve: {
		conditions: mode === 'test' ? ['browser'] : []
	},
	// Vitest does not officially support Vite 6 as of yet, and if we try to
	// upgrade, we get TypeScript errors loading the SvelteKit plugin; to work
	// around this, the application must remain on Vite 5 for the time being
	// (until Vitest officially supports Vite 6); with that, we must enable the
	// use of the modern Sass API in Vite 5
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
