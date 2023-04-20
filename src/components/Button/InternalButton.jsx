import { Link } from "react-router-dom"

export function InternalPrimaryButton({ children, to }) {
  return (
    <Link to={to} className="bg-primary text-neutral-100 px-4 py-2 rounded-md">
      {children}
    </Link>
  )
}