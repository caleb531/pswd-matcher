import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import page from './routes/+page.svelte';

describe('pswd matcher', () => {
	beforeEach(() => {
		render(page);
	});

	it('should load application with empty inputs', async () => {
		expect(await screen.findByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		expect(await screen.findByLabelText('Password:')).toHaveValue('');
		expect(await screen.findByLabelText('Confirm:')).toHaveValue('');
	});

	it('should populate initial password only', async () => {
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		const initialPasswordInput = await screen.findByLabelText('Password:');
		const initialPassword = 'CorrectHorseBatteryStaple';
		await userEvent.type(initialPasswordInput, initialPassword);
		expect(initialPasswordInput).toHaveValue(initialPassword);
		expect(screen.queryByText('Passwords match')).not.toBeInTheDocument();
		expect(screen.queryByText('Passwords do not match')?.parentElement).not.toHaveClass(
			'visible'
		);
	});

	it('should populate confirm password only', async () => {
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		const confirmPasswordInput = await screen.findByLabelText('Confirm:');
		const confirmPassword = 'CorrectHorseBatteryStaple';
		await userEvent.type(confirmPasswordInput, confirmPassword);
		expect(confirmPasswordInput).toHaveValue(confirmPassword);
		expect(screen.queryByText('Passwords match')).not.toBeInTheDocument();
		expect(screen.queryByText('Passwords do not match')?.parentElement).not.toHaveClass(
			'visible'
		);
	});

	it('should populate mismatching passwords', async () => {
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		const initialPasswordInput = await screen.findByLabelText('Password:');
		const confirmPasswordInput = await screen.findByLabelText('Confirm:');
		const initialPassword = 'CorrectHorseBatteryStaple';
		const confirmPassword = 'CorrectHorseBatteryStsple';
		await userEvent.type(initialPasswordInput, initialPassword);
		await userEvent.type(confirmPasswordInput, confirmPassword);
		expect(initialPasswordInput).toHaveValue(initialPassword);
		expect(confirmPasswordInput).toHaveValue(confirmPassword);
		expect(screen.queryByText('Passwords match')).not.toBeInTheDocument();
		expect(screen.queryByText('Passwords do not match')).toBeInTheDocument();
	});

	it('should populate matching passwords', async () => {
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		const initialPasswordInput = await screen.findByLabelText('Password:');
		const confirmPasswordInput = await screen.findByLabelText('Confirm:');
		const password = 'CorrectHorseBatteryStaple';
		await userEvent.type(initialPasswordInput, password);
		await userEvent.type(confirmPasswordInput, password);
		expect(initialPasswordInput).toHaveValue(password);
		expect(confirmPasswordInput).toHaveValue(password);
		expect(screen.queryByText('Passwords match')).toBeInTheDocument();
		expect(screen.queryByText('Passwords do not match')).not.toBeInTheDocument();
	});

	it('should hide passwords by default', async () => {
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		const initialPasswordInput = await screen.findByLabelText('Password:');
		const confirmPasswordInput = await screen.findByLabelText('Confirm:');
		await userEvent.click(screen.getByLabelText('Reveal passwords?'));
		expect(initialPasswordInput).toHaveAttribute('type', 'text');
		expect(confirmPasswordInput).toHaveAttribute('type', 'text');
	});

	it('should reveal passwords', async () => {
		expect(screen.getByRole('heading', { name: 'pswd matcher' })).toBeInTheDocument();
		const initialPasswordInput = await screen.findByLabelText('Password:');
		const confirmPasswordInput = await screen.findByLabelText('Confirm:');
		expect(initialPasswordInput).toHaveAttribute('type', 'password');
		expect(confirmPasswordInput).toHaveAttribute('type', 'password');
	});
});
