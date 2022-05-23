<script lang="ts">
	import { getNodeCount, getNodeProviders, getSubnetCount } from '../utils/network-stats';
	import { onMount } from 'svelte';

	let nodeMachines: number = 0;
	let subnets: number = 0;
	let nodeProviders: number = 0;

	let initialized = false;

	onMount(async () => {
		[nodeMachines, subnets, nodeProviders] = await Promise.all([
			getNodeCount(),
			getSubnetCount(),
			getNodeProviders()
		]);
		initialized = true;
	});
</script>

{#if initialized}
	<h4 class="text-l">{nodeMachines} Node machines</h4>
	<p class="note">with hundreds more waiting config in DCs</p>
	<div class="filler" />
	<p class="secondary-stat">
		{nodeProviders} Node providers <span class="note">(indie node operators)</span>
	</p>
	<p class="secondary-stat">
		{subnets} Subnet blockchain <span class="note">(combined to 1 platform)</span>
	</p>
{:else}
	<h4 class="text-l skeleton" style="max-width: 50%;">&nbsp;</h4>
	<p class="note skeleton" style="max-width: 70%;">&nbsp;</p>
	<div class="filler" />
	<p class="secondary-stat skeleton">&nbsp;</p>
	<p class="secondary-stat skeleton">&nbsp;</p>
{/if}

<style>
	h4 {
		font-weight: 500;
		margin: 0 0 8px;
	}

	.note {
		color: var(--color-black-400);
		font-size: 14px;
	}

	.secondary-stat {
		font-size: 14px;
		margin-bottom: 12px;
	}

	.filler {
		flex: 1;
	}

	@keyframes pulse {
		0% {
			opacity: 20%;
		}
		100% {
			opacity: 40%;
		}
	}

	.skeleton {
		background-color: #ffffff;
		border-radius: 4px;
		animation: pulse 1s infinite alternate;
	}
</style>
