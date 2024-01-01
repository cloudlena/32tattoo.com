<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.member.name} | 32Tattoo</title>
</svelte:head>

<section class="px-4 md:px-8 bg-surface-500">
	<div class="max-w-3xl mx-auto">
		<div class="py-16 flex flex-col gap-4">
			<h1 class="h1 mb-6 font-bold">{data.member.name}</h1>
			<p>
				Instagram: <a
					class="anchor text-black"
					href="https://www.instagram.com/{data.member.instagram}/">@{data.member.instagram}</a
				>
			</p>
			<p>
				{#if data.member.email}
					E-Mail: <a class="anchor text-black" href="mailto:{data.member.email}"
						>{data.member.email}</a
					><br />
				{/if}
				Phone: <a class="anchor text-black" href="tel:{data.member.phone}">{data.member.phone}</a>
			</p>
		</div>
	</div>
</section>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto grid md:grid-cols-2 py-16">
		<div>
			<img src={data.member.portrait} alt={data.member.name} />
		</div>
		<div class="p-8 flex flex-col gap-4">
			<h2 class="h3 font-bold">Stile</h2>
			<p>{data.member.styles.join(', ')}</p>

			<h2 class="h3 font-bold">CV</h2>
			<ul class="list-disc pl-4">
				{#each data.member.cv as cvItem}
					<li class="mb-2">{cvItem}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="px-4 md:px-8 bg-surface-500">
	<div class="max-w-3xl mx-auto py-16 flex flex-col gap-4">
		<h2 class="h2 font-bold">Bio</h2>
		{#each data.member.bio as bioParagraph}
			<p>{bioParagraph}</p>
		{/each}
	</div>
</section>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto py-16">
		<h2 class="h2 font-bold mb-8">Gallery</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each data.member.gallery as image, i}
				<div>
					<img class="w-full" src={image} alt="{data.member.name} Bild {i + 1}" />
				</div>
			{/each}
		</div>
	</div>
</section>
