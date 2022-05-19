<section class="container foundation">
	<div class="gallery">
		<img src="/team-1.jpg" alt="" />
		<img src="/team-2.jpg" alt="" />
	</div>

	<h2 class="heading-2">Blockchain's largest R&D operation</h2>

	<div class="stats">
		<div class="factoid">
			<div class="label">Team members</div>
			<div class="heading-3">260+</div>
		</div>
		<div class="factoid">
			<div class="label">Publications</div>
			<div class="heading-3">1564</div>
		</div>
		<div class="factoid">
			<div class="label">Citations</div>
			<div class="heading-3">86,347</div>
		</div>
		<div class="factoid">
			<div class="label">Patents</div>
			<div class="heading-3">191</div>
		</div>
	</div>
	<p class="text-l text-black-500 subtitle">
		The DFINITY Foundation is committed to realizing the most disruptive vision in tech: the
		adoption of public blockchain as a single technology stack that hosts all of humanity's systems
		and services
	</p>
	<div class="cta">
		<a class="button button-secondary" href="https://dfinity.org/foundation" target="_blank"
			>Learn more about the DFINITY Foundation</a
		>
	</div>
</section>

<style>
	.gallery {
		text-align: center;
	}
	.gallery img {
		max-width: 100%;
		width: 400px;
	}
	.gallery img + img {
		margin-top: 12px;
	}

	@media screen and (min-width: 1024px) {
		.gallery img {
			max-width: 417px;
			margin: 0 10px;
		}
	}

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

	h2 {
		max-width: 800px;
		text-align: center;
		margin: 40px auto 48px;
	}

	.stats {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0 auto 40px;
		row-gap: 20px;
	}

	.factoid {
		text-align: center;
		flex: 1;
	}

	.factoid .label {
		font-size: 16px;
		line-height: 20px;
		color: var(--color-black-400);
	}

	@media screen and (min-width: 1024px) {
		.stats {
			display: flex;
			width: 800px;
			margin: 0 auto 40px;
		}

		.factoid {
			text-align: center;
			flex: 1;
		}

		.factoid .label {
			font-size: 16px;
			line-height: 20px;
			color: var(--color-black-400);
		}

		.factoid + .factoid {
			border-left: 1px solid var(--color-black-400);
		}
	}

	.subtitle {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 32px;
	}

	.cta {
		text-align: center;
	}
</style>
