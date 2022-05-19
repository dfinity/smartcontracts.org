<script lang="ts">
	export let content: string = '';
	export let underline = true;
</script>

<span class="hover">
	<span class={underline ? 'underline' : ''}>
		<slot />
	</span>
	<div class="">
		{content}
	</div>
</span>

<style>
	div {
		/* display: none; */
		width: calc(100vw - 24px);
		background-color: #000000b0;
		color: white;
		font-size: 16px;
		line-height: 20px;
		font-weight: 400;
		opacity: 0;
		transition: opacity 200ms ease;
		padding: 12px;
		position: fixed;
		left: 12px;
		right: 12px;
		transform: translate(-50%, calc(100% + 6px));
		pointer-events: none;
	}

	@media screen and (min-width: 600px) {
		div {
			width: 280px;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, calc(100% + 6px));
		}
	}

	.hover {
		position: relative;
		cursor: pointer;
	}

	.underline {
		border-bottom: 2px dotted var(--color-black-400);
	}

	.hover:hover div {
		pointer-events: all;
		opacity: 1;
	}
</style>
