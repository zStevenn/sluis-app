import Backdrop from "./Backdrop"
import Container from "./Container"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

export function Modal({ handleDismiss, title, message }) {
	return (
		<Backdrop handleDismiss={handleDismiss}>
			<Container>
				<Header>{title}</Header>
				<Content>{message}</Content>
				<Footer handleDismiss={handleDismiss} ></Footer>
			</Container>
		</Backdrop>
	)
}
