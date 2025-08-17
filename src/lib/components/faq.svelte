<script>
    let faqs = [{
            question: "O que fazemos?",
            answer: "Oferecemos soluções digitais completas, combinando design, tecnologia e estratégia para criar produtos que realmente impactam.",
            open: false
        },
        {
            question: "Quais serviços estão disponíveis?",
            answer: "Desenvolvemos sites, apps, automações e interfaces digitais, além de prestar consultoria para otimizar processos e resultados.",
            open: false
        },
        {
            question: "Como posso falar com a equipe?",
            answer: "Você pode entrar em contato diretamente pelo formulário do site, e-mail ou WhatsApp. Estamos sempre prontos para atender.",
            open: false
        },
        {
            question: "Atendem qualquer tipo de empresa?",
            answer: "Sim, trabalhamos com startups, pequenas empresas ou grandes marcas, oferecendo soluções sob medida para cada necessidade.",
            open: false
        },
        {
            question: "Há suporte após a entrega do projeto?",
            answer: "Sim, acompanhamos e damos suporte contínuo, garantindo que tudo funcione perfeitamente mesmo depois de lançado.",
            open: false
        }
    ];

    function toggle(index) {
        faqs[index].open = !faqs[index].open;
    }
</script>
<section
    class="max-w-[1200px] mx-auto bg-black flex flex-col items-start justify-start overflow-x-auto rounded-none p-0 lg:basis-1/4 lg:flex-row px-2.5 lg:px-0">
    <div
        class="border-r border-l border-t border-gray-700 text-foreground h-full min-h-56 w-full items-start justify-start rounded-none text-start whitespace-normal">
        <div class="border-gray-700 border-b px-6 py-8 lg:px-8 lg:py-20">
            <div class="flex max-w-lg flex-col gap-4 lg:gap-6">
                <h1 class="text-foreground text-3xl tracking-tight">FAQs</h1>
                <p class="text-mid-gray text-base">Perguntas frequentes.</p>
            </div>
        </div>
        <div>
            <div class="text-foreground">
                {#each faqs as faq, i}
                <div class="border-gray-700 border-b p-6 transition-colors duration-200" class:bg-jet={faq.open}>
                  <h3 class="flex">
                    <button
                      type="button"
                      class="flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline text-xl"
                      on:click={() => toggle(i)}
                      aria-expanded={faq.open}
                    >
                      {faq.question}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="text-muted-foreground transition-transform duration-200"
                        class:rotate-180={faq.open}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>

                  {#if faq.open}
                    <div class="overflow-hidden text-sm mt-2 animate-accordion-down">
                      {faq.answer}
                    </div>
                  {/if}
                </div>
              {/each}
          </div>
        </div>
    </div>
</section>
<style>
  @keyframes accordion-down {
    from { height: 0; opacity: 0; }
    to { height: var(--radix-accordion-content-height); opacity: 1; }
  }

  .animate-accordion-down {
    animation: accordion-down 0.1s ease-out forwards;
  }
</style>
