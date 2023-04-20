import { NavLink } from "react-router-dom"
import { useState } from "react"
import CloseButton from "./CloseButton"
import OpenButton from "./OpenButton"
import Title from "./Title"
import { ExternalPrimaryButton } from "../Button"

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	function toggleMenu() {
		setMenuOpen(!menuOpen)
	}

	return (
		// Navbar
		<nav className="bg-primary shadow shadow-primary text-neutral-100 relative px-8 py-2">
			<div className="container mx-auto">
				{/* Title */}
				<Title />
				{/* Menu */}
				<div className="flex justify-between flex-nowrap items-center">
					{/* Mobile menu button */}
					<OpenButton toggleMenu={toggleMenu} />

					{/* Desktop navbar */}
					<ul className="hidden md:flex flex-row gap-4 py-4 text-neutral-100 text-xl font-semibold">
						<li>
							<NavLink to="/" className="text-neutral-100">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/menu" className="text-neutral-100">
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className="text-neutral-100">
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink to="/nieuws" className="text-neutral-100">
								Nieuws
							</NavLink>
						</li>
						<li>
							<NavLink to="/vacatures" className="text-neutral-100">
								Vacatures
							</NavLink>
						</li>
					</ul>

					{/* External order button */}
					<ExternalPrimaryButton to="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
						Bestel nu
					</ExternalPrimaryButton>
				</div>

				{/* Mobile navbar */}
				<div
					className={`absolute h-screen w-screen md:hidden p-0 my-2 top-0 left-0 px-8 bg-primary z-10 text-neutral-100 transition-all duration-500 ${
						menuOpen
							? "opacity-100 translate-x-0"
							: "opacity-30 -translate-x-full pointer-events-none"
					}`}
				>
					<Title />
					<div className="flex justify-between flex-nowrap">
						<CloseButton toggleMenu={toggleMenu} />
					</div>
					<ul className="flex flex-col gap-4 py-4 text-neutral-100 text-xl font-semibold">
						<li onClick={toggleMenu}>
							<NavLink to="/" className="text-neutral-100">
								Home
							</NavLink>
						</li>
						<li onClick={toggleMenu}>
							<NavLink to="/menu" className="text-neutral-100">
								Menu
							</NavLink>
						</li>
						<li onClick={toggleMenu}>
							<NavLink to="/contact" className="text-neutral-100">
								Contact
							</NavLink>
						</li>
						<li onClick={toggleMenu}>
							<NavLink to="/nieuws" className="text-neutral-100">
								Nieuws
							</NavLink>
						</li>
						<li onClick={toggleMenu}>
							<NavLink to="/vacatures" className="text-neutral-100">
								Vacatures
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
