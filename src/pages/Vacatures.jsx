import { Paragraph, Subtitle, Title } from "../components/Text"
import Container from "../components/Container"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Vacatures() {
	return (
		<Container className="px-8 pt-8 min-h-screen">
			<Title className="pb-4">Vacatures</Title>
			<Paragraph className="pb-8">
				Op zoek naar je volgende uitdaging? Misschien vind je je volgende baan
				wel bij Cafetaria de Sluis!
			</Paragraph>

			{/* Vacatures grid */}
			<div className="grid gap-4 md:gap-8 grid-cols-1">
				{/* Vacature item */}
				<div className="rounded-md border border-neutral-400/20 hover:bg-neutral-600/30 hover:shadow-md transition-all duration-300 ease-in px-8 py-4 flex flex-row justify-between items-center gap-4">
					<div className="flex-grow">
						<Subtitle>(Elektrische) Fietsbezorger</Subtitle>
						<Paragraph>M/V - 15+ Jaar</Paragraph>
					</div>
					<Link to="/vacatures/bezorger">
						<MdKeyboardDoubleArrowRight className="text-3xl text-neutral-900 hover:text-primary transition-all duration-300 ease-in" />
					</Link>
				</div>
			</div>
		</Container>
	)
}
