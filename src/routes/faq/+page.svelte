<svelte:head>
  <title>FAQ</title>
</svelte:head>

<script> 
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte"; 
	import Faq from "$lib/components/faq.svelte";
</script>

<div class="h-screen">
    <Navbar />  
    <Faq /> 
    <Footer />
</div>
