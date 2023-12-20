<script lang="ts">
	export let initialPassword: string;
	export let confirmPassword: string;
</script>

<div
	class="match-status-container"
	style:visibility={initialPassword !== '' && confirmPassword !== '' ? 'visible' : 'hidden'}
	aria-live="polite"
>
	{#if initialPassword === confirmPassword}
		<p class="match-status matching" aria-hidden="true">Passwords match</p>
	{:else}
		<p class="match-status not-matching" aria-hidden="true">Passwords do not match</p>
	{/if}
</div>
