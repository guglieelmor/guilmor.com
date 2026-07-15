<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import Cookies from '$lib/components/cookies.svelte';

	let { children }: { children?: import('svelte').Snippet } = $props();
</script>

<div class="min-h-screen">
	<Navbar />
	{@render children?.()}
	<Footer />
	<Cookies />
</div>
