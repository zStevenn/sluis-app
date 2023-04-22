import { Paragraph, Subtitle, Title, ErrorText } from "../components/Text"
import { TextInput } from "../components/Input"
import Container from "../components/Container"
import { MdPhone, MdLocationOn, MdMail } from "react-icons/md"
import { SubmitButton } from "../components/Button"
import { useState } from "react"
import { Modal } from "../components/Modal"

// Encode data to be sent to Netlify
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

export default function Contact() {
	const [showModal, setShowModal] = useState(false)
	const [modalTitle, setModalTitle] = useState("")
	const [modalMessage, setModalMessage] = useState("")
	const [error, setError] = useState("")
	const [nameError, setNameError] = useState("")
	const [emailError, setEmailError] = useState("")
	const [phoneError, setPhoneError] = useState("")
	const [messageError, setMessageError] = useState("")

	//Create an initial form state
	const initialState = {
		name: "",
		email: "",
		phone: "",
		message: "",
	}

	// Create state for form
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault()

		setNameError("")
		setEmailError("")
		setPhoneError("")
		setMessageError("")

		// Destructure the formState to get the form fields
		const { name, email, phone, message } = formState

		if (!name) {
			return setNameError("Vul je naam in")
		}

		if (!email) {
			return setEmailError("Vul je emailadres in")
		}

		if (!phone) {
			return setPhoneError("Vul je telefoonnummer in")
		}

		if (!message) {
			return setMessageError("Vul je bericht in")
		}

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formState }),
		})
			.then(() => {
				setFormState(initialState)
				setShowModal(true)
				setModalTitle("Bedankt voor je bericht!")
				setModalMessage("We nemen zo snel mogelijk contact met je op.")
			})
			.catch(error => {
				console.log(error)
			})
	}

	// Handle form input changes
	const handleChange = e =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	return (
		<>
			{showModal && (
				<Modal
					title={modalTitle}
					message={modalMessage}
					handleDismiss={() => setShowModal(false)}
				/>
			)}
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
				<form onSubmit={handleSubmit}>
					<Subtitle className="pt-8 pb-4">Contactformulier</Subtitle>
					<Paragraph className="pb-2">Naam</Paragraph>
					<TextInput
						placeholder="Naam..."
						onChange={handleChange}
						value={formState.name}
					>
						name
					</TextInput>
					{nameError && <ErrorText>{nameError}</ErrorText>}
					<Paragraph className="pb-2 pt-2">Email</Paragraph>
					<TextInput
						placeholder="Emailadres..."
						onChange={handleChange}
						value={formState.email}
					>
						email
					</TextInput>
					{emailError && <ErrorText>{emailError}</ErrorText>}
					<Paragraph className="pb-2 pt-2">Telefoonnummer</Paragraph>
					<TextInput
						placeholder="Telefoonnummer..."
						onChange={handleChange}
						value={formState.phone}
					>
						phone
					</TextInput>
					{phoneError && <ErrorText>{phoneError}</ErrorText>}
					<Paragraph className="pb-2 pt-2">Bericht</Paragraph>
					<textarea
						className="w-full h-24 px-4 py-2 text-gray-700 border rounded-lg"
						name="message"
						id="message"
						value={formState.message}
						onChange={handleChange}
						placeholder="Ik vind jullie website..."
						cols="30"
						rows="10"
					></textarea>
					{messageError && <ErrorText>{messageError}</ErrorText>}
					<p className="text-neutral-400 text-sm pb-4">
						Dit formulier is niet bedoeld voor het plaatsen van bestellingen of
						vragen naar bezorgtijden. Wij streven om binnen 5 werkdagen te
						reageren. Uw gegevens worden enkel gebruikt om contact met u op te
						nemen. Uw gegevens worden niet gedeeld met derden.
					</p>
					<SubmitButton>Verstuur</SubmitButton>
				</form>

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
					<tbody>
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
					</tbody>
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
		</>
	)
}
