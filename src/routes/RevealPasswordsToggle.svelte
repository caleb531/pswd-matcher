<script lang="ts">
	export let enabled: boolean;
</script>

<label for="reveal-passwords">Reveal passwords?</label>
<input id="reveal-passwords" class="reveal-passwords" type="checkbox" bind:checked={enabled} />
