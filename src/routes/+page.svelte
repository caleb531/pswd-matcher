<script lang="ts">
	import '../styles/index.scss';
	import Field from './Field.svelte';
	import MatchStatus from './MatchStatus.svelte';
	import Password from './Password.svelte';
	import RevealPasswordsToggle from './RevealPasswordsToggle.svelte';

	// Keep track of passwords being entered for comparison
	let initialPassword = '';
	let confirmPassword = '';
	// A boolean to keep track of when the password inputs are revealed
	let arePasswordsRevealed = false;
</script>

<svelte:head>
	<title>Pswd Matcher | Caleb Evans</title>
	<meta
		name="description"
		content="Need to learn a new password? Learn it here! This is a secure space to type and retype your password multiple times until you've got it down."
	/>
</svelte:head>

<main class="app">
	<h1>pswd matcher</h1>

	<a class="author-link" href="https://calebevans.me/"><span class="by">by</span> Caleb Evans</a>

	<p>Need to learn a new password? Learn it here!</p>

	<form class="passwords">
		<Field id="reveal-passwords">
			<RevealPasswordsToggle bind:enabled={arePasswordsRevealed} />
		</Field>

		<Field id="initial-password">
			<Password
				id="initial-password"
				label="Password"
				placeholder="Type password"
				bind:value={initialPassword}
				reveal={arePasswordsRevealed}
			/>
		</Field>

		<Field id="confirm-password">
			<Password
				id="confirm-password"
				label="Confirm"
				placeholder="Confirm password"
				bind:value={confirmPassword}
				reveal={arePasswordsRevealed}
			/>
		</Field>

		<MatchStatus {initialPassword} {confirmPassword} />
	</form>

	<p class="disclaimer">
		<strong>Disclaimer:</strong> Nothing you type here is sent or stored anywhere. The entire
		project is open-source, and you can
		<a href="https://github.com/caleb531/pswd-matcher" target="_blank" rel="noopener"
			>browse the source code on GitHub</a
		>
		if you'd like to see how it works.
	</p>
</main>
