<!-- <script>
    import ModeToggle from "./mode-toggle.svelte";
</script> -->

<navbar
    class="border-b border-gray-300 dark:border-gray-700 flex justify-center bg-black relative z-50 h-20 px-2.5 lg:px-0">
    <div class="bg-black border-b border-r border-l border-gray-700 container flex max-w-[1200px] h-20 items-center">
        <div class="flex w-full items-center justify-between">
            <a class="flex items-center gap-2" href="/">
                <img class="border-r border-gray-700" alt="Guilmor" loading="lazy" width="75" height="75" decoding="async" data-nimg="1"
                    style="color:transparent" src="guilmor.svg" />
            </a>
            <div class="flex items-center justify-center mr-4">
                <!-- <ModeToggle /> -->
            </div>
        </div>
    </div>
    <div
        class="border-t-dark-gray bg-obsidian pointer-events-none absolute inset-x-0 top-full container flex h-[calc(100vh-80px)] -translate-y-full flex-col border-t px-2.5 opacity-0 transition duration-300 ease-in-out lg:hidden lg:px-0">
        <div class="border-dark-gray h-[calc(100vh-80px)] border-x px-5">
            <nav class="mt-6 flex flex-1 flex-col gap-6">
                <div class="">
                    <button class="flex w-full items-center justify-between text-lg tracking-[-0.36px] text-foreground"
                        aria-label="Product menu" aria-expanded="false">
                        Product
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="lucide lucide-chevron-right h-4 w-4 transition-transform"
                            aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                    <div
                        class="border-b-dark-gray ml-1 max-h-0 space-y-3 overflow-hidden border-b opacity-0 transition-all">
                        <a class="flex items-start gap-3 rounded-md p-2 hover:bg-accent" href="/features">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-feather text-mid-gray size-6 shrink-0">
                                <path
                                    d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z">
                                </path>
                                <path d="M16 8 2 22"></path>
                                <path d="M17.5 15H9"></path>
                            </svg>
                            <div>
                                <div class="font-medium text-foreground">Features</div>
                                <p class="text-sm text-muted-foreground">
                                    Streamline is built on the habits that make the best product teams successful
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <a class="text-lg tracking-[-0.36px] text-foreground" href="/about">About us</a><a
                    class="text-lg tracking-[-0.36px] text-foreground" href="/pricing">Pricing</a><a
                    class="text-lg tracking-[-0.36px] text-foreground" href="/faq">FAQ</a><a
                    class="text-lg tracking-[-0.36px] text-foreground" href="/blog">Blog</a><a
                    class="text-lg tracking-[-0.36px] text-foreground" href="/contact">Contact</a>
            </nav>
        </div>
    </div>
</navbar>
