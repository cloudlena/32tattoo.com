<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Team from '../Team.svelte';
</script>

<Title
	title="Tattoos"
	description="Unsere Tätowierer:innen, ihre Biographien und eine Auswahl ihrer Arbeiten."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto flex py-16">
		<Team />
	</div>
</section>
