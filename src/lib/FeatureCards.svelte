<script>
	import NetworkStats from './NetworkStats.svelte';
	import { tippy } from 'svelte-tippy';
</script>

<section class="container features">
	<div class="card">
		<div class="column">
			<h3 class="heading-3">Serve websites from smart contracts</h3>
			<p class="text-l text-black-500 ">
				Interact with canister smart contracts directly from your browser just like regular
				websites.
			</p>
		</div>
		<div class="column nns-feature">
			<img src="nns.png" alt="" />
		</div>
	</div>
	<div class="card reverse">
		<div class="column">
			<h3 class="heading-3">Users don’t need tokens and wallets</h3>
			<p class=" text-l text-black-500 ">
				The reverse gas model enables free-to-use, truly user-friendly dapps, ready for mass
				adoption.
			</p>
			<p class="text-l">
				<a href="https://dfinity.org/showcase" target="_blank"
					>Explore Internet Computer ecosystem →</a
				>
			</p>
		</div>
		<div class="column projects">
			<div class="project internal-card">
				<img src="openchat.png" alt="" />
				<h4>OpenChat</h4>
				<p>Decentralized alternative to WhatsApp</p>
				<div class="stats">50,000+ users</div>
			</div>
			<div class="project internal-card">
				<img src="dscvr.png" alt="" />
				<h4>DSCVR</h4>
				<p>Decentralized social news aggregator</p>
				<div class="stats">40,000+ users</div>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="column">
			<h3 class="heading-3">Cheapest on-chain storage</h3>
			<p class="text-l text-black-500 ">
				The cost of data storage and computation is stable, it doesn't depend on token prices or
				block space, and novel wasm runtime allows efficient runtime execution.
			</p>
		</div>
		<div class="column">
			<div class="internal-card costs">
				<h4>
					$10 of <span
						style="border-bottom: 2px dotted currentColor;"
						use:tippy={{
							content: `Smart contracts have a Cycle balance that they burn as they run.`,
							placement: 'bottom'
						}}
					>
						Cycles</span
					> will pay for:
				</h4>
				<ul>
					<li>200MB website bundle <strong>for 10 years</strong></li>
					<li>NFT collection with 10,000 items <strong>for 1 year</strong></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="card reverse">
		<div class="column">
			<h3 class="heading-3">True scaling</h3>
			<p class=" text-l text-black-500 ">
				By adding new subnets regularly, the IC scales to an unbounded number of dapps and allows
				storage of unlimited data.
			</p>
			<p class="text-l">
				<a href="https://dashboard.internetcomputer.org" target="_blank">See Network Stats →</a>
			</p>
		</div>
		<div class="column">
			<div class="network-stats">
				<NetworkStats />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		margin-top: 64px;
		margin-bottom: 64px;
	}
	@media screen and (min-width: 1024px) {
		section {
			margin-top: 114px;
			margin-bottom: 114px;
		}
	}

	.card {
		background-color: var(--color-black-100);
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.column {
		flex: 1;
		padding: 24px;
	}

	.internal-card {
		background: #ffffff;
		box-shadow: 0px 4px 16px rgba(54, 54, 58, 0.12);
		border-radius: 16px;
	}

	.card .column:nth-child(1) {
		order: 1;
	}
	.card .column:nth-child(2) {
		order: 2;
	}

	.card p + p {
		margin-top: 24px;
	}

	.card h3 + p {
		margin-top: 24px;
	}

	.card + .card {
		margin-top: 60px;
	}

	@media screen and (min-width: 768px) {
		.card {
			flex-direction: row;
		}
		.column {
			padding: 32px;
		}
		.card.reverse .column:nth-child(1) {
			order: 2;
		}
		.card.reverse .column:nth-child(2) {
			order: 1;
		}
	}

	@media screen and (min-width: 1024px) {
		.column {
			padding: 52px;
		}
	}

	.nns-feature {
		position: relative;
		padding-bottom: 40%;
	}
	.nns-feature img {
		width: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
	}

	@media screen and (min-width: 768px) {
		.nns-feature {
			position: relative;
			padding-bottom: 0;
		}
	}

	.projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	.project {
		/* margin: 0 16px; */
		flex: 1;
		display: flex;
		flex-direction: column;

		padding: 22px 7px;
		text-align: center;
	}
	.project img {
		height: 62px;
		align-self: center;
		margin-bottom: 22px;
	}
	.project h4 {
		font-size: 16px;
		line-height: 20px;
		font-weight: 500;
		letter-spacing: -0.15px;
		margin: 0 0 4px 0;
	}
	.project p {
		font-size: 14px;
		line-height: 20px;
		letter-spacing: -0.15px;
		margin-bottom: 16px;
		color: var(--color-black-400);
	}
	.project .stats {
		background: var(--color-black-300);
		border-radius: 20px;
		align-self: center;
		padding: 4px 8px;
		font-size: 16px;
		line-height: 21px;
	}

	@media screen and (min-width: 768px) {
	}

	.costs {
		padding: 18px;
	}

	.costs h4 {
		margin-top: 0;
		margin-bottom: 24px;
		font-size: 20px;
		line-height: 28px;
		font-weight: 500;
	}

	.costs ul {
		font-size: 20px;
		line-height: 28px;
		list-style-type: none;
		padding: 0;
		color: var(--color-black-500);
	}

	.costs ul li + li {
		margin-top: 16px;
	}

	@media screen and (min-width: 768px) {
		.costs h4 {
			font-size: 24px;
			line-height: 32px;
			margin-bottom: 24px;
		}
		.costs ul {
			font-size: 22px;
			line-height: 32px;
		}
		.costs {
			padding: 30px;
		}
		.costs ul li + li {
			margin-top: 24px;
		}
	}

	.network-stats {
		border-radius: 16px;
		padding: 18px;

		background-image: url(/stats.png);
		background-position: center;
		background-size: cover;

		color: var(--color-white);
		display: flex;
		flex-direction: column;
		min-height: 200px;
	}

	@media screen and (min-width: 768px) {
		.network-stats {
			padding: 32px;
		}
	}
</style>
