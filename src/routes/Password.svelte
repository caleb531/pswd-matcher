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
	function updateValue(event: Event & { currentTarget: HTMLInputElement }) {
		value = event.currentTarget.value ?? '';
	}
	// Switch focus to the other password input on the page when the Enter key
	// is pressed; this is handled in an element-agnostic way such that we don't
	// need a reference to the DOM element ahead of time, now do we need to
	// query it with an arbitrary selector - we can just leverage the DOM API
	function switchInputsOnEnter(event: KeyboardEvent & { currentTarget: HTMLInputElement }) {
		if (event.key !== 'Enter') {
			return;
		}
		const formElements = Array.from(event.currentTarget.form?.elements ?? []) as HTMLInputElement[];
		const nextField = formElements.find((element) => {
			return element.hasAttribute('data-toggle-focus-via-enter') && element !== event.currentTarget;
		});
		// Focus the input and select its contents so the user can type their
		// password from the beginning again
		nextField?.select();
	}
</script>

<label for={id}>{label}:</label>
<input
	type={reveal ? 'text' : 'password'}
	class="password"
	{placeholder}
	{id}
	on:input={(event) => updateValue(event)}
	on:keydown={switchInputsOnEnter}
	data-toggle-focus-via-enter
	data-1p-ignore
/>
<span class="password-length">{value.length || ''}</span>
