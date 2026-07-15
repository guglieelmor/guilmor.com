<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Content from '$lib/components/content.svelte';
</script>

<svelte:head>
	<title>GUILMOR - Tecnologia, Desenvolvimento e Inovação</title>
</svelte:head>
<Content>
	<Header />
	<section
		class="container mx-auto flex max-w-[1200px] flex-col justify-center border-r-0 border-l-0 border-gray-700 bg-background px-2.5 lg:border-r lg:border-l lg:px-0"
	>
		<div class="relative border-r border-l border-gray-700 lg:border-r-0 lg:border-l-0">
			<div
				class="flex flex-col gap-1 border-r border-l border-gray-700 bg-background lg:flex-row lg:border-r-0 lg:border-l-0"
			>
				<div>
					<div class="px-2.5 lg:px-0">
						<div class="container border border-t-0 border-gray-700 p-0">
							<div class="flex flex-col items-center md:flex-row-reverse">
								<div class="flex w-full items-center justify-center md:w-1/2">
									<div class="gradient-blob blob-square blob-float-1 h-[100px] w-[100px]"></div>
									<div class="gradient-blob blob-square blob-float-2 h-[130px] w-[130px]"></div>
									<div class="gradient-blob blob-square blob-float-3 h-[160px] w-[160px]"></div>
								</div>
								<div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
									<h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">Site</h2>
									<p class="leading-relaxed text-muted-foreground">
										Criamos sistemas web sob medida, totalmente adaptados às necessidades do seu
										negócio. Desde a arquitetura da informação até funcionalidades específicas,
										cada detalhe é planejado para otimizar processos, integrar ferramentas,
										aumentar a produtividade e oferecer uma experiência intuitiva para os
										usuários. Nossos sistemas são escaláveis, seguros e preparados para
										acompanhar o crescimento da sua empresa.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="px-2.5 lg:px-0">
						<div class="container border border-t-0 border-gray-700 p-0">
							<div class="flex flex-col items-center md:flex-row">
								<div class="w-full border-b border-gray-700 md:w-1/2 md:border-0 md:border-r">
									<div class="relative flex w-full items-center justify-center md:w-1/2">
										<div class="gradient-blob blob-circle blob-float-1 h-[100px] w-[100px]"></div>
										<div class="gradient-blob blob-circle blob-float-2 h-[130px] w-[130px]"></div>
										<div class="gradient-blob blob-circle blob-float-3 h-[160px] w-[160px]"></div>
									</div>
								</div>
								<div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
									<h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">SaaS</h2>
									<p class="leading-relaxed text-muted-foreground">
										Oferecemos soluções SaaS (Software como Serviço) que permitem acesso rápido,
										seguro e escalável às ferramentas do seu negócio. Nossos sistemas são
										hospedados na nuvem, com atualizações automáticas e suporte contínuo,
										garantindo alta disponibilidade, performance otimizada e facilidade de
										integração com outros serviços digitais.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="px-2.5 lg:px-0">
						<div class="container border border-t-0 border-b border-gray-700 p-0">
							<div class="flex flex-col items-center md:flex-row-reverse">
								<div class="w-full border-b border-gray-700 md:w-1/2 md:border-0 md:border-l">
									<div class="relative flex w-full items-center justify-center md:w-1/2">
										<div class="gradient-blob blob-tri blob-float-tri-1 h-[120px] w-[120px]"></div>
										<div class="gradient-blob blob-tri blob-float-tri-2 h-[160px] w-[160px]"></div>
										<div class="gradient-blob blob-tri blob-float-tri-3 h-[200px] w-[200px]"></div>
									</div>
								</div>
								<div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
									<h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">Cloud</h2>
									<p class="leading-relaxed text-muted-foreground">
										Desenvolvemos soluções em cloud que garantem flexibilidade, escalabilidade e
										alta disponibilidade para sua empresa. Nossos sistemas aproveitam a
										infraestrutura da nuvem para integrar serviços, otimizar processos e reduzir
										custos operacionais, oferecendo segurança avançada, backups automáticos e
										acesso remoto confiável de qualquer dispositivo. Com foco na performance e
										experiência do usuário, sua operação digital fica preparada para crescer sem
										limites.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</Content>

<style>
	/*
	 * Formas dos blobs decorativos: o gradiente animado e as curvas de
	 * flutuação (blob-float-*) vêm de app.css e são compartilhados com
	 * header.svelte — aqui só ficam as propriedades específicas de cada
	 * formato (posição, raio/recorte, opacidade, blend mode).
	 */
	.blob-square,
	.blob-circle {
		position: absolute;
		border-radius: 16px;
		opacity: 0.85;
		mix-blend-mode: screen;
	}

	.blob-circle {
		border-radius: 9999px;
	}

	.blob-tri {
		position: absolute;
		opacity: 0.9;
		mix-blend-mode: screen;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>
