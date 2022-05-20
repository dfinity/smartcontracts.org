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
