import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Loading from "../components/Loading"

const Menu = lazy(() => import("../pages/Menu"))
const Contact = lazy(() => import("../pages/Contact"))
const News = lazy(() => import("../pages/News"))
const Vacatures = lazy(() => import("../pages/Vacatures"))
const VacatureBezorger = lazy(() => import("../pages/Bezorger"))
const NotFound = lazy(() => import("../pages/NotFound"))
// const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"))
// const CookiePolicy = lazy(() => import("../pages/CookiePolicy"))
// const FAQ = lazy(() => import("../pages/FAQ"))
// const UnderConstruction = lazy(() => import("../pages/UnderConstruction"))

export default function DefaultRouter() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/menu" element={<Menu />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route exact path="/nieuws" element={<News />} />
				<Route exact path="/vacatures" element={<Vacatures />} />
				<Route exact path="/loading" element={<Loading />} />
				<Route
					exact
					path="/vacatures/bezorger"
					element={<VacatureBezorger />}
				/>
				{/* <Route path="/privacybeleid" element={<PrivacyPolicy />} /> */}
				{/* <Route path="/cookiebeleid" element={<CookiePolicy />} /> */}
				{/* <Route path="/FAQ" element={<FAQ />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	)
}
