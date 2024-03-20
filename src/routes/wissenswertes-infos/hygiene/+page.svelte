<script lang="ts">
	import Title from '$lib/Title.svelte';
	import cleaning from '$lib/images/hygiene/cleaning.png';
	import needles from '$lib/images/hygiene/needles.png';
	import colors from '$lib/images/hygiene/colors.png';
	import tips from '$lib/images/hygiene/tips.png';
</script>

<Title
	title="Hygiene"
	description="Unser Studio wird regelmässig vom Kantonalen Laboratorium kontrolliert."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto flex flex-col py-16 gap-4">
		<p>
			Wir arbeiten professionell und verwenden stets Einwegmaterial und Schutzhüllen. Griffstücke
			und Nadelführungen aus Metall werden nach dem Gebrauch zur Aufbereitung in einem
			Instrumentendesinfektionsbad mit Ultraschallwellen gereinigt und anschliessend im Autoklav
			sterilisiert. Die Arbeitsflächen sowie alle Gegenstände, die mit Blut in Kontakt kommen,
			werden nach dem Tätowieren mit Oberflächendesinfektionsmittel gereinigt.
		</p>

		<div class="grid md:grid-cols-2 gap-4">
			<img class="rounded-md" src={cleaning} alt="Hygieneartikel" />
			<img class="rounded-md" src={needles} alt="Nadeln" />
		</div>

		<p>
			Wir legen grossen Wert auf qualitativ hochwertige Produkte und arbeiten mit geprüften
			Tattoofarben. Wir arbeiten nach bestem Wissen und Gewissen und tätowieren so, wie wir selbst
			gerne tätowiert werden.
		</p>

		<div class="grid md:grid-cols-2 gap-4">
			<img class="rounded-md" src={colors} alt="Farben" />
			<img class="rounded-md" src={tips} alt="Köpfe" />
		</div>

		<h2 class="h3 font-bold">Links</h2>
		<ul class="list-disc pl-4">
			<li>
				Kantonales Labor: <a
					class="anchor"
					href="https://www.vol.be.ch/vol/de/index/direktion/organisation/kl.html"
					>https://www.vol.be.ch/vol/de/index/direktion/organisation/kl.html</a
				>
			</li>
		</ul>
	</div>
</section>
