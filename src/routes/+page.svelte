<script lang="ts">
	import '../styles/index.scss';
</script>

<main class="app">
	<h1>pswd matcher</h1>

	<p>Need to learn a new password? Learn it here!</p>

	<form class="passwords">
		<div class="reveal">
			<label for="reveal">Reveal passwords?</label>
			<input class="reveal" type="checkbox" value="" />
		</div>

		<div class="field password">
			<label for="password">Password:</label>
			<input type="password" placeholder="Type password" class="password" />
			<span class="password-length"></span>
		</div>

		<div class="field confirm">
			<label for="confirm">Confirm:</label>
			<input type="password" placeholder="Confirm password" class="password confirm" />
			<span class="confirm-length"></span>
		</div>

		<div class="match-container">
			<p class="match status visible">Passwords match</p>
			<p class="no-match status">Passwords do not match</p>
		</div>
	</form>

	<p><strong>Disclaimer:</strong> Nothing you type here is sent or stored anywhere. Period.</p>
</main>
