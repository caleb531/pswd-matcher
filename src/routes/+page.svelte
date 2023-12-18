<script lang="ts">
	import '../styles/index.scss';
</script>

<svelte:head>
	<title>Pswd Matcher | Caleb Evans</title>
</svelte:head>

<main class="app">
	<h1>pswd matcher</h1>

	<a class="author-link" href="https://calebevans.me/"><span class="by">by</span> Caleb Evans</a>

	<p>Need to learn a new password? Learn it here!</p>

	<form class="passwords">
		<p class="reveal">
			<label for="reveal-passwords">Reveal passwords?</label>
			<input id="reveal-passwords" class="reveal-password" type="checkbox" value="" />
		</p>

		<p class="field password">
			<label for="initial-password">Password:</label>
			<input type="password" placeholder="Type password" id="initial-password" class="password" />
			<span class="password-length"></span>
		</p>

		<p class="field confirm">
			<label for="confirm-password">Confirm:</label>
			<input
				type="password"
				placeholder="Confirm password"
				id="confirm-password"
				class="password"
			/>
			<span class="confirm-length"></span>
		</p>

		<div class="match-container">
			<p class="match status visible">Passwords match</p>
			<p class="no-match status">Passwords do not match</p>
		</div>
	</form>

	<p><strong>Disclaimer:</strong> Nothing you type here is sent or stored anywhere. Period.</p>
</main>
