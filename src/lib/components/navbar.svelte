<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import CircleHelpIcon from '@lucide/svelte/icons/circle-help';
	import CircleIcon from '@lucide/svelte/icons/circle';
	import CircleCheckIcon from '@lucide/svelte/icons/circle-check';

	const components: {
		title: string;
		href: string;
		description: string;
	}[] = [
		{
			title: 'Alert Dialog',
			href: '/docs/components/alert-dialog',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.'
		},
		{
			title: 'Hover Card',
			href: '/docs/components/hover-card',
			description: 'For sighted users to preview content available behind a link.'
		},
		{
			title: 'Progress',
			href: '/docs/components/progress',
			description:
				'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
		},
		{
			title: 'Scroll-area',
			href: '/docs/components/scroll-area',
			description: 'Visually or semantically separates content.'
		},
		{
			title: 'Tabs',
			href: '/docs/components/tabs',
			description:
				'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
		},
		{
			title: 'Tooltip',
			href: '/docs/components/tooltip',
			description:
				'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};

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

<navbar
	class="relative z-50 flex h-20 justify-center border-b border-gray-300 bg-black px-2.5 lg:px-0 dark:border-gray-700"
>
	<div
		class="container flex h-20 max-w-[1200px] items-center border-r border-b border-l border-gray-700 bg-black"
	>
		<div class="flex w-full items-center justify-between">
			<a class="flex items-center gap-2" href="/">
				<img
					class="border-r border-gray-700"
					alt="Guilmor"
					loading="lazy"
					width="75"
					height="75"
					decoding="async"
					data-nimg="1"
					style="color:transparent"
					src="guilmor.svg"
				/>
			</a>
			<div class="mr-4 flex items-center justify-center">
				{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
					<li>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									{href}
									class={cn(
										'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
										className
									)}
									{...restProps}
								>
									<div class="text-sm leading-none font-medium">{title}</div>
									<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
										{content}
									</p>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
				{/snippet}

				<NavigationMenu.Root viewport={false}>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Produtos</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li class="row-span-3">
										<NavigationMenu.Link
											class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
										>
											{#snippet child({ props })}
												<a {...props} href="/">
													<div class="mt-4 mb-2 text-lg font-medium">GUILMOR</div>
													<p class="text-sm leading-tight text-muted-foreground">
														Tecnologia, Desenvolvimento e Inovação
													</p>
												</a>
											{/snippet}
										</NavigationMenu.Link>
									</li>
									{@render ListItem({
										href: '/',
										title: 'Consultoria Personalizada',
										content:
											'Entendemos seu negócio e oferecemos soluções sob medida para cada desafio.'
									})}
									{@render ListItem({
										href: '/',
										title: 'Desenvolvimento de Projetos',
										content: 'Transformamos ideias em produtos digitais funcionais e escaláveis.'
									})}
									{@render ListItem({
										href: '/',
										title: 'Suporte e Manutenção',
										content: 'Acompanhamos seu projeto de perto para garantir desempenho contínuo.'
									})}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>FAQ</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-1 lg:w-[400px]">
									{#each faqs as component, i (i)}
										{@render ListItem({
											href: '/faq',
											title: component.question,
											content: component.answer
										})}
									{/each}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href="/sobre" class={navigationMenuTriggerStyle()}>Sobre</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href="/contato" class={navigationMenuTriggerStyle()}>Contato</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>
		</div>
	</div>
</navbar>
