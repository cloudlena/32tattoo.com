<script lang="ts">
	import { base } from '$app/paths';
	import infos from '$lib/infos';
	import birdTiger from '$lib/images/bird-tiger.jpg';
	import dragon from '$lib/images/dragon.jpg';
	import sign from '$lib/images/sign.png';
	import Team from './Team.svelte';
	import Map from './Map.svelte';

	const featuredInfos = infos.filter((i) => i.featured);
</script>

<section class="px-4 md:px-8 pb-36 bg-surface-500">
	<div class="py-16 font-bold">
		<h1 class="h1 mb-4">
			As ancient as time,<br />
			as modern as tomorrow
		</h1>
		<p class="italic">LEONARD «STONEY» ST. CLAIR</p>
	</div>
	<div class="grid md:grid-cols-2 gap-6">
		<div class="flex justify-center">
			<img src={birdTiger} alt="Bird Tiger" />
		</div>
		<div class="flex justify-center">
			<img src={dragon} alt="Dragon" />
		</div>
	</div>
</section>

<section class="px-4 md:px-8 pb-36">
	<h2 class="h1 font-bold py-16">
		Tattoos<br />
		-<br />
		Das Team
	</h2>
	<Team />
</section>

<section class="px-4 md:px-8 pb-36 bg-surface-500">
	<h2 class="h1 font-bold py-16">
		Studio<br />
		-<br />
		Walk-ins welcome!
	</h2>
	<div class="grid md:grid-cols-2 items-center gap-4">
		<div>
			<img src={sign} alt="Sign" />
		</div>
		<div class="p-16">
			<div class="mb-12">
				<h3 class="h3 font-bold mb-4">Öffnungszeiten</h3>
				<p>Mo - Fr: 12:00 - 18:30</p>
				<p>Sa: 12:00 - 17:00</p>
				<p>So: Geschlossen</p>
			</div>
			<div>
				<h3 class="h3 font-bold mb-4">Adresse</h3>
				<p>Rathausgasse 24</p>
				<p class="mb-4">3011 Bern</p>
				<p><a class="anchor" href="{base}/studio">Zur Studio-Gallerie</a></p>
			</div>
		</div>
	</div>
</section>

<section class="px-4 md:px-8 pb-36">
	<h2 class="h1 font-bold py-16">
		Infos<br />
		-<br />
		Wissenswertes
	</h2>
	<div class="grid md:grid-cols-2 gap-16">
		{#each featuredInfos as info (info.id)}
			<div>
				<h3 class="h3 font-bold mb-4">{info.title}</h3>
				<p class="mb-4">{info.description}</p>
				<p><a class="anchor" href="{base}/{info.category}/{info.id}">Mehr</a></p>
			</div>
		{/each}
	</div>
</section>

<section>
	<Map />
</section>
