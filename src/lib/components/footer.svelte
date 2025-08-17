<script>
	const year = new Date().getFullYear();
</script>

<footer
	class="relative z-50 flex justify-center border-t border-b border-gray-700 bg-black px-2.5 lg:px-0"
>
	<div class="container max-w-[1200px] border-r border-l border-gray-700 bg-black">
		<div class="grid p-0 lg:grid-cols-2">
			<div class="border-b-0 border-gray-700 px-6 py-10 lg:border-b lg:px-8 lg:py-12">
				<h3 class="mb-4 text-2xl font-bold">Menu</h3>
				<ul class="space-y-3">
					<li>
						<a class="transition-colors hover:text-muted-foreground lg:text-lg" href="/">/</a>
					</li>
					<li>
						<a class="transition-colors hover:text-muted-foreground lg:text-lg" href="/faq">FAQ</a>
					</li>
					<li>
						<a class="transition-colors hover:text-muted-foreground lg:text-lg" href="/sobre"
							>Sobre</a
						>
					</li>
					<li>
						<a class="transition-colors hover:text-muted-foreground lg:text-lg" href="/contato"
							>Contato</a
						>
					</li>
				</ul>
			</div>
			<div class="border-b border-gray-700 px-6 py-10 lg:border-l lg:px-8 lg:py-12">
				<div class="flex items-center gap-6 lg:justify-end">
					<a
						aria-label="https://www.facebook.com/people/Guilmor/61569401139546/"
						class="transition-colors hover:text-muted-foreground"
						href="https://www.facebook.com/people/Guilmor/61569401139546/"
					>
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
							class="lucide lucide-facebook"
						>
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
						</svg>
					</a>
					<a
						aria-label="https://www.linkedin.com/company/guilmorsoftwares"
						class="transition-colors hover:text-muted-foreground"
						href="https://www.linkedin.com/company/guilmorsoftwares"
					>
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
							class="lucide lucide-linkedin"
						>
							<path
								d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
							>
							</path>
							<rect width="4" height="12" x="2" y="9"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="grid border-b border-gray-700 lg:grid-cols-2">
			<div class="flex flex-col justify-center px-6 py-10 lg:max-w-md lg:px-8 lg:py-12">
				<div class="max-w-md">
					<p class="text-sm text-foreground">GUILMOR</p>
					<p class="font-inter-tight text-mid-gray text-xs">
						Oferecemos soluções tecnológicas sob medida e também atuamos em diferentes setores com
						produtos prontos que aceleram resultados.
					</p>
				</div>
			</div>
			<div class="flex justify-start px-6 py-10 lg:justify-end lg:px-8 lg:py-12">
				<a href="/" class="cursor-pointer">
					<img
						alt="Guilmor"
						loading="lazy"
						width="90"
						height="52"
						decoding="async"
						data-nimg="1"
						class="border border-gray-800 invert dark:invert-0"
						style="color:transparent"
						src="guilmor.svg"
					/>
				</a>
			</div>
		</div>
		<div class="grid gap-2 px-6 py-4 sm:grid-cols-2 lg:px-8">
			<div>
				<p class="text-xs text-gray-400">
					Copyright © {year} GUILMOR. <br /> Todos os direitos reservados. Guilmor Tecnologia em Software
					Ltda. CNPJ: 62.251.346/0001-10
				</p>
			</div>
			<div class="flex flex-col items-center gap-2 text-gray-400 sm:flex-row sm:justify-end">
				<a class="text-xs underline hover:text-muted-foreground" href="/privacy"
					>Política de Privacidade</a
				>
				<a class="text-xs underline hover:text-muted-foreground" href="/terms">Termos de Uso</a>
				<a class="text-xs underline hover:text-muted-foreground" href="/subscription-terms"
					>Termos de Assinatura</a
				>
			</div>
		</div>
	</div>
</footer>
