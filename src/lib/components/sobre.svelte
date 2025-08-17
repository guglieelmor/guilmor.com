<script></script>

<section
	class="mx-auto flex max-w-[1200px] flex-col items-start justify-start overflow-x-auto rounded-none bg-black p-0 px-2.5 lg:basis-1/4 lg:flex-row lg:px-0"
>
	<div
		class="h-full min-h-56 w-full items-start justify-start rounded-none border-t border-r border-l border-gray-700 text-start whitespace-normal text-foreground"
	>
		<div class="border-b border-gray-700 px-6 py-8 lg:px-8 lg:py-20">
			<div class="flex max-w-lg flex-col gap-4 lg:gap-6">
				<h1 class="text-3xl tracking-tight text-foreground">Sobre</h1>
				<p class="text-mid-gray text-base">Sobre a nossa empresa.</p>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes accordion-down {
		from {
			height: 0;
			opacity: 0;
		}

		to {
			height: var(--radix-accordion-content-height);
			opacity: 1;
		}
	}

	.animate-accordion-down {
		animation: accordion-down 0.1s ease-out forwards;
	}
</style>
