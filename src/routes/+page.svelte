<script>
    import Header from '$lib/components/header.svelte';
    import Faq from '$lib/components/faq.svelte';
    import Content from '$lib/components/content.svelte';
</script>

<svelte:head>
    <title>GUILMOR - Tecnologia, Desenvolvimento e Inovação</title>
</svelte:head>
<Content>
    <Header />
    <section
        class="container mx-auto flex max-w-[1200px] flex-col justify-center border-r-0 border-l-0 border-gray-700 bg-black px-2.5 lg:border-r lg:border-l lg:px-0">
        <div class="relative border-r border-l border-gray-700 lg:border-r-0 lg:border-l-0">
            <div
                class="flex flex-col gap-1 border-r border-l border-gray-700 bg-black lg:flex-row lg:border-r-0 lg:border-l-0">
                <div>
                    <div class="px-2.5 lg:px-0">
                        <div class="border-dark-gray container border border-t-0 p-0">
                            <div class="flex flex-col items-center md:flex-row-reverse">
                                <div class="flex w-full items-center justify-center md:w-1/2">
                                    <div class="g-gradient square square1 opacity-5"></div>
                                    <div class="g-gradient square square2 opacity-10"></div>
                                    <div class="g-gradient square square3 opacity-15"></div>
                                </div>
                                <div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
                                    <h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">Site</h2>
                                    <p class="leading-relaxed text-muted-foreground">
                                        Criamos sistemas web sob medida, totalmente adaptados às necessidades do seu
                                        negócio. Desde a arquitetura da informação até funcionalidades específicas, cada
                                        detalhe é planejado para otimizar processos, integrar ferramentas, aumentar a
                                        produtividade e oferecer uma experiência intuitiva para os usuários. Nossos
                                        sistemas são escaláveis, seguros e preparados para acompanhar o crescimento da
                                        sua empresa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-2.5 lg:px-0">
                        <div class="border-dark-gray container border border-t-0 p-0">
                            <div class="flex flex-col items-center md:flex-row">
                                <div
                                    class="border-b-dark-gray md:border-r-dark-gray w-full border-b md:w-1/2 md:border-0 md:border-r">
                                    <div class="relative flex w-full items-center justify-center md:w-1/2">
                                        <div class="g-gradient circle circle1"></div>
                                        <div class="g-gradient circle circle2"></div>
                                        <div class="g-gradient circle circle3"></div>
                                    </div>
                                </div>
                                <div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
                                    <h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">SaaS</h2>
                                    <p class="leading-relaxed text-muted-foreground">
                                        Oferecemos soluções SaaS (Software como Serviço) que permitem acesso rápido,
                                        seguro e escalável às ferramentas do seu negócio. Nossos sistemas são hospedados
                                        na nuvem, com atualizações automáticas e suporte contínuo, garantindo alta
                                        disponibilidade, performance otimizada e facilidade de integração com outros
                                        serviços digitais.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-2.5 lg:px-0">
                        <div class="container border border-t-0 border-b border-gray-700 p-0">
                            <div class="flex flex-col items-center md:flex-row-reverse">
                                <div
                                    class="border-b-dark-gray md:border-l-dark-gray w-full border-b md:w-1/2 md:border-0 md:border-l">
                                    <div class="relative flex w-full items-center justify-center md:w-1/2">
                                        <div class="g-gradient-tri tri tri1"></div>
                                        <div class="g-gradient-tri tri tri2"></div>
                                        <div class="g-gradient-tri tri tri3"></div>
                                    </div>
                                </div>
                                <div class="w-full px-6 py-12 text-foreground md:w-1/2 md:px-16 md:py-20">
                                    <h2 class="mb-2.5 text-3xl font-medium tracking-tight md:text-4xl">Cloud</h2>
                                    <p class="leading-relaxed text-muted-foreground">
                                        Desenvolvemos soluções em cloud que garantem flexibilidade, escalabilidade e
                                        alta disponibilidade para sua empresa. Nossos sistemas aproveitam a
                                        infraestrutura da nuvem para integrar serviços, otimizar processos e reduzir
                                        custos operacionais, oferecendo segurança avançada, backups automáticos e acesso
                                        remoto confiável de qualquer dispositivo. Com foco na performance e experiência
                                        do usuário, sua operação digital fica preparada para crescer sem limites.
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
    .g-gradient {
        background: linear-gradient(228deg,
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
                #970cb6);
        background-size: 1000% 2200%;
        animation: animBackground 40s ease infinite;
        position: absolute;
        border-radius: 16px;
        opacity: 0.85;
        mix-blend-mode: screen;
    }

    .square1 {
        width: 100px;
        height: 100px;
        animation:
            animBackground 40s ease infinite,
            float1 8s ease-in-out infinite;
    }

    .square2 {
        width: 130px;
        height: 130px;
        animation:
            animBackground 40s ease infinite,
            float2 10s ease-in-out infinite;
    }

    .square3 {
        width: 160px;
        height: 160px;
        animation:
            animBackground 40s ease infinite,
            float3 12s ease-in-out infinite;
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

    @keyframes float1 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(20px, -15px) rotate(10deg) scale(1.1);
        }

        50% {
            transform: translate(-15px, 20px) rotate(-10deg) scale(0.95);
        }

        75% {
            transform: translate(10px, -20px) rotate(5deg) scale(1.05);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    @keyframes float2 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(-25px, 10px) rotate(-15deg) scale(1.15);
        }

        50% {
            transform: translate(20px, -20px) rotate(20deg) scale(0.9);
        }

        75% {
            transform: translate(-10px, 15px) rotate(-5deg) scale(1.1);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    @keyframes float3 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(15px, 25px) rotate(20deg) scale(0.9);
        }

        50% {
            transform: translate(-20px, -15px) rotate(-20deg) scale(1.2);
        }

        75% {
            transform: translate(25px, -10px) rotate(15deg) scale(1.05);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    .circle1 {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        animation:
            animBackground 40s ease infinite,
            float1 8s ease-in-out infinite;
    }

    .circle2 {
        width: 130px;
        height: 130px;
        border-radius: 100%;
        animation:
            animBackground 40s ease infinite,
            float2 10s ease-in-out infinite;
    }

    .circle3 {
        width: 160px;
        height: 160px;
        border-radius: 100%;
        animation:
            animBackground 40s ease infinite,
            float3 12s ease-in-out infinite;
    }

    .g-gradient-tri {
        background: linear-gradient(228deg,
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
                #970cb6);
        background-size: 1000% 2200%;
        animation: animBackground 40s ease infinite;
        position: absolute;
        opacity: 0.9;
        mix-blend-mode: screen;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }


    .triangle1 {
        width: 120px;
        height: 120px;
        animation: animBackground 40s ease infinite,
            float1 9s ease-in-out infinite;
    }

    .triangle2 {
        width: 150px;
        height: 150px;
        animation: animBackground 40s ease infinite,
            float2 11s ease-in-out infinite;
    }

    .triangle3 {
        width: 180px;
        height: 180px;
        animation: animBackground 40s ease infinite,
            float3 13s ease-in-out infinite;
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

    @keyframes float1 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(15px, -20px) rotate(15deg) scale(1.1);
        }

        50% {
            transform: translate(-20px, 15px) rotate(-10deg) scale(0.9);
        }

        75% {
            transform: translate(10px, 20px) rotate(5deg) scale(1.05);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    @keyframes float2 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(-25px, 10px) rotate(-20deg) scale(1.15);
        }

        50% {
            transform: translate(20px, -25px) rotate(20deg) scale(0.95);
        }

        75% {
            transform: translate(-15px, 20px) rotate(-5deg) scale(1.1);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    @keyframes float3 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        20% {
            transform: translate(20px, 15px) rotate(10deg) scale(0.85);
        }

        40% {
            transform: translate(-25px, -10px) rotate(-15deg) scale(1.2);
        }

        60% {
            transform: translate(25px, -20px) rotate(25deg) scale(0.9);
        }

        80% {
            transform: translate(-10px, 25px) rotate(-10deg) scale(1.15);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }



    .tri1 {
        width: 120px;
        height: 120px;
        animation: animBackground 40s ease infinite,
            floatGO1 8s ease-in-out infinite;
    }

    .tri2 {
        width: 160px;
        height: 160px;
        animation: animBackground 40s ease infinite,
            floatGO2 10s ease-in-out infinite;
    }

    .tri3 {
        width: 200px;
        height: 200px;
        animation: animBackground 40s ease infinite,
            floatGO3 12s ease-in-out infinite;
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

    @keyframes floatGO1 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(15px, -15px) rotate(15deg) scale(1.1);
        }

        50% {
            transform: translate(-20px, 20px) rotate(-10deg) scale(0.9);
        }

        75% {
            transform: translate(10px, 10px) rotate(5deg) scale(1.05);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    @keyframes floatGO2 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        25% {
            transform: translate(-25px, 10px) rotate(-20deg) scale(1.15);
        }

        50% {
            transform: translate(20px, -20px) rotate(20deg) scale(0.95);
        }

        75% {
            transform: translate(-15px, 25px) rotate(-5deg) scale(1.1);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }

    @keyframes floatGO3 {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }

        20% {
            transform: translate(20px, 15px) rotate(10deg) scale(0.85);
        }

        40% {
            transform: translate(-25px, -10px) rotate(-15deg) scale(1.2);
        }

        60% {
            transform: translate(25px, -20px) rotate(25deg) scale(0.9);
        }

        80% {
            transform: translate(-10px, 25px) rotate(-10deg) scale(1.15);
        }

        100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
    }
</style>
