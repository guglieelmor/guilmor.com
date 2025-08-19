<script>
	import Content from '$lib/components/content.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>404 - Página não encontrada</title>
</svelte:head>

<Content>
	<section
		class="mx-auto flex max-w-[1200px] flex-col items-start justify-start overflow-x-auto rounded-none bg-black p-0 px-2.5 lg:basis-1/4 lg:flex-row lg:px-0"
	>
		<div
			class="h-full min-h-56 w-full items-start justify-start rounded-none border-t border-r border-l border-gray-700 text-start whitespace-normal text-foreground"
		>
			<div
				class="flex flex-col gap-8 overflow-hidden border-b border-gray-700 px-6 py-12 md:px-16 md:py-20 md:pt-32"
			>
				<section>
					<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
						<div class="mx-auto max-w-screen-sm text-center">
							<h1
								class="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl"
							>
								404
							</h1>
							<p
								class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white"
							>
								Página não encontrada
							</p>
							<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
								Desculpe, a página que você está procurando não existe. Talvez você queira voltar
								para a página inicial.
							</p>
							<Button>
								<a href="/">Home</a>
							</Button>
						</div>
					</div>
				</section>
			</div>
		</div>
	</section>
</Content>
