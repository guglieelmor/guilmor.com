<script>
	import Content from '$lib/components/content.svelte';
	import Faq from '$lib/components/faq.svelte';
	import View from '$lib/components/view.svelte';
</script>

<svelte:head>
	<title>FAQ</title>
</svelte:head>
<Content>
	<View title="FAQ" description="Perguntas frequentes.">
		<Faq />
	</View>
</Content>
