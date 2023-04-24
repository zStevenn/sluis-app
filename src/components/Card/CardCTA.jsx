import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

export function ICardCTA({ to, title }) {
	return (
		<Link
			to={to}
			alt={title}
			title={title}
			className="cursor-pointer hover:scale-110 transition-all duration-150 ease-in hover:text-primary"
		>
			<MdKeyboardDoubleArrowRight className="text-3xl" />
		</Link>
	)
}

export function ECardCTA({ to, product }) {
	return (
		<a
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			alt={product}
			title={product}
			className="cursor-pointer hover:scale-110 transition-all duration-150 ease-in hover:text-primary"
		>
			<MdKeyboardDoubleArrowRight className="text-3xl" />
		</a>
	)
}
