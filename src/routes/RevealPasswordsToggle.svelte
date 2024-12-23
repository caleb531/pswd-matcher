<script lang="ts">
	interface Props {
		enabled: boolean;
	}

	let { enabled = $bindable() }: Props = $props();
</script>

<label for="reveal-passwords">Reveal passwords?</label>
<input id="reveal-passwords" class="reveal-passwords" type="checkbox" bind:checked={enabled} />
