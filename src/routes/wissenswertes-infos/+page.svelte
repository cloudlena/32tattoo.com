<script lang="ts">
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import infos from '$lib/infos';

	const knowledgeInfos = infos.filter((i) => i.category === 'wissenswertes-infos');
</script>

<Title
	title="Wissenswertes / Infos"
	description="Hier erfährst du Wissenswertes über uns uns das Tättowieren allgemein."
/>

<section class="py-16 px-4 md:px-8">
	<div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-16">
		{#each knowledgeInfos as info (info.id)}
			<div>
				<h3 class="h3 font-bold mb-4">{info.title}</h3>
				<p class="mb-4">{info.description}</p>
				<p><a class="anchor" href="{base}/{info.category}/{info.id}">Mehr</a></p>
			</div>
		{/each}
	</div>
</section>
