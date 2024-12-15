import andreas from '$lib/images/andreas.jpg';
import toebu from '$lib/images/toebu.jpg';
import alain from '$lib/images/alain.jpg';
import fabian from '$lib/images/fabian.jpg';
import jeff from '$lib/images/jeff.jpg';
import taru from '$lib/images/taru.jpg';
import vanessa from '$lib/images/vanessa.jpg';
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
	phone?: string;
	cv?: string[];
	bio?: string[];
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
		gallery: []
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
		id: 'fabian',
		name: 'Fabian Odermatt',
		styles: ['Traditional', 'Black & Gray'],
		portrait: fabian,
		instagram: 'fabianodermatt',
		email: 'fabian.o@gmx.ch',
		gallery: []
	},
	{
		id: 'taru',
		name: 'Taru',
		styles: ['Ornamental', 'Traditional'],
		portrait: taru,
		instagram: 'tarutattoos',
		email: 'tarumaariawoodtli@gmail.com',
		phone: '079 317 36 02',
		cv: [
			'2004 Lehrabschluss als Steinbildhauerin',
			'2004-2008 freie künstlerische Arbeit',
			'2008-2018 Arbeit als Steinbildhauerin in Anstellung',
			'2015-2017 Ausbildung zur Yogalehrerin',
			'2021-2024 Ausbildung zur Tätowiererin im 32Tattoo Bern',
			'ab Herbst 2024 Tätowiererin im 32Tattoo Bern'
		],
		gallery: []
	},
	{
		id: 'vanessa',
		name: 'vanessa.a.doutora',
		styles: ['Fine-line black & gray', 'Allrounder'],
		portrait: vanessa,
		instagram: 'vanessa.a.doutora',
		email: 'vanessa.a.doutora.tattoos@gmail.com',
		gallery: []
	},
	{
		id: 'alain',
		name: 'Alain Roth',
		styles: ['Traditional'],
		portrait: alain,
		instagram: 'alainrouge.tt',
		email: 'alain.roth89@gmail.com',
		phone: '079 838 14 12',
		bio: [
			'Mein Name ist Alain Roth. Geboren am 7.12.1989 und aufgewachsen in einem kleinen Dorf namens Rohrbach. Durch die sehr lebhaften Erinnerungen meiner Kindheit hatte ich schon viele Aufklebe-Tattoos an mir und war sehr schnell begeistert durch diesen Kindheitseffekt von Körperkunst. So wie z. B. Schmetterlinge auf dem Arm oder ein Einhorn auf dem Bauch. Und das erste Mal mit einem richtigen Tattoo kam ich durch meinen Cousin in Berührung. Er hatte so einen richtig stylischen Totenkopf mit violetten Highlights auf seinem Oberarm tätowiert. Als Kind dachte ich natürlich, dass das bestimmt nicht echt ist und probierte es halt bei ihm abzuwaschen… Doch erfolglos… Und da kam ich natürlich nicht mehr aus dem Staunen. Aber, als das natürlich noch in weiter Ferne war, musste ich halt abwarten bis zu meinem 18. Geburtstag. Kaum 18 und schon lief ich zu einem Tätowierer namens Tom in seinem Studio in Langenthal. Ab diesem Zeitpunkt wusste ich, es war bestimmt nicht das Letzte. Sobald ich natürlich von zu Hause ausgezogen bin, machte ich mich halt dann mal ein paar Jahre später selber ans Tätowieren ran. Wie jeder Anfänger hatte ich natürlich keine Ahnung und tätowierte mich halt zuerst selbst. Aber ganz schnell dann auch mal Kollegen von mir. Ab dann wusste ich, ich muss das erlernen und wollte richtig gut darin werden, und so entschloss ich mich halt herumzufragen, um mehr davon zu erfahren, doch leider erfolglos, weil halt die Tattooszene ein enges Bündnis ist und man nicht einfach dazukommt. Deswegen liess ich mich immer mehr tätowieren und achtete auf die Materialien, die sie verwendeten, und die genauen Abläufe des Aufbaus bis hin zum Tattoo. Ich arbeite dann von zu Hause aus für etwa 1 Jahr, bis ich dann mal von einem Studio in Bern angefragt wurde. Ich war zu diesem Zeitpunkt bei den Jungs von Outlawz für etwa 4 Jahre. Es war eine wundervolle Zeit, mit sehr vielen neuen Eindrücken in meinem Leben und ich lebte erst mal einen kleinen Traum. Doch irgendwie war mir das noch zu wenig, ich wollte mehr wissen, als einfach nur loszutätowieren. Als ich natürlich in Bern meinen Fuss gesetzt habe und die Tattooszene langsam kannte, fragte mich halt dann ein sehr guter Freund an, namens Tobias, der im 32 Tattoo Studio arbeitete. Ich willigte direkt zu, weil die Jungs einfach wissen, was sie machen.  Ich erlernte dann schnell das Zeichen von Flashes aus alten guten Zeiten, mit Pinsel, wie man eine Maschine aufbaut und Bücher über Jahrzehnte Wissen. Ich wusste schnell, dass ich zu Hause angekommen war. Ich ging bei ihnen 2 Jahre durch die Hölle und wurde gefördert, wo es nur geht. Dank den Jungs bin ich heute, was ich heute bin.'
		],
		gallery: []
	},
	{
		id: 'jeff',
		name: 'Jeffrey S',
		styles: ['Traditional', 'Allrounder'],
		portrait: jeff,
		instagram: 'jstattooing',
		phone: '079 940 94 42',
		gallery: []
	}
];

const membersWithGallery = members.map((m) => ({
	...m,
	gallery: gallery.filter((g) => g.includes(m.id))
}));

export default membersWithGallery;
