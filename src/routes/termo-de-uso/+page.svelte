<script>
	import Content from '$lib/components/content.svelte';
</script>

<svelte:head>
	<title>Termo de Uso</title>
</svelte:head>
<Content>
	<section
		class="mx-auto flex max-w-[1200px] flex-col items-start justify-start overflow-x-auto rounded-none bg-black p-0 px-2.5 lg:basis-1/4 lg:flex-row lg:px-0"
	>
		<div
			class="h-full min-h-56 w-full items-start justify-start rounded-none border-t border-r border-l border-gray-700 text-start whitespace-normal text-foreground"
		>
			<div class="bg-jet border-dark-gray border border-t-0">
				<div class="px-6 py-12 text-center md:py-32">
					<h1 class="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
						Termos de Uso
					</h1>
				</div>
			</div>
			<div class="space-y-8 px-6 py-12 text-base leading-relaxed text-muted-foreground">
				<p>
					Os presentes <strong>Termos de Uso</strong> regulam o acesso e a utilização dos serviços
					oferecidos pela
					<strong>GUILMOR TECNOLOGIA EM SOFTWARE LTDA</strong>, inscrita no CNPJ sob o nº
					<strong>62.251.346/0001-10</strong>. Ao utilizar nossos serviços, o usuário declara estar
					ciente e de acordo com as condições aqui estabelecidas.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
				<p>
					Ao acessar ou utilizar os serviços disponibilizados pela GUILMOR TECNOLOGIA EM SOFTWARE
					LTDA, o usuário concorda em cumprir estes Termos de Uso, bem como a legislação aplicável.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">2. Serviços Oferecidos</h2>
				<p>
					A GUILMOR TECNOLOGIA EM SOFTWARE LTDA oferece soluções tecnológicas em software, incluindo
					sistemas web, aplicativos, consultoria e ferramentas digitais. Os serviços podem ser
					modificados, atualizados ou descontinuados a qualquer momento, sem aviso prévio.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">3. Responsabilidades do Usuário</h2>
				<p>O usuário se compromete a:</p>
				<ul class="list-disc space-y-2 pl-6">
					<li>Utilizar os serviços apenas para fins lícitos e em conformidade com estes Termos;</li>
					<li>Não violar direitos de terceiros, incluindo propriedade intelectual;</li>
					<li>
						Não praticar atos que comprometam a segurança, disponibilidade ou integridade dos
						sistemas;
					</li>
					<li>Fornecer informações verdadeiras e atualizadas sempre que solicitado.</li>
				</ul>

				<h2 class="text-2xl font-semibold text-foreground">4. Propriedade Intelectual</h2>
				<p>
					Todos os direitos relacionados a marcas, logotipos, sistemas, softwares, conteúdos e
					demais elementos pertencem exclusivamente à GUILMOR TECNOLOGIA EM SOFTWARE LTDA, sendo
					vedado o uso sem autorização prévia e expressa.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">5. Limitação de Responsabilidade</h2>
				<p>A GUILMOR TECNOLOGIA EM SOFTWARE LTDA não se responsabiliza por:</p>
				<ul class="list-disc space-y-2 pl-6">
					<li>Indisponibilidade temporária dos serviços;</li>
					<li>Erros, falhas técnicas ou problemas decorrentes de uso inadequado;</li>
					<li>
						Danos causados por fatores externos, como falhas de conexão ou ataques cibernéticos fora
						do controle da empresa.
					</li>
				</ul>

				<h2 class="text-2xl font-semibold text-foreground">6. Privacidade e Proteção de Dados</h2>
				<p>
					O tratamento de dados pessoais segue as diretrizes estabelecidas na
					<a href="/politica-de-privacidade" class="text-primary underline"
						>Política de Privacidade</a
					>.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">7. Alterações dos Termos</h2>
				<p>
					A GUILMOR TECNOLOGIA EM SOFTWARE LTDA poderá alterar estes Termos de Uso a qualquer
					momento. Recomendamos que o usuário consulte esta página periodicamente.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">8. Foro e Legislação Aplicável</h2>
				<p>
					Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito
					o foro da comarca de
					<strong>[inserir cidade/UF da sede da empresa]</strong>, com renúncia a qualquer outro.
				</p>

				<h2 class="text-2xl font-semibold text-foreground">9. Contato</h2>
				<p>
					Em caso de dúvidas ou solicitações relacionadas a estes Termos de Uso, entre em contato
					conosco:
				</p>
				<p class="mt-2">
					<strong>Razão Social:</strong> GUILMOR TECNOLOGIA EM SOFTWARE LTDA<br />
					<strong>CNPJ:</strong> 62.251.346/0001-10
				</p>
			</div>
		</div>
	</section>
</Content>
