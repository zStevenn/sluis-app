import { Link } from "react-router-dom"

export default function Title() {
	return (
		<h1 className="text-2xl font-bold text-center pb-2">
			<Link to="/">
				Cafetaria de Sluis
			</Link>
		</h1>
	)
}
