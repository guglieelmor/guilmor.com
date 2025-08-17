<script>
    import Faq from "./faq.svelte";
</script>
<section class="bg-obsidian relative overflow-hidden px-2.5 lg:px-0">
    <div class="border-r-dark-gray border-l-dark-gray relative container border px-5">
        <div
            class="group pointer-events-none absolute inset-0 flex size-full flex-col items-center justify-center self-start">
            <img alt="hero background" loading="lazy" decoding="async" data-nimg="fill" class="size-full object-cover"
                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                src="/ai-header.png">
        </div>
        <div class="grid gap-12 py-12 lg:grid-cols-[1fr_auto] lg:py-20 lg:pl-12 z-50">
            <div class="flex flex-col items-start justify-center gap-5 lg:gap-8">
                <h1
                    class="text-foreground text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl z-50 font-semibold">
                    Design e Tecnologia para criar produtos digitais inovadores e de impacto
                </h1>
                <p class="font-inter-tight text-mid-gray text-base md:text-lg lg:text-xl z-50">
                    Estratégia, consultoria e desenvolvimento para transformar ideias em soluções digitais que crescem
                    com o seu negócio.
                </p>
                <div class="flex flex-wrap items-start gap-4 z-50">
                    <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-ebony text-secondary-foreground shadow-sm hover:bg-ebony/90 border border-charcoal h-12 px-6 py-[14px]"
                        aria-label="Get started"><a href="/pricing">Try for free</a></button><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-12 px-6 py-[14px]"
                        aria-label="Get started"><a href="/pricing">Book a demo</a></button>
                </div>
            </div>
            <!-- <div class="bg-overlay-gray rounded-sm p-2 sm:p-3 md:p-4 lg:rounded-md">
                  <div
                      class="relative aspect-[522/572] size-full overflow-hidden rounded-sm lg:min-h-[572px] lg:min-w-[522px] lg:rounded-md">
                      <img alt="Aspect product interface showing connected banks" loading="lazy" decoding="async"
                          data-nimg="fill" class="object-cover object-left-top"
                          style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                          src="/images/homepage/aspect-hero-image.webp">
                  </div>
              </div> -->
        </div>
    </div>
</section>
<Faq />
