<script>
	import { tippy } from 'svelte-tippy';
</script>

<section class="container get-started">
	<h2 class="heading-2">Now Build Anything on Infinite Web3 blockchain</h2>
	<div class="cta">
		<a class="button button-primary" href="https://internetcomputer.org">Start Building</a>
	</div>
	<div class="languages">
		<a
			href="https://smartcontracts.org/docs/current/developer-docs/build/languages/motoko/"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Motoko (CDK) has native support for Internet Computer canister smart contracts.`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/motoko-logo.png" alt=" Motoko (CDK)" />
		</a>
		<a
			href="https://smartcontracts.org/docs/current/developer-docs/build/languages/rust/rust-intro/"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Use the Rust Canister Development Kit (CDK) to develop canister smart contracts for the Internet Computer.`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/rust-logo.png" alt="Rust SDK" />
		</a>
		<a
			href="https://smartcontracts.org/docs/developers-guide/webpack-config.html"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Use the official JS/TS agent library to interact with canister smart contracts from the browser.`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/js-logo.png" alt="JavaScript/TypeScript agent" />
		</a>
		<a
			href="https://github.com/rocklabs-io/ic-py"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Community Python agent for the Internet Computer`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/python-logo.png" alt="Python agent" />
		</a>
		<a
			href="https://github.com/ic4j/ic4j-agent"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Community Java agent for the Internet Computer`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/java-logo.png" alt="Java agent" />
		</a>
		<a
			href="https://github.com/mix-labs/IC-Go"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Community Go agent for the Internet Computer`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/go-logo.png" alt="Go agent" />
		</a>
		<a
			href="https://github.com/rckprtr/cdk-as"
			target="_blank"
			rel="noopener noreferrer"
			use:tippy={{
				content: `Community AssemblyScript CDK for the Internet Computer`,
				placement: 'bottom'
			}}
		>
			<img src="/languages/as-logo.png" alt="AssemblyScript CDK" />
		</a>
	</div>

	<div class="note">
		Supported languages to develop canister smart contracts
		<span
			class="help"
			use:tippy={{
				content: `Canister Development Kits (CDK's) enable canister smart contract development. Agents enable clients to interact with canisters.`,
				placement: 'bottom'
			}}>?</span
		>
	</div>
</section>

<style>
	section {
		margin-top: 64px;
		margin-bottom: 64px;
	}
	@media screen and (min-width: 1024px) {
		section {
			margin-top: 164px;
			margin-bottom: 114px;
		}
	}

	h2 {
		max-width: 940px;
		text-align: center;
		margin: 40px auto 48px;
	}

	.cta {
		text-align: center;
	}

	.cta a {
		display: block;
	}
	@media screen and (min-width: 1024px) {
		.cta a {
			width: 310px;
			display: inline-block;
		}
	}

	.languages {
		text-align: center;
		margin: 80px 0 24px;
	}

	.languages a {
		display: inline-block;
		margin: 10px;
	}

	.languages a img {
		width: 64px;
	}

	.note {
		color: var(--color-black-400);
		text-align: center;
	}

	.help {
		width: 24px;
		height: 24px;
		display: inline-block;
		border-radius: 12px;
		border: 1px solid currentColor;
		text-align: center;
		line-height: 24px;
		box-sizing: border-box;
		transition: all 200ms ease;
		cursor: pointer;
	}
	.help:hover {
		background-color: var(--color-black-400);
		border: 1px solid var(--color-black-400);

		color: var(--color-white);
	}
</style>
