<script>
	import Footer from '$lib/components/footer.svelte'; 
	import Navbar from '$lib/components/navbar.svelte'; 
</script> 

<div class="h-screen"> 
	<Navbar />
	<slot />
	<Footer />
</div>
