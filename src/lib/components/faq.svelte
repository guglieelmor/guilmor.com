<script>
	let faqs = [
		{
			question: 'O que fazemos?',
			answer:
				'Oferecemos soluções digitais completas, combinando design, tecnologia e estratégia para criar produtos que realmente impactam.',
			open: false
		},
		{
			question: 'Quais serviços estão disponíveis?',
			answer:
				'Desenvolvemos sites, apps, automações e interfaces digitais, além de prestar consultoria para otimizar processos e resultados.',
			open: false
		},
		{
			question: 'Como posso falar com a equipe?',
			answer:
				'Você pode entrar em contato diretamente pelo formulário do site, e-mail ou WhatsApp. Estamos sempre prontos para atender.',
			open: false
		},
		{
			question: 'Atendem qualquer tipo de empresa?',
			answer:
				'Sim, trabalhamos com startups, pequenas empresas ou grandes marcas, oferecendo soluções sob medida para cada necessidade.',
			open: false
		},
		{
			question: 'Há suporte após a entrega do projeto?',
			answer:
				'Sim, acompanhamos e damos suporte contínuo, garantindo que tudo funcione perfeitamente mesmo depois de lançado.',
			open: false
		}
	];

	function toggle(index) {
		faqs[index].open = !faqs[index].open;
	}
</script>

<div class="text-foreground">
	{#each faqs as faq, i}
		<div
			class="border-b border-gray-700 p-6 transition-colors duration-200"
			class:bg-jet={faq.open}
		>
			<h3 class="flex">
				<button
					type="button"
					class="flex flex-1 items-center justify-between py-4 text-left text-xl font-medium transition-all hover:underline"
					on:click={() => toggle(i)}
					aria-expanded={faq.open}
				>
					{faq.question}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="text-muted-foreground transition-transform duration-200"
						class:rotate-180={faq.open}
					>
						<path d="m6 9 6 6 6-6"></path>
					</svg>
				</button>
			</h3>

			{#if faq.open}
				<div class="mt-2 animate-accordion-down overflow-hidden text-sm">
					{faq.answer}
				</div>
			{/if}
		</div>
	{/each}
</div>

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
