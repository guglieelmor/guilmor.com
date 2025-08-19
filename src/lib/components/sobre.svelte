<script>
	import Faq from './faq.svelte';
</script>

<section>
	<div
		class="border-b-dark-gray border-l-dark-gray border-r-dark-gray relative aspect-video w-full border-r border-b border-l md:aspect-[16/6]"
	>
		<img
			alt="Modern workspace with an iMac displaying 'DO MORE'"
			loading="lazy"
			decoding="async"
			data-nimg="fill"
			class="object-cover"
			src="/layout/team.webp"
			style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
		/>
	</div>
	<div class="px-2.5 lg:px-0">
		<div class="border-dark-gray container border border-t-0 p-0">
			<div class="flex flex-col items-center md:flex-row-reverse">
				<div
					class="border-b-dark-gray md:border-l-dark-gray w-full border-b md:w-1/2 md:border-0 md:border-l"
				>
					<img
						alt="Life at FinSight"
						width="800"
						height="800"
						decoding="async"
						data-nimg="1"
						class="aspect-square w-full object-cover"
						src="/layout/pc.png"
						style="color: transparent;"
					/>
				</div>
				<div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
					<h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">Site</h2>
					<p class="leading-relaxed text-muted-foreground">
						Criamos sistemas web sob medida, totalmente adaptados às necessidades do seu negócio.
						Desde a arquitetura da informação até funcionalidades específicas, cada detalhe é
						planejado para otimizar processos, integrar ferramentas, aumentar a produtividade e
						oferecer uma experiência intuitiva para os usuários. Nossos sistemas são escaláveis,
						seguros e preparados para acompanhar o crescimento da sua empresa.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="px-2.5 lg:px-0">
		<div class="border-dark-gray container border border-t-0 p-0">
			<div class="flex flex-col items-center md:flex-row">
				<div
					class="border-b-dark-gray md:border-r-dark-gray w-full border-b md:w-1/2 md:border-0 md:border-r"
				>
					<img
						alt="Wellness &amp; Perks"
						width="800"
						height="800"
						decoding="async"
						data-nimg="1"
						class="aspect-square w-full object-cover"
						src="/layout/mobile.png"
						style="color: transparent;"
					/>
				</div>
				<div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
					<h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">SaaS</h2>
					<p class="leading-relaxed text-muted-foreground">
						Oferecemos soluções SaaS (Software como Serviço) que permitem acesso rápido, seguro e
						escalável às ferramentas do seu negócio. Nossos sistemas são hospedados na nuvem, com
						atualizações automáticas e suporte contínuo, garantindo alta disponibilidade,
						performance otimizada e facilidade de integração com outros serviços digitais.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="px-2.5 lg:px-0">
		<div class="border-b border-gray-700 container border border-t-0 p-0">
			<div class="flex flex-col items-center md:flex-row-reverse">
				<div
					class="border-b-dark-gray md:border-l-dark-gray w-full border-b md:w-1/2 md:border-0 md:border-l"
				>
					<img
						alt="Life at FinSight"
						width="800"
						height="800"
						decoding="async"
						data-nimg="1"
						class="aspect-square w-full object-cover"
						src="/layout/servidor.png"
						style="color: transparent;"
					/>
				</div>
				<div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
					<h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">Cloud</h2>
					<p class="leading-relaxed text-muted-foreground">
						Desenvolvemos soluções em cloud que garantem flexibilidade, escalabilidade e alta
						disponibilidade para sua empresa. Nossos sistemas aproveitam a infraestrutura da nuvem
						para integrar serviços, otimizar processos e reduzir custos operacionais, oferecendo
						segurança avançada, backups automáticos e acesso remoto confiável de qualquer
						dispositivo. Com foco na performance e experiência do usuário, sua operação digital fica
						preparada para crescer sem limites.
					</p>
				</div>
			</div>
		</div>
	</div>
	<Faq />
</section>
