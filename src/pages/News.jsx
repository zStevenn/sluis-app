import { Paragraph, Title } from "../components/Text"
import Container from "../components/Container"
import { NewsItem } from "../components/News"

export default function News() {
	return (
		<Container className="px-8 pt-8 min-h-screen">
			<Title className="pb-4">Nieuws</Title>
			<Paragraph className="pb-8">
				Welkom op onze nieuwspagina waar u op de hoogte blijft van de laatste
				ontwikkelingen en gebeurtenissen binnen onze cafetaria. Hier vindt u
				recente nieuwsartikelen over onze nieuwe gerechten, aanbiedingen en
				meer. Blijf op de hoogte van alles wat er speelt in onze cafetaria en
				mis nooit meer een update!
			</Paragraph>

			{/* News grid */}
			<div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
				<NewsItem
					title="Allergielijst"
					date="22 April 2023"
					content="Wij zijn begonnen met het in kaart brengen van de allergenen in onze gerechten. We hebben een lijst gemaakt van de allergenen die in onze gerechten voorkomen. Deze komt binnenkort live te staan op onze website. Als u vragen heeft over de allergenen in onze gerechten, heeft u binnenkort makkelijk toegang tot deze gegevens!"
				/>
				<NewsItem
					title="Nieuwe website!"
					date="4 Januari 2023"
					content="Onze nieuwe website-ontwerp wordt gelanceerd in januari 2023 en we verwachten dat dit leidt tot een toename van bezoekersaantallen en interactie op onze site. We blijven ook werken aan het uitbreiden van onze website met meer waardevolle content. We zijn enthousiast om jullie binnenkort te verwelkomen op onze vernieuwde site."
				/>
				<NewsItem
					title="Prijsverhoging"
					date="1 Januari 2023"
					content="Onze recente prijsverhoging is van kracht om onze kosten te dekken en om onze producten en diensten te verbeteren. Als u vragen heeft over de prijsverhoging of hulp nodig heeft bij het begrijpen ervan, neem dan gerust contact met ons op."
				/>
				<NewsItem
					title="Tegels vervangen"
					date="12 December 2022"
					content="We hebben onlangs nieuwe tegels geplaatst in onze winkel en we zijn van mening dat dit de zaak een mooiere en nettere uitstraling geeft. We zouden graag horen wat u van deze verandering vindt en of u het eens bent met onze mening. Laat het ons weten als u de winkel bezoekt of stuur ons een bericht met uw feedback. We waarderen uw mening altijd."
				/>
			</div>
		</Container>
	)
}
