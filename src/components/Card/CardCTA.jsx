import { MdKeyboardDoubleArrowRight } from "react-icons/md"

export default function CardCTA({ to, product }) {
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
