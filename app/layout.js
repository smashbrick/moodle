import "./globals.css";
import { Open_Sans, Fugaz_One } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
	title: "Moodle",
	description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
	const header = (
		<header className="p-4 sm:p-8 flex items-center justify-between gap-4">
			<Link href={"/"}>
				<h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
					Moodle
				</h1>
			</Link>
			<div className="flex items-center justify-between">Placeholder</div>
		</header>
	);

	const footer = (
		<footer className={`p-4 sm:p-8 grid place-items-center`}>
			<p className={`text-indigo-500 ${fugaz.className}`}>Made with 💛</p>
		</footer>
	);

	return (
		<html lang="en">
			<body
				className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ${openSans.className}`}
			>
				{header}
				{children}
				{footer}
			</body>
		</html>
	);
}
