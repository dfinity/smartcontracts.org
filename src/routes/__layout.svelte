<script lang="ts">
	import 'normalize.css';

	import { page } from '$app/stores';
	import { browser, dev } from '$app/env';
	import { tick } from 'svelte';

	page.subscribe((p) => {
		if (browser && !dev) {
			tick().then(() => {
				try {
					(window as any)._paq.push(['setCustomUrl', p.url.href]);
					(window as any)._paq.push(['setDocumentTitle', document.title]);
					(window as any)._paq.push(['trackPageView']);
				} catch {}
			});
		}
	});
</script>

<slot />

<style>
	@import '../style/global.css';
</style>
