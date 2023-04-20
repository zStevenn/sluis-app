import { MdMenu } from "react-icons/md"

export default function OpenButton({ toggleMenu }) {
	return (
		<button onClick={toggleMenu} className="md:hidden">
			<MdMenu className="text-4xl" />
		</button>
	)
}
