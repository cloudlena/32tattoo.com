<script lang="ts">
	import { base } from '$app/paths';
	import Title from '$lib/Title.svelte';
</script>

<Title
	title="Risiken"
	description="Hier findest du Informationen zu möglichen Risiken bei einer Tätowierung."
/>

<section class="px-4 md:px-8">
	<div class="max-w-3xl mx-auto flex flex-col py-16 gap-4">
		<p>
			Haut ist nicht Papier! Aufgrund der Beschaffenheit der Haut kann es vorkommen, dass Farbe
			verläuft auch wenn sehr sorgfältig gearbeitet wird. Vorsicht ist insbesondere bei
			problematischem Bindegewebe geboten. Vor allem am inneren Oberarm und am Oberschenkel kann es
			vorkommen, dass die Farbe einen bläulichen Flecken um das Tattoo bildet. Das passiert am
			ehesten nach starken Gewichts Zu- und -Abnahmen.
		</p>
		<p>
			Das Tattoo wird sich bereits während der Heilung etwas verändern und im Laufe der Zeit werden
			die Linien dicker und Farbe kann sich ausbreiten oder verblassen.
		</p>
		<p>
			Allergische Reaktionen auf Farbe sind möglich, kommen aber selten vor. Bei schwarzer Farbe ist
			das Risiko sehr gering.
		</p>
		<p>
			Ein Tattoo ist immer eine Verletzung der Haut. Deshalb sind Veränderungen wie z.B. Narben-
			oder Knötchenbildung (durch Farbeinkapselungen) möglich. Bei unsachgemässer Pflege kann es zu
			Infektionen, Entzündungen und allergischen Reaktionen kommen.
		</p>
		<p>Für weitere Informationen siehe auch folgende Themen:</p>

		<ul class="list-disc pl-4">
			<li><a class="anchor" href="{base}/wissenswertes-infos/hygiene">Hygiene</a></li>
			<li>
				<a class="anchor" href="{base}/wissenswertes-infos/pflegeanleitung">Pflegeanleitung</a>
			</li>
			<li><a class="anchor" href="{base}/wissenswertes-infos/faq">Häufige Fragen</a></li>
		</ul>

		<h2 class="h3 font-bold">Wie gehe ich vor, wenn ich einen Termin absagen muss?</h2>
		<ol class="list-decimal pl-4">
			<li>
				Melde dich möglichst frühzeitig bei uns ab (spätestens 24h vorher), damit wir keinen
				Arbeitsausfall erleiden und den Termin mit einem anderen Kunden belegen können.
			</li>
			<li>
				Falls du nicht zum Termin erscheinst und dich vorher nicht abgemeldet hast, verrechnen wir
				dir die Anzahlung.
			</li>
		</ol>
	</div>
</section>
