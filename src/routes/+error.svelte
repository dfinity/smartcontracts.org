<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($page.status === 404) {
			window.location.href = `https://internetcomputer.org${$page.url.pathname}${$page.url.search}${$page.url.hash}`;
		}
	});
</script>
