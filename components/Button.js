import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

function Button(props) {
	const { text, dark } = props;
	return (
		<button
			className={
				"border-solid rounded-full overflow-hidden duration-200 border-2 border-indigo-600 hover:opacity-60 " +
				(dark ? " text-white bg-indigo-600 " : " text-indigo-600 ")
			}
		>
			<p
				className={
					"px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 " + fugaz.className
				}
			>
				{text}
			</p>
		</button>
	);
}

export default Button;
