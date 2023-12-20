<script lang="ts">
	export let initialPassword: string;
	export let confirmPassword: string;
</script>

<div
	class="match-status-container"
	aria-hidden={!(initialPassword !== '' && confirmPassword !== '')}
	aria-live="polite"
>
	{#if initialPassword === confirmPassword}
		<p class="match-status matching">Passwords match</p>
	{:else}
		<p class="match-status not-matching">Passwords do not match</p>
	{/if}
</div>
