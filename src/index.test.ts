import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import page from './routes/+page.svelte';

describe('pswd matcher', () => {
	it('should load application with empty inputs', () => {
		render(page);
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		expect(screen.getByLabelText('Password:')).toHaveValue('');
		expect(screen.getByLabelText('Confirm:')).toHaveValue('');
	});
});
