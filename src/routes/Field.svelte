<script lang="ts">
	interface Props {
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { id = '', children }: Props = $props();
</script>

<div class="field" data-field-id={id}>
	{@render children?.()}
</div>
