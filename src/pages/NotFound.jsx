import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Paragraph, Title } from "../components/Text";
import NotFoundImage from "../assets/svg/404.svg";

export default function NotFound() {
  return (
    <Container className="px-8 pt-8 text-center mb-40 fade-in-left-1000">
      <img src={NotFoundImage} alt="404" className="w-96 mx-auto" />
      <Title className="text-2xl mb-4">404 Pagina niet gevonden</Title>
      <Paragraph>Het lijkt erop dat de pagina die je probeert te bezoeken niet bestaat.</Paragraph>
      <Paragraph>Terug naar <Link to="/" className="text-primary underline">home</Link>.</Paragraph>
    </Container>
  )
}