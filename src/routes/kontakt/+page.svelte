<script lang="ts">
	import { base } from '$app/paths';
	import members from '$lib/members';
	import Title from '$lib/Title.svelte';
	import Map from '../Map.svelte';
</script>

<Title
	title="Kontakt"
	description="Auf diesen Wegen kannst du mit uns und dem Studio Kontakt aufnehmen."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto py-16">
		<div class="grid md:grid-cols-2 gap-12">
			<div>
				<h2 class="h2 font-bold mb-4">Studio</h2>
				<p><a class="anchor" href="tel:+41313110067">031 311 00 67</a></p>
				<p class="mb-4">
					<a class="anchor" href="mailto:32tattoobern@gmail.com">32tattoobern@gmail.com</a>
				</p>
				<p>Rathausgasse 24</p>
				<p>3011 Bern</p>
			</div>

			<div>
				<h2 class="h2 font-bold mb-4">Tättowierer:innen</h2>
				<ul class="list">
					{#each members as member (member.id)}
						<li>
							<a class="anchor" href="{base}/tattoos/{member.id}"
								>{member.name}
								{#if member.subtitle}({member.subtitle}){/if}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h2 class="h2 font-bold mb-4">Öffnungszeiten</h2>
				<p>Mo - Fr: 12:00 - 18:30</p>
				<p>Sa: 12:00 - 17:00</p>
				<p>So: Geschlossen</p>
			</div>
		</div>
	</div>
</section>

<section>
	<Map />
</section>
