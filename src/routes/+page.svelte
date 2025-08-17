<script>
    import Content from "$lib/components/content.svelte";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
</script>

<div class="h-screen">
    <Header />
    <main class="max-w-[1200px] h-20 mx-auto">
        <Content />
        <Footer />
    </main>
</div>
