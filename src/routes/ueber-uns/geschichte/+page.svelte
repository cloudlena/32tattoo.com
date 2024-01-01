<script lang="ts">
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
	import tuctuc from '$lib/images/geschichte/tuctuc.jpg';
	import beatman from '$lib/images/geschichte/beatman.png';
	import lars from '$lib/images/geschichte/lars.jpg';
	import downstairs from '$lib/images/geschichte/downstairs.png';
	import chairs from '$lib/images/geschichte/chairs.png';
	import wall from '$lib/images/geschichte/wall.png';
	import mirror from '$lib/images/geschichte/mirror.png';
	import stools from '$lib/images/geschichte/stools.png';
</script>

<Title
	title="Geschichte"
	description="Hier erfährst du mehr über unsere Geschichte und wie das Studio entstanden ist."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto flex flex-col py-16 gap-4">
		<p>
			Das „32 Tattoo“ wurde im Jahre 1997 von den beiden Tätowierern Lars und Horst (Jimmy Bones)
			sowie der Piercerin Sarah als erster klassischer Street Shop der Stadt Bern im Marzili
			gegründet.
		</p>
		<p>
			Namensgeber ist nicht wie von vielen Leuten vermutet die Hausnummer, sondern der legendäre
			32er Ford Hot Rod.
		</p>
		<p>
			Die beiden Gründer waren Rockabillies und hatten ein Faible für die Ästhetik und Kultur der
			30er-50er Jahre. Sie waren stark beeinflusst von der Musik, der Kleidung, den Tattoos und den
			Oldtimer Autos sowie den Motorrädern aus jener Zeit.
		</p>

		<div class="grid md:grid-cols-2 gap-4">
			<img src={tuctuc} alt="TucTuc" />
			<img src={beatman} alt="Beatman" />
		</div>

		<p>
			In den 90er Jahren erlebten die traditionellen Tätowierungen in den USA ein Revival an dem
			Künstler wie Eric Maaske und Daniel Higgs mit Neuinterpretationen von klassischen Motiven
			massgeblich beteiligt waren. Lars und Horst waren inspiriert von diesem simplen Old Style, der
			sich durch klare schwarze Linien und Schattierungen sowie kräftige Farben auszeichnet und
			waren in diesem Bereich Pioniere in der Schweiz. Ganz im Gegensatz zum sonstigen Trend der
			meisten anderen Tätowierer, die damals immer detaillierter und realistischer arbeiteten.
		</p>
		<p>
			Bereits ab 1995 stand Lars in brieflichen Kontakt mit der deutschen Tattoo Legende Herbert
			Hoffmann aus St. Pauli in Hamburg, mit dem ihn später eine Freundschaft verband.
		</p>
		<p>
			Ebenfalls pflegte er einen Austausch mit dem niederländischen Tätowierer und Seefahrer Albert
			Cornelissen und dem deutschen Karlmann Richter, die mit Hoffmann eng befreundet waren und
			zeitweise alle in seiner Tätowierstube gearbeitet haben. Albert Cornelissen war nach dem 2.
			Weltkrieg der erste wieder aktive Tätowierer in Holland. Herbert Hoffmann ging nach
			sowjetischer Kriegsgefangenschaft bei Christian Warlich, dem König der Tätowierer aus Hamburg,
			in die Lehre. Nach Warlichs Tod hatte Hoffmann zeitweise das einzige professionelle Tattoo
			Geschäft in ganz Deutschland.
		</p>
		<p>
			Hoffmann und Cornelissen waren Ikonen der traditionellen Tattoo Tradition und spielten vor
			allem in Europa eine sehr wichtige Rolle, um dieses Erbe zu bewahren.
		</p>

		<img src={lars} alt="Lars" />

		<p>
			1999 ergänzte Lars das Team mit <a class="anchor" href="{base}/tattoos/andreas-schwertfeger"
				>Ändu</a
			> als Lehrling, der heute Besitzer des Shops ist.
		</p>
		<p>
			Nach der grossen Überschwemmung der Aare im Jahre 2005 erfolgte der Umzug in die Berner
			Altstadt an die Rathausgasse.
		</p>
		<p>
			Im Laufe der Jahre wurde das Team stetig erneuert. <a
				class="anchor"
				href="{base}/tattoos/toebu">Töbu</a
			>
			und Jan machten ihre Lehre im 2007 und im 2009. Aktuell arbeitet ausserdem
			<a class="anchor" href="{base}/tattoos/paddy">Paddy</a> im 32 Tattoo.
		</p>
		<p>
			Langjährige Mitarbeiter waren zudem Vincent, der heute in den USA arbeitet und Dävu, der seine
			Lehre im 2011 absolviert hat und mittlerweile sein eigenes Tattoo Studio in Bern führt.
		</p>

		<div class="grid md:grid-cols-2 gap-4">
			<img class="md:col-span-2 w-full" src={downstairs} alt="Downstairs" />
			<img src={chairs} alt="Stühle" />
			<img src={wall} alt="Wand" />
			<img src={mirror} alt="Spiegel" />
			<img src={stools} alt="Barhocker" />
		</div>
	</div>
</section>
