import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import Container from "./Container"

function FooterTitle({ children, className = "" }) {
	return <h3 className={`text-xl text-neutral-100 ${className}`}>{children}</h3>
}

function FooterText({ children, className = "" }) {
	return (
		<p className={`text-sm py-0.5 text-neutral-100 ${className}`}>{children}</p>
	)
}

function FooterLink({ children, to, className = "" }) {
	return (
		<Link to={to} title={children} alt={children}>
			<FooterText
				className={`text-sm py-0.5 flex gap-2 items-center text-neutral-100 ${className}`}
			>
				<MdKeyboardDoubleArrowRight className="inline-flex text-xl text-neutral-100" />
				{children}
			</FooterText>
		</Link>
	)
}

export default function Footer() {
	return (
		<footer className="bg-primary px-8 py-8 mt-8">
			<Container className="flex flex-col md:flex-row md:justify-between gap-8">
				{/* Adress details */}
				<div>
					<FooterTitle className="mb-2">Adresgegevens</FooterTitle>
					<FooterText>De Sluis 25, 3972 VC</FooterText>
					<FooterText>Driebergen-Rijsenburg</FooterText>
					<FooterText className="pb-3">Utrecht, Nederland</FooterText>
					<FooterText>(0343) - 531 646</FooterText>
					<FooterText className="underline">
						<a
							alt="Mail naar info@cafetariadesluis.nl"
							title="Mail naar info@cafetariadesluis.nl"
							href="mailto:info@cafetariadesluis.nl"
						>
							info@cafetariadesluis.nl
						</a>
					</FooterText>
				</div>
				{/* Openingtimes */}
				<div>
					<FooterTitle className="mb-2">Openingstijden</FooterTitle>
					<FooterText>Maandag: 12:00 - 21:00</FooterText>
					<FooterText>Dinsdag: 12:00 - 21:00</FooterText>
					<FooterText>Woensdag: 12:00 - 21:00</FooterText>
					<FooterText>Donderdag: 12:00 - 21:00</FooterText>
					<FooterText>Vrijdag: 12:00 - 21:00</FooterText>
					<FooterText>Zaterdag: 12:00 - 21:00</FooterText>
					<FooterText>Zondag: 16:00 - 21:00</FooterText>
				</div>
				{/* Links */}
				<div>
					<FooterTitle className="mb-2">Links</FooterTitle>
					<FooterLink to="/bestellen">Bestellen</FooterLink>
					<FooterLink to="/menu">Menu</FooterLink>
					<FooterLink to="/contact">Contact</FooterLink>
					<FooterLink to="/nieuws">Nieuws</FooterLink>
					<FooterLink to="/faq">FAQ</FooterLink>
					<FooterLink to="/privacybeleid">Privacybeleid</FooterLink>
					<FooterLink to="/sitemap">Sitemap</FooterLink>
				</div>
			</Container>
		</footer>
	)
}
