import "./globals.css"
import react from "react"
import { Poppins } from "next/font/google"

const PoppinsFont = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
})

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

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={`${PoppinsFont.className} bg-white text-gray-900`}>{children}</body>
		</html>
	)
}
