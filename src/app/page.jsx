import React from "react"
import RootLayout from "./layout"
import Home from "@/components/Home.jsx"
import "./globals.css"

export const metadata = {
	title: "Hung Nguyen - Hospitality Professional",
	keywords: [
		"Hung Nguyen",
		"hospitality professional",
		"luxury hotel sales",
		"revenue management",
		"DACH market",
		"CEE market",
		"travel trade distribution",
	],
	description:
		"Dynamic and results-driven hospitality professional with over 18 years of international experience in luxury hotel sales, reservations, and revenue management across Europe, the Middle East, and Asia.",
}
export default function Page() {
	return (
		<RootLayout>
			<main className={` bg-white min-h-screen p:20 w-full flex flex-col items-center sm:justify-between p-4 md:p-10`}>
				<Home />
			</main>
		</RootLayout>
	)
}
