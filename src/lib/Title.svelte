<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title} | 32Tattoo</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="px-4 md:px-8 bg-surface-500">
	<div class="max-w-3xl mx-auto">
		<div class="py-16">
			<h1 class="h1 mb-6 font-bold">{title}</h1>
			<p class="h4">{description}</p>
		</div>
	</div>
</section>
