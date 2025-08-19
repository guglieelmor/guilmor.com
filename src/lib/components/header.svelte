<script>
	import EvervaultCard from './ui/EvervaultCard/EvervaultCard.svelte';
</script>

<header
	class="container mx-auto flex max-w-[1200px] flex-col justify-center border-r-0 border-l-0 border-gray-700 bg-black px-2.5 lg:border-r lg:border-l lg:px-0"
>
	<div class="relative border-r border-l border-gray-700 lg:border-r-0 lg:border-l-0">
		<div
			class="group pointer-events-none absolute inset-0 flex size-full flex-col items-center justify-center self-start"
		>
			<img
				alt="hero background"
				loading="lazy"
				decoding="async"
				data-nimg="fill"
				class="size-full object-cover"
				style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
				src="/layout/ai-header.png"
			/>
		</div>
		<div class="grid gap-1 py-30 lg:grid-cols-[1fr_auto] lg:py-30 lg:pr-12 lg:pl-12">
			<div class="flex flex-col items-start justify-center gap-5 px-8 lg:gap-8 lg:px-0">
				<h1
					class="z-10 text-4xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
				>
					Design & Tecnologia
				</h1>
				<p class="font-inter-tight text-mid-gray z-10 text-sm md:text-lg lg:text-xl">
					Estratégia, consultoria e desenvolvimento para transformar ideias em soluções digitais que
					crescem com o seu negócio.
				</p>
			</div>
		</div>
	</div>
	<div class="g-gradient h-1">&nbsp;</div>
	<div
		class="bg-obsidian flex flex-col items-start justify-start overflow-x-auto rounded-none border-t border-b-0 border-gray-700 p-0 lg:basis-1/4 lg:flex-row lg:border-b"
	>
		<div
			class="h-full min-h-56 w-full items-start justify-start rounded-none border-r border-b border-l border-gray-700 px-6 py-12 text-start whitespace-normal text-foreground lg:border-b-0 lg:border-l-0 lg:p-8"
		>
			<div class="flex h-full w-full justify-between gap-2">
				<div>
					<h3 class="text-base font-semibold">Design de Interfaces</h3>
					<p class="mt-2 text-sm text-foreground">
						Criamos interfaces intuitivas e esteticamente atraentes que proporcionam experiências
						memoráveis para os usuários.
					</p>
				</div>
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
					class="lucide lucide-layout size-4 shrink-0"
				>
					<rect x="3" y="3" width="18" height="18" rx="2"></rect>
					<path d="M3 9h18M9 21V9"></path>
				</svg>
			</div>
		</div>
		<div
			class="h-full min-h-56 w-full items-start justify-start rounded-none border-r border-b border-l border-gray-700 px-6 py-12 text-start whitespace-normal text-foreground lg:border-b-0 lg:border-l-0 lg:p-8"
		>
			<div class="flex h-full w-full justify-between gap-2">
				<div>
					<h3 class="text-base font-semibold">Desenvolvimento de Apps</h3>
					<p class="mt-2 text-sm text-foreground">
						Construímos aplicativos móveis e web escaláveis, garantindo desempenho e integração
						perfeita com sistemas existentes.
					</p>
				</div>
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
					class="lucide lucide-smartphone size-4 shrink-0"
				>
					<rect x="5" y="2" width="14" height="20" rx="2"></rect>
					<path d="M12 18h.01"></path>
				</svg>
			</div>
		</div>
		<div
			class="lg:border-r-dark-gray h-full min-h-56 w-full items-start justify-start rounded-none border-r border-b border-l border-gray-700 px-6 py-12 text-start whitespace-normal text-foreground lg:border-b-0 lg:border-l-0 lg:p-8"
		>
			<div class="flex h-full w-full justify-between gap-2">
				<div>
					<h3 class="text-base font-semibold">Consultoria em Tecnologia</h3>
					<p class="mt-2 text-sm text-foreground">
						Auxiliamos empresas a escolherem as melhores soluções digitais, otimizando processos e
						reduzindo custos operacionais.
					</p>
				</div>
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
					class="lucide lucide-settings size-4 shrink-0"
				>
					<circle cx="12" cy="12" r="3"></circle>
					<path
						d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l0 0a2 2 0 1 1-2.83 2.83l0 0a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l0 0a2 2 0 1 1-2.83-2.83l0 0a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l0 0a2 2 0 1 1 2.83-2.83l0 0a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l0 0a2 2 0 1 1 2.83 2.83l0 0a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
					>
					</path>
				</svg>
			</div>
		</div>
		<div
			class="h-full min-h-56 w-full items-start justify-start rounded-none border-r border-b border-l border-gray-700 px-6 py-12 text-start whitespace-normal text-foreground lg:border-b-0 lg:border-l-0 lg:p-8"
		>
			<div class="flex h-full w-full justify-between gap-2">
				<div>
					<h3 class="text-base font-semibold">Otimização de Processos</h3>
					<p class="mt-2 text-sm text-foreground">
						Automatizamos tarefas e integramos sistemas para aumentar eficiência e produtividade em
						qualquer fluxo de trabalho.
					</p>
				</div>
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
					class="lucide lucide-activity size-4 shrink-0"
				>
					<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
				</svg>
			</div>
		</div>
	</div>
	<div
		class="flex flex-col gap-1 border-r border-l border-gray-700 bg-black p-3 lg:flex-row lg:border-r-0 lg:border-l-0"
	>
		<div class="items-startp-4 relative mx-auto flex h-[20rem] max-w-sm flex-col pb-20">
			<EvervaultCard text="Site" />
			<h2 class="mt-4 px-5 text-sm font-light text-black dark:text-white">
				Contrução de sites institucionais, landing pages e e-commerces.
			</h2>
		</div>
		<div class="items-startp-4 relative mx-auto flex h-[20rem] max-w-sm flex-col pb-20">
			<EvervaultCard text="SaaS" />
			<h2 class="mt-4 px-5 text-sm font-light text-black dark:text-white">
				Desenvolvimento de plataformas personalizadas para atender às necessidades do seu negócio.
			</h2>
		</div>
		<div class="items-startp-4 relative mx-auto flex h-[20rem] max-w-sm flex-col pb-20">
			<EvervaultCard text="Cloud" />
			<h2 class="mt-4 px-5 text-sm font-light text-black dark:text-white">
				Soluções em nuvem para escalabilidade, segurança e eficiência operacional.
			</h2>
		</div>
	</div>
</header>

<style>
	.g-gradient {
		background: linear-gradient(
			228deg,
			#fdfdfd,
			#ff5454,
			#54ff79,
			#5485ff,
			#ba54ff,
			#ff54bc,
			#ecff54,
			#dfdfdf,
			#0c96b6,
			#0cb647,
			#970cb6
		);
		background-size: 1000% 2200%;
		animation: animBackground 40s ease infinite;
	}
	@keyframes animBackground {
		0% {
			background-position: 0% 54%;
		}
		50% {
			background-position: 100% 47%;
		}
		100% {
			background-position: 0% 54%;
		}
	}
</style>
