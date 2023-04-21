import heroImage from "../assets/svg/hero-image.svg"
import monthSnackOne from "../assets/img/static/wings.jpg"
import monthSnackTwo from "../assets/img/static/cheesecrack.jpg"
import activityOne from "../assets/img/static/article01.jpg"
import activityTwo from "../assets/img/static/article02.jpg"
import activityThree from "../assets/img/static/article03.jpg"
import {
	Title,
	Subtitle,
	Paragraph,
	CardTitle,
	HeroParagraph,
	HeroTitle,
} from "../components/Text"
import {
	ExternalPrimaryButton,
	ExternalSecondaryButton,
} from "../components/Button"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import {
	CardWrapper,
	CardText,
	CardImage,
	CardCTA,
	CardContent,
} from "../components/Card"

export default function Home() {
	return (
		<>
			{/* Hero section */}
			<div className="bg-primary shadow shadow-primary text-neutral-100 px-8 py-8 md:py-16 flex flex-col md:flex-row justify-center items-center gap-4">
				<img
					src={heroImage}
					alt="Bezorger"
					title="Bezorger"
					className="h-36 mix-blend-color-burn"
				/>
				<div className="flex flex-col text-center gap-4">
					<div>
						<HeroTitle>
							Bestel nu via <br />
							onze webshop
						</HeroTitle>
					</div>
					<div>
						<HeroParagraph>
							Heerlijk warme én koude gerechten
							<br />
							bezorgd direct tot aan de deur!
						</HeroParagraph>
					</div>
					<div className="flex gap-4">
						<ExternalSecondaryButton to="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
							Bestel nu
						</ExternalSecondaryButton>
						<ExternalPrimaryButton to="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
							Bekijk menu
						</ExternalPrimaryButton>
					</div>
				</div>
			</div>

			{/* Snacks van de maand */}
			<div className="px-8 pt-8">
				<Subtitle>Snacks van de maand</Subtitle>
				{/* Grid for snack cards */}
				<div className="grid grid-cols-1 pt-4 gap-4">
					{/* Card */}
					<CardWrapper>
						<CardImage src={monthSnackOne} alt="Hotwings 5st" />
						<CardContent>
							<CardText>
								<CardTitle>Hotwings</CardTitle>
								<Paragraph>5 stuks</Paragraph>
							</CardText>
							<CardCTA
								to="https://www.e-food.nl/driebergen/cafeteria-de-sluis/snacks/kip-snacks"
								product="Hotwings 5st"
							/>
						</CardContent>
					</CardWrapper>

					{/* Card */}
					<CardWrapper>
						<CardImage src={monthSnackTwo} alt="Cheesecrack" />
						<CardContent>
							<CardText>
								<CardTitle>Cheesecrack</CardTitle>
								<Paragraph>Gevuld met kaas</Paragraph>
							</CardText>
							<CardCTA
								to="https://www.e-food.nl/driebergen/cafeteria-de-sluis/snacks/souffle"
								product="Cheesecrack"
							/>
						</CardContent>
					</CardWrapper>
				</div>
			</div>

			{/* Recente activiteiten */}
			<div className="px-8 pt-8">
				<Subtitle>Recente activiteiten</Subtitle>
				{/* Grid for activity cards */}
				<div className="grid grid-cols-1 pt-4 gap-4">
					{/* Card */}
					<CardWrapper>
						<CardImage src={activityOne} alt="Nieuwe website" />
						<CardContent>
							<CardText>
								<CardTitle>Nieuwe website</CardTitle>
								<Paragraph>
									In 2023 hebben wij onze nieuwe website gelanceerd! We...
								</Paragraph>
							</CardText>
							<CardCTA
								to="https://www.e-food.nl/driebergen/cafeteria-de-sluis/snacks/kip-snacks"
								product="Nieuwe website"
							/>
						</CardContent>
					</CardWrapper>

					{/* Card */}
					<CardWrapper>
						<CardImage src={activityTwo} alt="Gelukkig nieuwjaar!" />
						<CardContent>
							<CardText>
								<CardTitle>Gelukkig nieuwjaar!</CardTitle>
								<Paragraph>
									We hopen dat 2023 een mooi jaar wordt voor iedereen...
								</Paragraph>
							</CardText>
							<CardCTA
								to="https://www.e-food.nl/driebergen/cafeteria-de-sluis/snacks/souffle"
								product="Gelukkig nieuwjaar!"
							/>
						</CardContent>
					</CardWrapper>

					{/* Card */}
					<CardWrapper>
						<CardImage src={activityThree} alt="Tegels vervangen" />
						<CardContent>
							<CardText>
								<CardTitle>Tegels vervangen</CardTitle>
								<Paragraph>
									Recent hebben wij nieuwe tegels in onze winkel
									geïnstalleerd...
								</Paragraph>
							</CardText>
							<CardCTA
								to="https://www.e-food.nl/driebergen/cafeteria-de-sluis/snacks/souffle"
								product="Tegels vervangen"
							/>
						</CardContent>
					</CardWrapper>
				</div>
			</div>

			{/* Openingstijden */}
			<div className="px-8 pt-8">
				<Subtitle>Openingstijden</Subtitle>
				<Paragraph className="py-4">
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
			</div>
		</>
	)
}
