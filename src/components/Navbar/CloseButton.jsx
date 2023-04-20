import { MdClose } from "react-icons/md"

export default function CloseButton({ toggleMenu }) {
  return (
    <button onClick={toggleMenu} className="md:hidden">
      <MdClose className="text-4xl" />
    </button>
  )
}