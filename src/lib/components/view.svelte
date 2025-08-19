<script>
	export let title = '';
	export let description = '';
</script>

<section
	class="mx-auto flex max-w-[1200px] flex-col items-start justify-start overflow-x-auto rounded-none bg-black p-0 px-2.5 lg:basis-1/4 lg:flex-row lg:px-0"
>
	<div
		class="h-full min-h-56 w-full items-start justify-start rounded-none border-t border-r border-l border-gray-700 text-start whitespace-normal text-foreground"
	>
		<div
			class="flex flex-col gap-8 overflow-hidden border-b border-gray-700 px-6 py-12 md:px-16 md:py-20 md:pt-32"
		>
			<div class="max-w-xl">
				<h1 class="mb-2.5 text-3xl tracking-tight text-foreground md:text-5xl">{title}</h1>
				<p class="font-inter-tight text-base text-gray-400">{description}</p>
			</div>
		</div>
		<div>
			<slot />
		</div>
	</div>
</section>
