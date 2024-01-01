<script lang="ts">
	import '../app.postcss';
	import { AppShell, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:head>
	<title>32Tattoo seit 1997 | 32Tattoo</title>
	<meta
		name="description"
		content="Dein Tattoostudio seit 1997 – der älteste Streetshop von Bern. Auch ohne Voranmeldung."
	/>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<main><slot /></main>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>
