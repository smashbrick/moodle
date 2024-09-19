import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calender from "./Calender";
// import Link from "next/link";
import CallToAction from "./CallToAction";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

function Hero() {
	return (
		<div className="py-10  md:py-10 flex flex-col gap-8 sm:gap-10 ">
			<h1
				className={
					"text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
				}
			>
				<span className="textGradient">Moodle</span> helps you track your{" "}
				<span className="textGradient">daily</span> mood!
			</h1>
			<p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto  max-w-[600px] ">
				Create your mood record and see how you feel on{" "}
				<span className="font-semibold">every day of every year.</span>
			</p>

			{/* w-fit ensures the button only takes up the space it needs, essentially fitting the content */}
			<CallToAction demo />
			<Calender demo />
		</div>
	);
}

export default Hero;
