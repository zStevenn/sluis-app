import { MdClose } from "react-icons/md"

export default function Header({ children }) {
	return (
		<div className="flex flex-row justify-between items-center">
			<h3 className="text-lg font-semibold">{children}</h3>
			<MdClose className="text-neutral-500 text-3xl hover:text-neutral-600 cursor-pointer" />
		</div>
	)
}
