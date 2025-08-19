<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const cookiesVisible = writable(false);

	onMount(() => {
		const accepted = localStorage.getItem('cookiesAccepted') === 'true';
		if (!accepted) {
			setTimeout(() => cookiesVisible.set(true), 1500);
		}
	});

	const acceptCookies = () => {
		localStorage.setItem('cookiesAccepted', 'true');
		cookiesVisible.set(false);
	};

	const declineCookies = () => {
		localStorage.setItem('cookiesAccepted', 'false');
		cookiesVisible.set(false);
		setTimeout(() => cookiesVisible.set(true), 1000);
	};
</script>

{#if $cookiesVisible}
	<div
		class="fixed bottom-20 z-40 w-full max-w-[450px] overflow-hidden rounded-lg bg-gray-900 shadow-2xl sm:left-4 sm:w-1/2 xl:w-1/4"
	>
		<div class="relative overflow-hidden px-8 pt-8">
			<div class="absolute -top-10 -right-10 text-gray-500">
				<svg
					width="120"
					height="119"
					viewBox="0 0 120 119"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						opacity="0.3"
						d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="flex flex-col pb-4 text-2xl">
				<small>Olá...</small>
				<span class="text-3xl font-bold">Este site usa Cookies</span>
			</div>
			<div class="pb-4">
				<p>
					Utilizamos cookies para melhorar sua experiência, personalizar conteúdos e analisar o
					tráfego. Ao continuar navegando, você concorda com nossa política de cookies.
				</p>
			</div>
		</div>
		<div class="flex w-full items-center justify-center border-t border-solid border-gray-200">
			<button
				class="flex-1 cursor-pointer border-r border-gray-200 px-4 py-3 text-white duration-150 hover:bg-gray-600 hover:text-white"
				on:click={declineCookies}
			>
				Não, obrigado!
			</button>
			<button
				class="flex-1 cursor-pointer px-4 py-3 text-white duration-150 hover:bg-gray-600 hover:text-white"
				on:click={acceptCookies}
			>
				Ok, aceito!
			</button>
		</div>
	</div>
{/if}

<button
	class="fixed bottom-5 left-4 z-40 cursor-pointer rounded-full bg-gray-700 px-2 py-2 text-sm text-white uppercase"
	on:click={() => cookiesVisible.update((v) => !v)}
>
	<svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="32" cy="32" r="30" fill="#000000" />
		<circle cx="22" cy="22" r="4" fill="#FFFFFF" />
		<circle cx="40" cy="28" r="3" fill="#FFFFFF" />
		<circle cx="34" cy="42" r="5" fill="#FFFFFF" />
	</svg>
</button>
