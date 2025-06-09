"use client"

import React from "react"

export default function Home() {
    return (
        <main className="bg-white min-h-screen w-full flex flex-col items-center">
            {/* Sticky Navigation Header */}
            <header className="sticky top-0 w-full bg-white shadow-md z-50 px-0 md:px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Hung Nguyen</h1>
                <nav className="space-x-4 text-sm">
                    <a href="#about" className="hover:text-blue-600 transition">
                        About
                    </a>
                    <a href="#cv" className="hover:text-blue-600 transition">
                        CV
                    </a>
                    <a href="#contact" className="hover:text-blue-600 transition">
                        Contact
                    </a>
                </nav>
            </header>

            {/* Hero Section with Parallax Background Image */}
            <section id="about" className="relative w-full flex justify-center h-[170vh] overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-fixed bg-cover"
                    style={{ backgroundImage: "url('https://framerusercontent.com/images/uHEDEnIDgKcqezly5dfgXGDnckI.jpg')" }}></div>

                <div className="absolute top-1/2 right-0 -translate-y-1 bg-white p-0 md:p-10 w-full md:w-[653px] max-w-[90%] flex flex-col gap-6 z-10 animate-fade-in">
                    <h2 id="about" className="text-2xl md:text-3xl font-bold">
                        My Name is Hung Nguyen, a dynamic and results-driven hospitality professional.
                    </h2>

                    <p className="text-base leading-relaxed">
                        With over <strong>18 years of international experience</strong> in luxury hotel sales, reservations, and revenue
                        management across Europe, the Middle East, and Asia. Proven success in leading commercial strategy, building agency
                        networks, launching new resorts, and optimizing revenue in both pre-opening and mature markets. Skilled in managing
                        complex stakeholder relationships, executing high-impact B2B campaigns, and navigating shifting market dynamics. Strong
                        focus on the <strong>DACH and CEE markets</strong>, with a deep understanding of travel trade distribution and strategic
                        partnerships.
                    </p>

                    <p className="text-sm">
                        Mail:{" "}
                        <a href="mailto:nd.hung@me.com" className="text-blue-500">
                            nd.hung@me.com
                        </a>
                    </p>
                </div>
            </section>

            {/* CV Download Section */}
            <section
                id="cv"
                className="w-full max-w-[1200px] py-10 px-0 md:px-4 flex flex-col md:flex-row justify-center gap-6 md:gap-16 items-center animate-fade-in">
                <a
                    href="https://framerusercontent.com/assets/v54I8rvyfCdHaEYa7c6CHQ0.pdf"
                    className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                    target="_blank"
                    rel="noopener noreferrer">
                    Download CV (English)
                </a>
                <a
                    href="https://framerusercontent.com/assets/mIQVIZrYYsADMDDk71rnAKd8r7A.pdf"
                    className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                    target="_blank"
                    rel="noopener noreferrer">
                    Download CV (German)
                </a>
            </section>

            {/* Footer Section */}
            <footer
                id="contact"
                className="w-full max-w-[1200px] py-8 px-0 md:px-4 flex flex-col md:flex-row justify-between items-center text-center animate-fade-in">
                <p className="text-sm text-gray-600">© built by Hung Nguyen 2024</p>
                <a href="mailto:email@email.com" className="text-blue-500 text-sm mt-2 md:mt-0">
                    Get in touch.
                </a>
            </footer>

            {/* Simple fade-in animation */}
            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 1.2s ease-in-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </main>
    )
}
