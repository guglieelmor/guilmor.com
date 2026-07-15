<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { HTMLAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	let open = $state(false);
	const toggleMenu = () => (open = !open);
	const closeMenu = () => (open = false);

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

<nav
	class="relative z-40 flex h-20 justify-center border-b border-gray-700 bg-background px-2.5 lg:px-0"
>
	<div
		class="container flex h-20 max-w-[1200px] items-center border-r border-b border-l border-gray-700 bg-background"
	>
		<div class="flex w-full items-center justify-between">
			<a class="flex items-center gap-2" href={resolve('/')}>
				<img
					class="border-r border-gray-700"
					alt="Guilmor"
					loading="lazy"
					width="75"
					height="75"
					decoding="async"
					data-nimg="1"
					style="color:transparent"
					src="/logo/guilmor.svg"
				/>
			</a>
			<button
				type="button"
				class="fixed top-7 right-4 z-50 flex h-6 w-6 cursor-pointer flex-col justify-between sm:hidden"
				onclick={toggleMenu}
				aria-label={open ? 'Fechar menu' : 'Abrir menu'}
				aria-expanded={open}
			>
				<span
					class="block h-1 transform rounded bg-white transition duration-300"
					class:rotate-45={open}
					class:translate-y-3={open}
				>
				</span>
				<span class="block h-1 rounded bg-white transition duration-300" class:opacity-0={open}>
				</span>
				<span
					class="block h-1 transform rounded bg-white transition duration-300"
					class:-rotate-45={open}
					class:-translate-y-3={open}
				>
				</span>
			</button>
			{#if open}
				<div
					transition:slide={{ duration: 300 }}
					class="bg-opacity-90 fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 bg-background text-2xl text-white"
				>
					<a href={resolve('/')} aria-current={page.url.pathname === '/' ? 'page' : undefined} onclick={closeMenu}>/</a>
					<a href={resolve('/faq')} aria-current={page.url.pathname === '/faq' ? 'page' : undefined} onclick={closeMenu}>FAQ</a>
					<a href={resolve('/sobre')} aria-current={page.url.pathname === '/sobre' ? 'page' : undefined} onclick={closeMenu}>Sobre</a>
					<a href={resolve('/contato')} aria-current={page.url.pathname === '/contato' ? 'page' : undefined} onclick={closeMenu}>Contato</a>
				</div>
			{/if}
			<div class="mr-4 hidden items-center justify-center sm:flex">
				{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
					<li>
						<NavigationMenu.Link>
							{#snippet child()}
								<!-- href já vem resolvido pelo chamador via resolve() -->
								<!-- eslint-disable svelte/no-navigation-without-resolve -->
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
								<!-- eslint-enable svelte/no-navigation-without-resolve -->
							{/snippet}
						</NavigationMenu.Link>
					</li>
				{/snippet}

				<NavigationMenu.Root viewport={false}>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href={resolve('/')} class={navigationMenuTriggerStyle()}>/</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Produtos</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li class="row-span-3">
										<NavigationMenu.Link
											class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
										>
											{#snippet child({ props })}
												<a {...props} href={resolve('/')}>
													<div class="mt-4 mb-2 text-lg font-medium">GUILMOR</div>
													<p class="text-sm leading-tight text-muted-foreground">
														Tecnologia, Desenvolvimento e Inovação
													</p>
												</a>
											{/snippet}
										</NavigationMenu.Link>
									</li>
									{@render ListItem({
										href: resolve('/'),
										title: 'Consultoria Personalizada',
										content:
											'Entendemos seu negócio e oferecemos soluções sob medida para cada desafio.'
									})}
									{@render ListItem({
										href: resolve('/'),
										title: 'Desenvolvimento de Projetos',
										content: 'Transformamos ideias em produtos digitais funcionais e escaláveis.'
									})}
									{@render ListItem({
										href: resolve('/'),
										title: 'Suporte e Manutenção',
										content: 'Acompanhamos seu projeto de perto para garantir desempenho contínuo.'
									})}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href={resolve('/faq')} class={navigationMenuTriggerStyle()}>FAQ</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href={resolve('/sobre')} class={navigationMenuTriggerStyle()}>Sobre</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href={resolve('/contato')} class={navigationMenuTriggerStyle()}>Contato</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>
		</div>
	</div>
</nav>

<style>
	a:hover {
		color: #ccc;
		transition: color 0.2s;
	}
</style>
