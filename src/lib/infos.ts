interface Info {
	id: string;
	title: string;
	description: string;
	category: 'ueber-uns' | 'wissenswertes-infos';
	featured?: boolean;
}

const infos: Info[] = [
	{
		id: 'arbeitsphilosophie',
		title: 'Arbeitsphilosophie',
		description:
			'In diesem Abschnitt erklären wir dir, was wir unter einem guten Tattoo verstehen und welche Stile wir anbieten.',
		category: 'ueber-uns',
		featured: true
	},
	{
		id: 'hygiene',
		title: 'Hygiene',
		description:
			'Informationen zu unserer Zertifizierung und unserem Umgang mit Materialien und Farben.',
		category: 'wissenswertes-infos',
		featured: true
	},
	{
		id: 'faq',
		title: 'Häufige Fragen',
		description:
			'Hier findest du Antworten auf alle möglichen Fragen, die wir im Studio regelmässig hören.',
		category: 'wissenswertes-infos',
		featured: true
	},
	{
		id: 'geschichte',
		title: 'Geschichte',
		description:
			'Hier erfährst du alles über die Gründung und Entwicklung unseres Studios, von den Anfängen im Jahre 1997 bis heute.',
		category: 'ueber-uns',
		featured: true
	},
	{
		id: 'vorgehen',
		title: 'Vorgehen',
		description: 'Wie gehe ich vor, wenn ich ein Tattoo haben möchte?',
		category: 'wissenswertes-infos'
	},
	{
		id: 'risiken',
		title: 'Risiken',
		description: 'Informationen zu möglichen Risiken bei einer Tätowierung.',
		category: 'wissenswertes-infos'
	},
	{
		id: 'pflegeanleitung',
		title: 'Pflegeanleitung',
		description: 'Die Schritt für Schritt Anleitung für die Pflege einer frischen Tätowierung.',
		category: 'wissenswertes-infos'
	}
];

export default infos;
