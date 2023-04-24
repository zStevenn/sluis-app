import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Paragraph, Title } from "../components/Text";

export default function NotFound() {
  return (
    <Container className="px-8 pt-8 text-center mb-40">
      <Title>404</Title>
      <Title className="pb-8">Uh oh... Pagina niet gevonden</Title>
      <Paragraph>Het lijkt erop dat de pagina die je probeert te bezoeken niet bestaat.</Paragraph>
      <Paragraph>Probeer het opnieuw of ga terug naar de <Link to="/" className="text-primary underline">homepage</Link>.</Paragraph>
    </Container>
  )
}