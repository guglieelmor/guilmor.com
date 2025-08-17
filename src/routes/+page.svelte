<script>
    import Content from "$lib/components/content.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
	import Faq from "$lib/components/faq.svelte";
</script>

<div class="h-screen">
    <Navbar /> 
    <Header />
    <Faq />
    <!-- <main class="max-w-[1200px] h-20 mx-auto"> -->
        <!-- <Content /> -->
    <!-- </main> -->
    <Footer />
</div>
