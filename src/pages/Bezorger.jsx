import { Paragraph, Subtitle, Title } from "../components/Text"
import Container from "../components/Container"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Bezorger() {
	return (
		<Container className="px-8 pt-8 min-h-screen">
			<div className="flex justify-between items-center gap-4 pb-4">
				<Title>Vacature: Fietsbezorger</Title>
				<Link to="/vacatures">
					<MdKeyboardDoubleArrowLeft className="hidden md:block text-5xl text-neutral-900 hover:text-primary transition-all duration-300 ease-in" />
				</Link>
			</div>
			<Paragraph className="pb-4">
				Ben jij op zoek naar een actieve en uitdagende baan waarbij je lekker
				buiten kunt werken? Dan is deze vacature misschien wel iets voor jou!
			</Paragraph>
			<Paragraph className="pb-4">
				Wij zijn op zoek naar enthousiaste fietsbezorgers die onze klanten blij
				willen maken met hun bestelling. Als fietsbezorger ben je
				verantwoordelijk voor het bezorgen van maaltijden op tijd en op de
				juiste locatie. Kortom, een afwisselende en uitdagende baan waarbij je
				dagelijks in beweging bent!
			</Paragraph>
			<Paragraph className="pb-4">
				De werktijden zijn meestal van 17:00 tot 20:00. We zijn voornamelijk op
				zoek naar extra kracht in het weekend.
			</Paragraph>
			<Paragraph className="pb-4">Omschrijft dit jou?</Paragraph>
			<ul className="list-disc ml-5 pb-4">
				<li>Een positieve can-do mentaliteit</li>
				<li>
					Kent Driebergen-Rijsenburg goed of is bereid dit langzaam te leren
				</li>
				<li>Minstens 15 jaar oud</li>
			</ul>

			<Paragraph className="pb-4">
				Stuur dan een mail naar{" "}
				<a
					className="underline"
					title="Stuur email naar Cafetaria de sluis"
					alt="Stuur email naar Cafetaria de sluis"
					href="mailto:info@cafetariadesluis.nl"
				>
					info@cafetariadesluis.nl
				</a>{" "}
				of een whatsappje of belletje naar Anna op
				<a
					className="underline"
					title="Stuur appje naar Anna"
					alt="Stuur appje naar Anna"
					href="tel:0646776868"
				>
					{" "}
					06 46776868
				</a>
				!
			</Paragraph>
		</Container>
	)
}
