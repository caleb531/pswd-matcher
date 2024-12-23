<script lang="ts">
	interface Props {
		initialPassword: string;
		confirmPassword: string;
	}

	let { initialPassword, confirmPassword }: Props = $props();
</script>

<div
	class="match-status-container"
	class:visible={initialPassword !== '' && confirmPassword !== ''}
	aria-live="polite"
>
	{#if initialPassword === confirmPassword}
		<p class="match-status matching" aria-hidden="true">Passwords match</p>
	{:else}
		<p class="match-status not-matching" aria-hidden="true">Passwords do not match</p>
	{/if}
</div>
