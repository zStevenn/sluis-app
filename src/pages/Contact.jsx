import { Paragraph, Subtitle, Title } from "../components/Text"
import { TextInput, TextArea } from "../components/Input"
import Container from "../components/Container"
import { MdEmail, MdPhone, MdLocationOn, MdMail } from "react-icons/md"
import { SubmitButton } from "../components/Button"

export default function Contact() {
	return (
		<Container className="px-8 pt-8 min-h-screen">
			<Title className="pb-4">Contact</Title>
			<Paragraph className="pb-4">
				Een verbetervoorstel, compliment of elders, wij vernemen graag van je!
			</Paragraph>
			<div className="grid gap-4">
				<div className="flex gap-4">
					<MdPhone className="text-2xl" />
					<Paragraph>(0343) 531 646</Paragraph>
				</div>
				<div className="flex gap-4">
					<MdLocationOn className="text-2xl" />
					<Paragraph>De Sluis 25, 3972 CW</Paragraph>
				</div>
				<div className="flex gap-4">
					<MdMail className="text-2xl" />
					<Paragraph>
						<a className="underline" href="mailto:info@cafetariadesluis.nl">
							info@cafetariadesluis
						</a>
					</Paragraph>
				</div>
			</div>
			{/* Contactformulier */}
			<Subtitle className="pt-8 pb-4">Contactformulier</Subtitle>
			<Paragraph className="pb-2">Naam</Paragraph>
			<TextInput placeholder="Naam...">naam</TextInput>
			<Paragraph className="pb-2 pt-2">Email</Paragraph>
			<TextInput placeholder="Emailadres...">email</TextInput>
			<Paragraph className="pb-2 pt-2">Telefoonnummer</Paragraph>
			<TextInput placeholder="Telefoonnummer...">telefoonnummer</TextInput>
			<Paragraph className="pb-2 pt-2">Bericht</Paragraph>
			<TextArea placeholder="Ik vind jullie website...">bericht</TextArea>
			<p className="text-neutral-400 text-sm py-4">
				Dit formulier is niet bedoeld voor het plaatsen van bestellingen of
				vragen naar bezorgtijden. Wij streven om binnen 5 werkdagen te reageren.
			</p>
			<SubmitButton>Verstuur</SubmitButton>

			{/* Google Maps */}
			<Subtitle className="pt-8 pb-4">Locatie</Subtitle>
			<iframe
				src="https://maps.google.com/maps?q=de%20sluis%2025%20driebergen&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
				className="rounded-md"
				width="100%"
				height={400}
				loading="lazy"
				title="Cafetaria de Sluis"
			></iframe>

			{/* Openingstijden */}
			<Subtitle className="pt-8 pb-4">Openingstijden</Subtitle>
			<Paragraph className="pb-2">
				Onze huidige openingstijden voor aankomende zomer zijn:
			</Paragraph>
			<table className="table-auto">
				<tr>
					<td className="pr-4">Maandag</td>
					<td>12:00 - 20:00</td>
				</tr>
				<tr>
					<td className="pr-4">Dinsdag</td>
					<td>12:00 - 20:00</td>
				</tr>
				<tr>
					<td className="pr-4">Woensdag</td>
					<td>12:00 - 20:00</td>
				</tr>
				<tr>
					<td className="pr-4">Donderdag</td>
					<td>12:00 - 20:00</td>
				</tr>
				<tr>
					<td className="pr-4">Vrijdag</td>
					<td>12:00 - 20:00</td>
				</tr>
				<tr>
					<td className="pr-4">Zaterdag</td>
					<td>12:00 - 20:00</td>
				</tr>
				<tr>
					<td className="pr-4">Zondag</td>
					<td>16:00 - 20:00</td>
				</tr>
			</table>

			{/* Overige informatie */}
			<Subtitle className="pt-8 pb-4">Overige informatie</Subtitle>
			<Paragraph className="pb-2">
				Relevante overige informatie over onze cafetaria
			</Paragraph>
			<ul className="list-disc ml-6">
				<li>Parkeergelegenheid</li>
				<li>Toegankelijk voor rolstoelen</li>
				<li>Toegankelijk voor mindervaliden</li>
				<li>Toegankelijk voor kinderwagens</li>
				<li>Toegankelijk voor huisdieren</li>
			</ul>
		</Container>
	)
}
