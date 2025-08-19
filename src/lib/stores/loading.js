import { writable } from 'svelte/store';

export const showLoading = writable(false);

// Inicializa baseado no sessionStorage
if (typeof sessionStorage !== 'undefined') {
  const loaded = sessionStorage.getItem('loadingShown') === 'true';
  if (!loaded) showLoading.set(true);

  // Atualiza sessionStorage sempre que mudar
  showLoading.subscribe(value => {
    if (!value) sessionStorage.setItem('loadingShown', 'true');
  });
}
