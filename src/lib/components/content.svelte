<script>
	import Footer from '$lib/components/footer.svelte'; 
	import Navbar from '$lib/components/navbar.svelte'; 
	import Cookies from '$lib/components/cookies.svelte';
</script> 

<div class="h-screen"> 
	<Navbar />
	<slot />
	<Footer />
	<Cookies />
</div>
