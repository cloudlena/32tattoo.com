interface Question {
	question: string;
	answers: string[];
}

const questions: Question[] = [
	{
		question: 'Was kostet ein Tattoo?',
		answers: [
			'Der Preis eines Tattoos hängt von folgenden Faktoren ab: Grösse, Details, Stil, Körperstelle und Arbeitsaufwand.',
			'Aus diesem Grund können wir dir erst dann einen ungefähren Preis nennen, wenn wir diese Angaben kennen. Der Endpreis wird vom jeweiligen Tätowierer oder der Tätowiererin festgelegt.',
			'Ein Tattoo ist ein Kunstwerk, das du dein Leben lang auf deinem Körper tragen wirst. Deshalb sind wir der Meinung, dass hier nicht gespart werden sollte.',
			"So sagte schon Norman Keith Collins, besser bekannt als «Sailor Jerry» (amerikanischer Tättowierer 1911-1973) «Good tattoos ain't cheap and cheap tattoos ain't good!»"
		]
	},
	{
		question: 'Wieso ist ein kleines Tattoo vergleichsweise teuer?',
		answers: [
			'Grundsätzlich sind ganz kleine Tattoos eher teuer im Vergleich zu grossen, weil wir unabhängig von der Arbeitszeit dieselben Fixkosten haben (Arbeitsmaterial, Sterilisation, Reinigung).',
			'Deshalb empfehlen wir, mehrere kleine Tattoos in einer Sitzung zu machen. So können wir dir einen besseren Gesamtpreis anbieten.'
		]
	},
	{
		question: 'Wie bezahle ich mein Tattoo?',
		answers: [
			'Das Tattoo wird immer bar bezahlt. Geldautomaten hat es in der Nähe des Studios. Die Anzahlung wird vom Endpreis abgezogen.'
		]
	},
	{
		question: 'Ist tätowieren schmerzhaft?',
		answers: [
			'Ja es ist schmerzhaft, aber es kommt auf die Körperstelle und das individuelle Schmerzempfinden an. Während es manche Leute als sehr starken Schmerz wahrnehmen, hören wir gerade oft von Frauen, dass sie das Epilieren schlimmer finden. Es ist sicher immer besser, wenn du dich auf etwas sehr Schmerzhaftes einstellst und dann überrascht bist, dass es gar nicht so schlimm ist, als umgekehrt.',
			'Grundsätzlich schmerzt es dort am meisten, wo der Mensch auch sonst am sensibelsten ist, weil die Nerven den Schmerz weiterleiten. Am wenigsten weh tut es an der Aussenseite der Arme, weshalb sich dieser Ort besonders gut für ein erstes Tattoo eignet. Weitere Faktoren sind die verwendeten Tattoomaschinen und unterschiedlichen Nadeln.',
			'Wenn du ausgeschlafen bist und genug gegessen hast, sind die Schmerzen viel besser erträglich!'
		]
	},
	{
		question: 'Wann muss das Tattoo nachgestochen werden?',
		answers: [
			'In der Regel sollte das Tattoo nicht nachgestochen werden müssen. Es kann aber sein, dass beim Verheilen Farbe entweicht oder sonstige Veränderungen auftreten und es deshalb überarbeitet werden muss. Deshalb empfehlen wir, dass du ungefähr nach einem Monat zur Nachkontrolle kommst, damit wir schauen können, ob allenfalls etwas aufgefrischt werden muss.',
			'Das Nachstechen im ersten Jahr ist gratis und gehört zur Garantie auf unserer Arbeit.'
		]
	},
	{
		question: 'Gibt es allergische Reaktionen?',
		answers: [
			'Bei schwarzer Farbe gibt es kaum, bei anderen Farben kann es in ganz seltenen Fällen zu allergischen Reaktionen kommen. Falls du bekannte Allergien hast, musst du uns vorgängig unbedingt informieren.'
		]
	},
	{
		question: 'Wie bereite ich mich optimal auf das Tätowieren vor?',
		answers: [
			'Verzichte bereits am Vortag auf Alkohol (verdünnt das Blut), Drogen und Blut verdünnende Medikamente.',
			'Achte darauf, dass du ausgeschlafen bist und genügend gegessen hast.',
			'Nimm evtl. etwas zu essen und zu trinken mit. Traubenzucker, Süssgetränke, Orangensaft, Schokoriegel etc. eignen sich gut, um den Körper mit genügend Zucker zu versorgen.',
			'Verzichte auf Solarium Besuche oder ausgiebiges Sonnenbaden.',
			'Trage schwarze oder alte Kleider, die auch Farbspritzer abbekommen dürfen.'
		]
	},
	{
		question: 'Wie verhalte ich mich am besten während des Tätowierens?',
		answers: [
			'Versuche dich möglichst gut zu entspannen und ruhig zu atmen. Manchmal hilft es, die Augen zu schliessen oder Musik zu hören. Wichtig ist, dass du dich möglichst nicht bewegst. Melde dich bitte unverzüglich, falls du eine Pause brauchst.'
		]
	},
	{
		question: 'Wir werden dich nicht tätowieren, wenn du...',
		answers: [
			'alkoholisiert bist, vorher Drogen konsumiert hast oder sonst nicht urteilsfähig bist.',
			'krank bist und dadurch dein Immunsystem geschwächt ist.',
			'an Infektionskrankheiten leidest.',
			'Kortison Tabletten oder Antibiotika nehmen musst.',
			'frisch geimpft wurdest.',
			'einen Sonnenbrand hast, die Hautstelle verletzt oder frisch vernarbt ist.',
			'schwanger bist oder stillst.'
		]
	}
];

export default questions;
