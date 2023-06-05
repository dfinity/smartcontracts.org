<script>
	import FeatureCards from '../lib/FeatureCards.svelte';

	import Hero from '../lib/Hero.svelte';
	import Header from '../lib/Header.svelte';
	import Foundation from '../lib/Foundation.svelte';
	import GetStarted from '../lib/GetStarted.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<svelte:head>
	<title>Smart Contracts on the Internet Computer</title>
	<meta
		name="description"
		content="Build smart contracts and dapps 100% on-chain on the Internet Computer, the world's fastest and most powerful open-source blockchain network"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image" content="https://smartcontracts.org/share.jpg" />
	<meta property="og:image:url" content="https://smartcontracts.org/share.jpg" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
	<Header />
	<Hero />
	<FeatureCards />
	<Foundation />
	<GetStarted />
	<Footer />
</main>

<style>
</style>
