<script lang="ts">
	export let id: string;
	export let label: string;
	export let placeholder: string;
	export let value: string;
	// Whether or not the actual password is shown within the input
	export let reveal = false;

	// Svelte prohibits us from binding to the input's `value` attribute
	// directly because the input type is not static (see
	// <https://stackoverflow.com/a/57393751/560642>); to fix this, we can
	// simply listen for the input's `input` event and update the variable
	// accordingly
	function updateValue(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		value = event.currentTarget?.value ?? '';
	}
</script>

<label for={id}>{label}:</label>
<input
	type={reveal ? 'text' : 'password'}
	class="password"
	{placeholder}
	{id}
	on:input={(event) => updateValue(event)}
/>
<span class="password-length">{value.length || ''}</span>
