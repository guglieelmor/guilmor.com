<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Faq from '$lib/components/faq.svelte';
</script>

<svelte:head>
	<title>Contato</title>
</svelte:head>

<div class="h-screen">
	<Navbar />
	<div
		class="relative flex justify-center border-t border-b border-gray-700 bg-black px-2.5 lg:px-0"
	>
		<div class="container max-w-[1200px] border-r border-l border-gray-700 bg-black">
			<div
				class="border-b-dark-gray border-r-dark-gray border-l-dark-gray grid grid-cols-1 border-r border-b border-l lg:grid-cols-2"
			>
				<div
					class="lg:border-r-dark-gray border-b-dark-gray items-center border-b px-6 py-8 lg:border-r lg:border-b-0 lg:px-16 lg:py-16"
				>
					<h2 class="mb-2.5 text-3xl font-medium tracking-tight text-foreground lg:text-4xl">
						Bora conversar?
					</h2>
					<p class="leading-relaxed text-muted-foreground lg:text-lg">
						Se você tiver alguma dúvida, feedback ou precisar de suporte, nossa equipe está aqui
						para ajudar.
					</p>
				</div>
				<div class="bg-black">
					<div class="px-6 py-8 lg:px-16 lg:py-16">
						<div class="grid grid-cols-1 lg:grid-cols-2">
							<div>
								<div class="flex flex-col gap-10">
									<div>
										<p class="font-semibold text-foreground">E-mail</p>
										<a
											class="mt-2.5 text-sm font-medium tracking-tight text-muted-foreground"
											href="mailto:guilmor.softwares@gmail.com">guilmor.softwares@gmail.com</a
										>
									</div>
									<div>
										<p class="font-semibold text-foreground">Fone</p>
										<a
											class="mt-2.5 text-sm font-medium tracking-tight text-muted-foreground"
											href="tel:+38612345678">&nbsp;+51&nbsp;99686-4382</a
										>
									</div>
									<div>
										<p class="font-semibold text-foreground">Endereço</p>
										<a class="mt-2.5 text-sm font-medium tracking-tight text-muted-foreground"
											>Avenida João Gualberto, 1342, Sala 505 Andar 05 Cond Urban Office e
											Hotelbloco Urban Office - Curitiba - PR
										</a>
									</div>
								</div>
							</div>
							<div class="mt-10 lg:mt-0">
								<div class="flex lg:w-full lg:items-end lg:justify-end">
									<p class="mb-2.5 font-semibold text-foreground lg:text-right"></p>
								</div>
								<div class="flex w-full items-end gap-2 lg:justify-end">
									<a
										class="text-foreground hover:text-muted-foreground"
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
											class="lucide lucide-facebook size-4"
											><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
											></path></svg
										>
									</a>
									<a
										class="text-foreground hover:text-muted-foreground"
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
											class="lucide lucide-linkedin size-4"
											><path
												d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
											></path><rect width="4" height="12" x="2" y="9"></rect><circle
												cx="4"
												cy="4"
												r="2"
											></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a
				class="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-ebony hover:bg-ebony/90 border-dark-gray inline-flex h-20 w-full cursor-pointer items-center justify-center gap-2 rounded-none border bg-[#03c101] px-6 py-[14px] text-2xl font-bold whitespace-nowrap text-secondary-foreground shadow-sm transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
				type="button"
				target="_blank"
				href="https://api.whatsapp.com/send?phone=5551996864382&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es"
			>
				<img src="/wpp.png" alt="Whatsapp" width="100" /> WhatsApp
			</a>
		</div>
	</div>
	<Footer />
</div>
