<script lang="ts">
	import Title from '$lib/Title.svelte';
	import studio from '$lib/images/studio/studio.png';
	import counter from '$lib/images/studio/counter.png';
	import wall from '$lib/images/studio/wall.png';
	import chair from '$lib/images/studio/chair.png';
	import mirror from '$lib/images/studio/mirror.png';
	import pictures from '$lib/images/studio/pictures.png';
	import bed from '$lib/images/studio/bed.png';
	import door from '$lib/images/studio/door.png';
	import lamp from '$lib/images/studio/lamp.png';

	interface Image {
		alt: string;
		src: string;
		wide?: boolean;
	}

	const images: Image[] = [
		{ alt: 'Studio', src: studio, wide: true },
		{ alt: 'Tresen', src: counter },
		{ alt: 'Wand', src: wall },
		{ alt: 'Stuhl', src: chair },
		{ alt: 'Spiegel', src: mirror },
		{ alt: 'Bilder', src: pictures },
		{ alt: 'Liege', src: bed },
		{ alt: 'Tür', src: door },
		{ alt: 'Lampe', src: lamp }
	];
</script>

<Title
	title="Studio"
	description="Wir begrüssen euch herzlich in unserem Tattoo-Studio in der schönen Berner Altstadt."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto py-16">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each images as image (image.alt)}
				<div class={image.wide ? 'md:col-span-2 lg:col-span-3' : ''}>
					<img class="w-full rounded-md" src={image.src} alt={image.alt} />
				</div>
			{/each}
		</div>
	</div>
</section>
