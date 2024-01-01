import andreas from '$lib/images/andreas.jpg';
import toebu from '$lib/images/toebu.jpg';
import paddy from '$lib/images/paddy.jpg';
const gallery = Object.values(
	import.meta.glob('$lib/images/gallery/*/*.{jpg,jpeg,png}', {
		eager: true,
		as: 'url'
	})
);

export interface Member {
	id: string;
	name: string;
	subtitle?: string;
	styles: string[];
	portrait: string;
	instagram: string;
	email?: string;
	phone: string;
	cv: string[];
	bio: string[];
	gallery?: string[];
}

const members: Member[] = [
	{
		id: 'andreas-schwertfeger',
		name: 'Andreas Schwertfeger',
		styles: ['Traditional (Europäisch-Amerikanisch)', 'Allrounder'],
		portrait: andreas,
		instagram: 'andreasschwertfeger',
		email: '32tattoo@bluewin.ch',
		phone: '079 330 10 39',
		cv: [
			'1994 Lehrabschluss als Schreiner',
			'1996 - 2008 Sozialarbeiter in der Flüchtlingshilfe und Jugendarbeit',
			'Seit 1999 Tätowierer im 32 Tattoo',
			'Ab 2005 Geschäftsinhaber vom 32 Tattoo',
			'Zusammenarbeit an mehreren Conventions mit Herbert Hoffmann in Deutschland und der Schweiz anfangs der 2000er Jahre'
		],
		bio: [
			'Ändu war schon als Kind fasziniert von Tattoos und wusste bereits damals, dass er später auch einmal zu den Tätowierten gehören würde. So kam es, dass er sich schon früh tätowieren liess, unter anderem von Lars, dem Gründer vom 32 Tattoo, tätowieren liess und viel Zeit bei ihm im Shop verbracht hat. Als sich ihm die Möglichkeit bot, dort das Tätowier-Handwerk zu erlernen, hat er diese Chance sofort mit viel Begeisterung ergriffen und später sogar das Studio von Lars übernommen. Seine liebsten Inspirationsquellen sind die alten traditionellen Tätowierungen der Jahre 1890-1950 von Tätowierern wie George Burchett oder Amund Dietzel.',
			'Ihm gefällt besonders deren Stilmix aus asiatischen Einflüssen mit traditionellen europäischen und amerikanischen Tattoos. Obwohl diese oftmals technisch nicht perfekt sind, bekommen sie gerade dadurch ihren ganz eigenen Charme mit viel Seele. Dadurch sind sie an Authentizität und Ehrlichkeit kaum zu übertreffen. Sehr gerne führt er auch die verschiedensten Kundenwünsche aus allen möglichen Stilrichtungen von Tribals über ornamentale Tattoos bis hin zu Schriften und den aktuellen Trends aus, solange diese seinen Vorstellungen eines guten, soliden Tattoos entsprechen.'
		],
		gallery
	},
	{
		id: 'toebu',
		name: 'Töbu',
		subtitle: 'Blake Teardrop',
		styles: ['Black & white', 'Allrounder'],
		portrait: toebu,
		instagram: 'blaketeardrop',
		phone: '078 913 66 85',
		cv: [
			'2003/2004 Vorkurs an der Schule für Gestaltung Bern',
			'2007 Lehrabschluss Dekorationsgestalter, Messebau und 3D',
			'Ab 2007 Tätowierer im 32 Tattoo Bern',
			'2009 Wechsel ins Calvaria Tattoo',
			'Seit 2013 wieder zurück im 32 Tattoo',
			'Gasttätowierer in Barcelona und aktuell in Wien'
		],
		bio: [
			'Töbu interessiert sich vor allem für die alten französischen und russischen Gefängnistätowierungen aus den 1920er und 1930er Jahren. Diese Tattoos wurden oft von Hand oder mit einer selbst gebauten Tattoomaschine z.B. einem umgebauten Rasierapparat und nur einer Nadel gestochen. Dadurch verfügen sie über einen sehr eigenen, einfachen und rohen Charme und zeichnen sich durch einen expressionistischen und teilweise auch durch einen Art Brut Stil aus. Die Motive haben oft die Bedeutung eines geheimen Codes, der den Rang und Status sowie die begangenen Straftaten des Trägers für andere Kriminelle verrät.',
			'Die Themen drehen sich oft um das Leiden, die Trauer sowie um Sex und Gewalt, aber auch um die Freiheit, Hoffnung, Sehnsüchte und die Liebe. Er ist insbesondere auf diese Art von Tätowierungen spezialisiert, macht aber auch gerne andere traditionelle sowie Blackwork und auch feinere Tattoos. Er hat ein Faible für sehr dunkle und düstere Motive.'
		],
		gallery: []
	},
	{
		id: 'paddy',
		name: 'Paddy',
		subtitle: 'Studio Heinz',
		styles: ['Traditional', 'Dotwork'],
		portrait: paddy,
		instagram: 'studioheinz',
		email: 'patwue.tattoo@gmail.com',
		phone: '079 724 89 30',
		cv: [
			'2015 Matura mit Schwerpunktfach Bildnerischem Gestalten',
			'2016-2017 Studium Fine Arts an der Hochschule der Künste Bern',
			'2018-2019 erste Erfahrungen im Floating Art Tattoo Studio in Thun',
			'Danach ein Jahr selbstständig in eigenem Studio',
			'Seit anfang 2020 im 32 Tattoo Bern'
		],
		bio: [
			'Paddy war während des Gymnasiums in einem Austauschjahr in den USA in Ann Arbor in Michigan. Die vielen lokalen Tattoo Shops haben ihr Interesse für American Traditional Tattoos geweckt, so dass sie sich dort mit 18 Jahren ihre ersten Tattoos stechen liess. Zurück in der Schweiz hat sie sich dann vor allem mit der realistischen Ölmalerei beschäftigt, um ein Portfolio für die Hochschule der Künste zusammenzustellen. Während des doch sehr theoretischen Kunststudiums wurde ihr bewusst, dass sie lieber praktisch arbeiten und tätowieren möchte.',
			'Also hat sie ihr Studium abgebrochen und sich fortan dem Tätowieren gewidmet. Sie tätowiert am liebsten traditionelle Tattoos in ihrem sehr eigenen, ausdrucksstarken Stil der von klassischen farbigen Motiven bis hin zu modernen Interpretationen reicht, die nur mit schwarzen Linien und Flächen auskommen. Sehr gerne sticht sie auch Dotwork und Etching Style Tattoos.'
		],
		gallery: []
	}
];

const membersWithGallery = members.map((m) => ({
	...m,
	gallery: gallery.filter((g) => g.includes(m.id))
}));

export default membersWithGallery;
