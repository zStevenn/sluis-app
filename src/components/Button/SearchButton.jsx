import { MdSearch } from "react-icons/md"

export default function SearchButton({ handleClick }) {
	return (
		<button onClick={handleClick} alt="Zoek" title="Zoek" className="bg-primary shadow shadow-primary rounded-md p-2">
			<MdSearch className="text-2xl text-neutral-100" />
		</button>
	)
}
