<script lang="ts">
	export let initialPassword: string;
	export let confirmPassword: string;
</script>

<div
	class="match-container"
	class:visible={Boolean(initialPassword !== '' && confirmPassword !== '')}
>
	<p class="match-status matching" class:visible={initialPassword === confirmPassword}>
		Passwords match
	</p>
	<p class="match-status not-matching" class:visible={initialPassword !== confirmPassword}>
		Passwords do not match
	</p>
</div>
