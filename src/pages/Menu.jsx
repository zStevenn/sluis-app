import { Paragraph, Title } from "../components/Text"
import { TextInput } from "../components/Input"
import Container from "../components/Container"
import { SearchButton } from "../components/Button"

export default function Menu() {
	return (
		<Container className="px-8 pt-8 min-h-screen">
			<Title className="pb-4">Menu</Title>
			<Paragraph className="pb-8">
				Hier vindt u een overzicht van een aantal van onze heerlijke gerechten.
				Houd er rekening mee dat deze selectie slechts een voorbeeld is van ons
				assortiment en dat u de actuele prijzen en de volledige menulijst kunt
				vinden op onze webshop. Neem gerust een kijkje en ontdek de smaken die
				ons restaurant te bieden heeft!
			</Paragraph>
			<Paragraph className="pb-8">
				Ons menu is momenteel niet beschikbaar. U kunt wel een kijkje nemen in
				onze webshop, daar zijn alle gerechten beschikbaar. Onze excuses voor
				het ongemak.
			</Paragraph>
			<div className="flex flex-col md:flex-row items-center gap-4">
				<TextInput placeholder="Zoek een gerecht...">Zoek gerecht</TextInput>
				<SearchButton />
			</div>
		</Container>
	)
}
