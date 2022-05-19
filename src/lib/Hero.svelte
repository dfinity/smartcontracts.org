<section class="container hero">
	<h1 class="heading-1">
		<span>Next Generation</span>
		<br />
		<span>Smart Contracts</span>
	</h1>
	<div class="decoration">
		<img src="hero-bg.png" alt="" />
		<img src="loader.webp" alt="" />
	</div>
	<p class="text-l">
		Build smart contracts and dapps 100% on-chain on the world’s fastest and most powerful open-
		source blockchain network: the Internet Computer
	</p>
	<div>
		<a class="button button-primary" href="https://internetcomputer.org">Start Building Web3</a>
	</div>
</section>

<style>
	section {
		margin-top: 64px;
		margin-bottom: 64px;
		position: relative;
	}

	.hero h1 {
		margin-bottom: 24px;
		position: relative;
		z-index: 1;
	}

	.hero p {
		color: var(--color-gray);
		margin-bottom: 32px;
		max-width: 840px;
		position: relative;
		z-index: 1;
	}

	.hero h1 span:nth-of-type(2) {
		color: var(--color-primary);
	}

	@media screen and (min-width: 1024px) {
		section {
			margin-top: 114px;
			margin-bottom: 114px;
		}
	}

	.decoration {
		display: none;
		position: absolute;
		right: -100px;
		top: 0;
		z-index: 0;
	}

	.decoration img:nth-of-type(1) {
		width: 300px;
		position: absolute;
		right: 40px;
		top: -50px;
	}
	.decoration img:nth-of-type(2) {
		width: 100px;
		position: absolute;
		right: 160px;
		top: 20px;
	}

	@media screen and (min-width: 768px) {
		.decoration {
			display: block;
		}
	}

	@media screen and (min-width: 1024px) {
		.decoration img:nth-of-type(1) {
			width: 500px;
			right: 0;
			top: -70px;
		}
		.decoration img:nth-of-type(2) {
			width: 150px;
			right: 200px;
			top: 20px;
		}
	}
</style>
